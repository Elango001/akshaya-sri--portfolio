import { MProganoNavbar } from "@/components/MProganoNavbar";
import { MProganoHero } from "@/components/MProganoHero";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { SelectedWorksSection } from "@/components/SelectedWorksSection";
import { ApproachSection } from "@/components/ApproachSection";
import { HeuristicsSection } from "@/components/HeuristicsSection";
import { FaqSection } from "@/components/FaqSection";
import { ConnectFooter } from "@/components/ConnectFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors overflow-x-hidden">
      <MProganoNavbar />
      <main className="flex-1 w-full">
        <MProganoHero />
        <CapabilitiesSection />
        <SelectedWorksSection />
        <ApproachSection />
        <HeuristicsSection />
        <FaqSection />
      </main>
      <ConnectFooter />
    </div>
  );
}
