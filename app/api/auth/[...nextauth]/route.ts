import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import User from '@/mongodb/models/User'
import { NextAuthOptions, User as UserType, Profile, Account } from "next-auth"
import connectDb from '@/mongodb/connect'

interface SignInArgs {
    user: UserType,
    account: Account | null,
    profile?: Profile,
    email?: string | { verificationRequest?: boolean },
    credentials?: Record<string, unknown>,
  }

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!, // ! important
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      // ...add more providers here
    ],
    secret: process.env.SECRET,  //for encode of JWT token of user inside user
    callbacks: {
        async signIn({ user, account, profile, email, credentials }: SignInArgs): Promise<boolean> {
          try {
            console.log('User:', user);
            console.log('Profile:', profile);
      
            if (account && account.provider === 'google') {
              const googleUser = {
                name: user.name,
                email: user.email,
                image: user.image,
              }
              const existingUser = await User.findOne({ email: user.email })
              if (existingUser) {
                await User.updateOne({ email: user.email }, { $set: { name: googleUser.name, image: googleUser.image }})
              } else {
                await User.create(googleUser)
              }
            }
            return true
          } catch (error) {
            console.error('Error in signIn callback:', error)
            throw error
          }
        },
      },    
 }
    

  const handler = connectDb(NextAuth(authOptions));

  export { handler as GET, handler as POST }
