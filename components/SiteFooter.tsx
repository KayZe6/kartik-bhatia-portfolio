import { Container } from "./Container";
import { hero } from "@/data/hero";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-8">
      <Container>
        <p className="text-sm text-ink-muted">
          © {year} {hero.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
