import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import AzureADProvider from "next-auth/providers/azure-ad";
import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
import { DynamoDBAdapter } from "@auth/dynamodb-adapter"


const config: DynamoDBClientConfig = {
  credentials: {
    accessKeyId: process.env.NEXT_AUTH_AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.NEXT_AUTH_AWS_SECRET_KEY as string,
  },
  region: process.env.NEXT_AUTH_AWS_REGION,
};

const client = DynamoDBDocument.from(new DynamoDB(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
});

export const authOptions: any = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
      checks: ['none'],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      }
    }),
    // AzureADProvider({
    //   clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID as string,
    //   clientSecret: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_SECRET as string,
    //   tenantId: process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID as string,
    //   checks: ['none']
    // }),
  ],
  adapter: DynamoDBAdapter(
    client,
    {
      tableName: 'users',
      partitionKey: "pk",
      sortKey: "sk",
      indexName: "GSI1",
      indexPartitionKey: "GSI1PK",
      indexSortKey: "GSI1SK",
    }
  ),
  callbacks: {
    jwt: async ({ token, account, trigger, session }: any) => {

      return { ...token, ...account }
    },
    session: async ({ session, token }: any) => {
      return {
        ...session,
        user: {
          ...session.user,
          ...token
        },
      }
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: '/auth/login'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };