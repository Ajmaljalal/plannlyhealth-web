import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { icons } from "@/lib/icons";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-center align-center">
      <Container className="w-full">
        <Link href="/dashboard">Go to dashboard</Link>
      </Container>
    </div>
  )
}
