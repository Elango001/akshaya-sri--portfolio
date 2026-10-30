import { MProganoNavbar } from "@/components/MProganoNavbar";
import { MProganoHero } from "@/components/MProganoHero";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { SelectedWorksSection } from "@/components/SelectedWorksSection";
import { ApproachSection } from "@/components/ApproachSection";
import { HeuristicsSection } from "@/components/HeuristicsSection";
import { FaqSection } from "@/components/FaqSection";
import { ConnectSection } from "@/components/ConnectSection";
import { MProganoFooter } from "@/components/MProganoFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors">
      <MProganoNavbar />
      <main className="flex-1">
        <MProganoHero />
        <CapabilitiesSection />
        <SelectedWorksSection />
        <ApproachSection />
        <HeuristicsSection />
        <FaqSection />
        <ConnectSection />
      </main>
      <MProganoFooter />
    </div>
  );
}
