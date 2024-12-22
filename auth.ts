import { eq } from "drizzle-orm";
import { compare } from "bcryptjs";
import NextAuth, { User } from "next-auth";
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

import redis from "@/database/redis";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: UpstashRedisAdapter(redis),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials.email.toString()))
          .limit(1);

        if (user.length === 0) return null;

        const isPasswordValid = await compare(
          credentials.password.toString(),
          user[0].password
        );

        if (!isPasswordValid) return null;

        const authorizedUser: User = {
          id: user[0].id.toString(),
          email: user[0].email,
          name: user[0].fullname,
          universityId: user[0].universityId,
          status: user[0].status as string,
          isActive: user[0].isActive!,
        };

        return authorizedUser;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.universityId = user.universityId;
        token.status = user.status;
        token.isActive = user.isActive;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.universityId = token.universityId as number;
        session.user.status = token.status as string;
        session.user.isActive = token.isActive as boolean;
      }
      return session;
    },
  },
});
