
import { Container } from "@/components/container";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-center align-center h-full">
      <Container className="w-full flex items-center justify-center">
        <Link href="/dashboard">Loading...</Link>
      </Container>
    </div>
  )
}
