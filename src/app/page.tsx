import HeroTop from "@/components/HeroTop";
import HeroNatural from "@/components/HeroNatural";
import CollectionsGrid from "@/components/CollectionsGrid";
import Editorial from "@/components/Editorial";
import NewArrivals from "@/components/NewArrivals";
import Showcase from "@/components/Showcase";
import AccordionFeature from "@/components/AccordionFeature";
import GiantFooter from "@/components/GiantFooter";

export default function Home() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#fcfbf9' }}>
      <HeroTop />
      <HeroNatural />
      <CollectionsGrid />
      <Editorial />
      <NewArrivals />
      <Showcase />
      <AccordionFeature />
      <GiantFooter />
    </main>
  );
}
