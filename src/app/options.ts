import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import backendClient from "@/infrastructure/backend-client";

export const options: NextAuthOptions = {
  debug: true,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/users/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.userId = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const body = {
          email: credentials?.email,
          password: credentials?.password,
        };
        try {
          const response = await backendClient.post<typeof body>("/api/v1/auth/sign_in", body);
          if (!response.ok) {
            return null;
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return response.data;
        } catch (e) {
          // TODO: loggerを導入する
          console.error(e);
        }
      },
    }),
  ],
};
