import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  debug: true,
  session: { strategy: "jwt" },
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
        console.log(credentials);
        console.log("inside the authorize");
        const users = [{ id: "1", email: "example@mail.com", password: "password" }];

        const user = users.find((user) => user.email === credentials?.email);

        console.log(user);

        if (user) return user;
        return null;
      },
    }),
  ],
  callbacks: {
    // jwt: async ({ token, user, account, profile, isNewUser }) => {
    //   // 注意: トークンをログ出力してはダメです。
    //   console.log("in jwt", { user, token, account, profile });
    //   if (user) {
    //     token.user = user;
    //     const u = user as any;
    //     token.role = u.role;
    //   }
    //   if (account) {
    //     token.accessToken = account.access_token;
    //   }
    //   return token;
    // },
    // session: ({ session, token }) => {
    //   console.log("in session", { session, token });
    //   token.accessToken;
    //   return {
    //     ...session,
    //     user: {
    //       ...session.user,
    //       role: token.role,
    //     },
    //   };
    // },
  },
};
