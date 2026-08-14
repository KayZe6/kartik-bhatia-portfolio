import Link from "next/link";
import { Container } from "@/components/Container";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <Container className="flex flex-col gap-4 py-24 text-center sm:py-32">
        <h1 className="text-3xl font-semibold text-ink sm:text-4xl">Page not found</h1>
        <p className="text-ink-muted">That page doesn&apos;t exist.</p>
        <Link href="/" className="mt-2 text-rust hover:underline">
          ← Back home
        </Link>
      </Container>
    </>
  );
}
