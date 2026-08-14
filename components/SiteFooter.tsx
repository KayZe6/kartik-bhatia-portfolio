import { Container } from "./Container";
import { contact } from "@/data/contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-8">
      <Container>
        <p className="text-sm text-ink-muted">{contact.footerCredit}</p>
      </Container>
    </footer>
  );
}
