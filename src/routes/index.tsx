import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ContactSection } from "@/components/site/ContactSection";
import { Hero, Mission, Services, Process, Faq, SiteFooter } from "@/components/site/Sections";

const title = "MD Legal Contract Advisory | Commercial Contract Specialists";
const description =
  "Specialist advisory on commercial and corporate contracts in Johannesburg — drafting, review, negotiation, compliance, and contract lifecycle management.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Process />
        <Faq />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
