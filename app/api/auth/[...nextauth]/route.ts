import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitchProvider from "next-auth/providers/twitch";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          access_type: "offline",
          response_type: "code",
          prompt: "consent"
        }
      }
    }),
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID!,
      clientSecret: process.env.TWITCH_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'openid user:read:email'
        }
      }
    })
  ],
  debug: true,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.accessToken = token.accessToken as string;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      if (!user?.email) {
        return false;
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      return baseUrl;
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  events: {
    async signIn(message) {
      console.log("Successful sign in", message);
    },
    async error(message) {
      console.error("Auth error:", message);
    }
  },
  pages: {
    signIn: '/login',
    error: '/login'
  },
  useSecureCookies: true,
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true
      }
    }
  }
});

export { handler as GET, handler as POST };