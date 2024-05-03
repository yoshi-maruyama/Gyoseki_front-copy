import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import backendClient from "@/infrastructure/backend-client";
import { handleLog } from "@/utils/logger";
import { cookies } from "next/headers";

export const options: NextAuthOptions = {
  debug: true,
  session: { strategy: "jwt" },
  pages: {
    // NOTE: 多言語対応できていない
    signIn: "/en/users/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.token = user.token;
        // NOTE: railsアプリケーションが認証に使うための値。nextjsへ完全移行したら不要。
        cookies().set("gyoseki_auth", user.token || "");
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.token = token.token;
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
          if (response.error !== null) {
            return null;
          }
          return response.data;
        } catch (e) {
          handleLog(e);
        }
      },
    }),
  ],
};
