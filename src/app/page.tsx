import { checkAuth } from "@/lib/services/auth";


export default async function Home() {
  return await checkAuth()
}
