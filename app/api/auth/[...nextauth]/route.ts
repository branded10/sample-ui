import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import User from '@/mongodb/models/User'
import { NextAuthOptions, User as UserType, Profile, Account } from "next-auth"
import { JWT } from "next-auth/jwt"
import jwt from 'jsonwebtoken';


import connectDb from '@/mongodb/connect'

// For Google
interface SignInArgs {
    user: UserType,
    account: Account | null,
    profile?: Profile,
    email?: string | { verificationRequest?: boolean },
    // credentials?: Record<string, unknown>,
    credentials?: {
      name?: string,
      email?: string,
      password?: string,
      phoneNumber?: string,
      // country?: string
    },
}

// For JWT
interface Token {
    iat: number
    exp: number
    sub: string
    name: string
    email: string
    picture: string
}

interface Session {
    user: Token
}

interface UserDetails {
  name?: string;
  email?: string;
  image?: string;
  password?: string;
  phoneNumber?: string;
  // country?: string;
}

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    secret: process.env.SECRET,
    callbacks: {
        async signIn({ user, account, profile, email, credentials }: SignInArgs): Promise<boolean> {
          try {
            console.log('User:', user);
            console.log('Profile:', profile);
      
            let userDetails: UserDetails  = {};

            if (account && account.provider === 'google') {
              userDetails = {
                name: user.name ? user.name : '',
                email: user.email ? user.email : '',
                image: user.image ? user.image : '',
                // phoneNumber and country will be null
              };
            } else if (credentials) {
              // This is a custom registration
              userDetails = {
                name: credentials.name || '',
                email: credentials.email || '',
                password: credentials.password || '',
                phoneNumber: credentials.phoneNumber || '',
                // country: credentials.country || ''
              };
            }

            // Creating JWT token
    const token = jwt.sign(userDetails, process.env.JWT_SECRET!, { expiresIn: '1h' });

    // Saving the token and other details in the user document
    const existingUser = await User.findOne({ email: userDetails.email });
        
           
    if (existingUser) {
      await User.updateOne({ email: userDetails.email }, { $set: { ...userDetails, token } });
    } else {
      await User.create({ ...userDetails, token });
    }
  
            return true
          } catch (error) {
            console.error('Error in signIn callback:', error)
            throw error
          }
        },
        // async jwt(token, user, account, profile, isNewUser) {
        //   if (user) {
        //     token.name = user.name!
        //     token.email = user.email!
        //     token.picture = user.image!
        //   }
        //   return token
        // },
        // async session(session, token) {
        //   session.user = token
        //   return session
        // },
    },    
}

const handler = connectDb(NextAuth(authOptions));

export { handler as GET, handler as POST }
