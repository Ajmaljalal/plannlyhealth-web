import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '240416965034-92hr3prem5qfcv6kqkbaob4iaes2j3qj.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };