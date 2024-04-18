import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const users = [{ id: "1", email: "example@mail.com", password: "password" }];

        const user = users.find((user) => user.email === credentials?.email);

        console.log(user);

        if (user) return user;
        return null;
      },
    }),
  ],
};
