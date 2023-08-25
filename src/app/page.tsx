
import { checkAuth } from "@/lib/helpers";

export default async function Home() {
  return await checkAuth()
}
