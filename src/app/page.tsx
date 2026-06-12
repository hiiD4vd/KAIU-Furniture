import HeroTop from "@/components/HeroTop";
import TimelessElegance from "@/components/TimelessElegance";
import ShopByRoom from "@/components/ShopByRoom";

export default function Home() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <HeroTop />
      <TimelessElegance />
      <ShopByRoom />
    </main>
  );
}
