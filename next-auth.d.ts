import { User } from "next-auth";

declare module "next-auth" {
  interface User {
    universityId?: number;
    status?: string;
    isActive?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    universityId?: number;
    status?: string;
    isActive?: boolean;
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser extends User {
    universityId?: number;
    status?: string;
    isActive?: boolean;
  }
}
