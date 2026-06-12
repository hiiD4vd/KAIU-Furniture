import HeroTop from "@/components/HeroTop";
import TimelessElegance from "@/components/TimelessElegance";
import ShopByRoom from "@/components/ShopByRoom";
import Products from "@/components/Products";
import RoomCover from "@/components/RoomCover";
import Editorial from "@/components/Editorial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <HeroTop />
      <TimelessElegance />
      <ShopByRoom />
      
      {/* Katalog Produk Utama (Semua Produk + Filter Kategori) */}
      <Products />

      {/* Halaman/Section Khusus Dining Room */}
      <RoomCover 
        title="Dining Room" 
        bgImage="/assets/dining room/meja 1.jpg" 
      />
      <Products roomFilter="Dining Room" />

      {/* Halaman/Section Khusus Living Room */}
      <RoomCover 
        title="Living Room" 
        bgImage="/assets/living room/sofa 1.jpg" 
      />
      <Products roomFilter="Living Room" />

      {/* Halaman/Section Khusus Outdoor Space */}
      <RoomCover 
        title="Outdoor Space" 
        bgImage="/assets/outdoor/sofa 1.jpg" 
      />
      <Products roomFilter="Outdoor Space" />

      <Editorial />
      
      <Footer />
    </main>
  );
}
