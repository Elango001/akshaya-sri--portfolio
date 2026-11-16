import { SquaredNavbar } from "@/components/SquaredNavbar";
import { MProganoHero } from "@/components/MProganoHero";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { SelectedWorksSection } from "@/components/SelectedWorksSection";
import { ApproachSection } from "@/components/ApproachSection";
import { HeuristicsSection } from "@/components/HeuristicsSection";
import { FaqSection } from "@/components/FaqSection";
import { ConnectFooter } from "@/components/ConnectFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[var(--text-primary)] transition-colors overflow-x-hidden selection:bg-[#ff4500]/20 selection:text-[#ff4500]">
      <SquaredNavbar />
      <main className="flex-1 w-full bg-transparent pt-20 sm:pt-24">
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
