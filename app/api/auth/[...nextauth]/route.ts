import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!, // ! important
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      // ...add more providers here
    ],
    secret: process.env.SECRET  //for encode of JWT token of user inside user
  };

  const handler = NextAuth(authOptions);

  export { handler as GET, handler as POST }