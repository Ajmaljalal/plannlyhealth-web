import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import AzureADProvider from "next-auth/providers/azure-ad";
const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '240416965034-92hr3prem5qfcv6kqkbaob4iaes2j3qj.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    AzureADProvider({
      clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_SECRET as string,
      tenantId: process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID as string,

    }),
  ],
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };