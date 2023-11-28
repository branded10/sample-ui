import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { SessionProvider, getSession, useSession } from "next-auth/react";
import User from "@/mongodb/models/User";
import { NextAuthOptions, User as UserType, Profile, Account } from "next-auth";
// import { JWT } from "next-auth/jwt";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import Cookies from 'cookies';


import connectDb from "@/mongodb/connect";

// For Google
interface SignInArgs {
  user: UserType;
  account: Account | null;
  profile?: Profile;
  email?: string | { verificationRequest?: boolean };
  // credentials?: Record<string, unknown>,
  credentials?: {
    name?: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    // country?: string
  };
}

// For JWT
interface Token {
  iat: number;
  exp: number;
  sub: string;
  name: string;
  email: string;
  picture: string;
}

interface Session {
  user: Token;
}

interface UserDetails {
  name?: string;
  email?: string;
  image?: string;
  password?: string;
  phoneNumber?: string;
  // country?: string;
}

// const session = await getSession(context);



export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  // secret: process.env.SECRET,
  database: process.env.MONGODB_URI,
  callbacks: {
    jwt: async (token:any, user:any, profile:any) => {
      // If the user is signing in for the first time, use the user data from the provider
      if (user) {
        token.userId = user.id
        token.name = user.name
        token.email = user.email
      }
      // If the user is signing in with the custom registration form, use the user data from the JWT token
      else {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
          throw new Error("JWT Secret is undefined");
        }
        // Verify the JWT token and get the user data
        const decoded = jwt.verify(token, secret)
        // Fetch the user from the database using the userId
        const user = await User.findById(decoded.userId)
        // Add the user data to the token
        token.userId = user._id
        token.name = user.name
        token.email = user.email
      }
      // Return the updated token
      return token
    },
    // Use the session callback to customize the session object
    session: async (session, token) => {
      // Add any additional data to the session object here
      // For example, you can fetch the user's role from the database
      const role = await getUserRole(token.userId)
      // Add the role to the session object
      session.user.role = role
      // Return the updated session object
      return session
    }
  }
};

const handler = connectDb(NextAuth(authOptions));

export { handler as GET, handler as POST };