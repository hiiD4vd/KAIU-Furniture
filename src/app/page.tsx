import HeroTop from "@/components/HeroTop";
import TimelessElegance from "@/components/TimelessElegance";
import ShopByRoom from "@/components/ShopByRoom";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <HeroTop />
      <TimelessElegance />
      <ShopByRoom />
      <Products />
    </main>
  );
}
