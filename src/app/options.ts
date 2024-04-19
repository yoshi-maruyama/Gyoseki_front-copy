import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import backendClient from "@/infrastructure/backend-client";

export const options: NextAuthOptions = {
  debug: true,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/users/sign-in",
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
          return response.data;
        } catch (e) {
          // TODO: loggerを導入する
          console.error(e);
        }
      },
    }),
  ],
};
