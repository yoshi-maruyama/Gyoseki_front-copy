export enum Role {
  user = "user",
  admin = "admin",
}

declare module "next-auth" {
  interface User {
    token?: string;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token?: string;
  }
}
