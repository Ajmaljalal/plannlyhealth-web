
import { checkAuth } from "@/lib/helpers";


export default async function Home() {
  await checkAuth()
}
