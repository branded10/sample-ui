// https://next-auth.js.org/getting-started/example
// https://next-auth.js.org/providers/google#options  ---> Google Provider

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!, // ! important
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
};

console.log('Google ID:', process.env.GOOGLE_CLIENT_ID);
console.log('Google Secret:', process.env.GOOGLE_CLIENT_SECRET);

export default NextAuth(authOptions);