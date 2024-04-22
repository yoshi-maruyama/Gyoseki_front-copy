export enum Role {
  user = "user",
  admin = "admin",
}

declare module "next-auth" {
  interface User {
    id?: string;
    email?: string;
    name?: string;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string;
  }
}
