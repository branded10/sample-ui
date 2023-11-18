import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import User from '@/mongodb/models/User'

export const authOptions = {
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
        async signIn({ user, account, profile, email, credentials }): Promise<any> {
          if (account.provider === 'google') {
            const googleUser = {
              name: user.name,
              email: user.email,
              image: user.image,
            }
            const existingUser = await User.findOne({ email: user.email })
            if (existingUser) {
              await User.updateOne({ email: user.email }, { name: googleUser.name, image: googleUser.image })
            } else {
              await User.create(googleUser)
            }
          }
          return true
        },
      },  
};

  const handler = NextAuth(authOptions);

  export { handler as GET, handler as POST }