import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SkillsSection } from "@/components/SkillsSection";
import { FeaturedWorkSection } from "@/components/FeaturedWorkSection";
import { MinorProjectsSection } from "@/components/MinorProjectsSection";
import { OutreachSection } from "@/components/OutreachSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsSection />
      <FeaturedWorkSection />
      <MinorProjectsSection />
      <OutreachSection />
      <ContactSection />
    </>
  );
}
