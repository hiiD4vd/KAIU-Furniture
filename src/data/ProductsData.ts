export type Product = {
  id: number;
  badge: string;
  img: string;
  category: string;
  room: string;
};

export const RAW_PRODUCTS: Product[] = [
  // 9 original items
  { id: 1, badge: 'Exclusive', img: '/assets/living room/sofa.png', category: 'Sofas', room: 'Living Room' },
  { id: 2, badge: '', img: '/assets/kursi.png', category: 'Accent Chairs', room: 'Living Room' },
  { id: 3, badge: 'New', img: '/assets/stool.png', category: 'Accent Chairs', room: 'Living Room' },
  { id: 4, badge: '', img: '/assets/lamp.png', category: 'Sets', room: 'Living Room' },
  { id: 5, badge: 'Exclusive', img: '/assets/dining room/kursi.png', category: 'Desk Chairs', room: 'Dining Room' },
  { id: 6, badge: 'New', img: '/assets/outdoor/sofa.png', category: 'Sofas', room: 'Outdoor Space' },
  { id: 7, badge: 'Exclusive', img: '/assets/laci.png', category: 'Sets', room: 'Living Room' },
  { id: 8, badge: '', img: '/assets/living room/meja.png', category: 'Sets', room: 'Living Room' },
  { id: 9, badge: 'New', img: '/assets/outdoor/meja.png', category: 'Sets', room: 'Outdoor Space' },
  // 14 new items
  { id: 10, badge: 'Best Seller', img: '/assets/produk/sofa (1).png', category: 'Sectional Sofas', room: 'Living Room' },
  { id: 11, badge: '', img: '/assets/produk/kursi (1).png', category: 'Accent Chairs', room: 'Living Room' },
  { id: 12, badge: 'New', img: '/assets/produk/meja bundar (1).png', category: 'Sets', room: 'Dining Room' },
  { id: 13, badge: '', img: '/assets/produk/meja laci (1).png', category: 'Sets', room: 'Living Room' },
  { id: 14, badge: 'Exclusive', img: '/assets/produk/kursi (2).png', category: 'Desk Chairs', room: 'Dining Room' },
  { id: 15, badge: '', img: '/assets/produk/sofa (2).png', category: 'Sofas', room: 'Living Room' },
  { id: 16, badge: '', img: '/assets/produk/meja laci (2).png', category: 'Sets', room: 'Living Room' },
  { id: 17, badge: 'New', img: '/assets/produk/sofa (3).png', category: 'Sofas', room: 'Living Room' },
  { id: 18, badge: '', img: '/assets/produk/meja bundar (2).png', category: 'Sets', room: 'Dining Room' },
  { id: 19, badge: 'Exclusive', img: '/assets/produk/meja laci (3).png', category: 'Sets', room: 'Living Room' },
  { id: 20, badge: '', img: '/assets/produk/kursi (3).png', category: 'Accent Chairs', room: 'Living Room' },
  { id: 21, badge: '', img: '/assets/produk/meja bundar (3).png', category: 'Sets', room: 'Dining Room' },
  { id: 22, badge: 'New', img: '/assets/produk/meja laci (4).png', category: 'Sets', room: 'Living Room' },
  { id: 23, badge: '', img: '/assets/produk/meja laci (5).png', category: 'Sets', room: 'Living Room' },
];

export const getGridPatternType = (index: number): 'wide' | 'narrow' => {
  // Pattern cycles every 23 items to match exactly the 4-column layout we defined
  const patternIndices = [0, 5, 7, 9, 14, 16, 18, 21, 22];
  const modIndex = index % 23;
  return patternIndices.includes(modIndex) ? 'wide' : 'narrow';
};

// Function to generate exactly 23 items by repeating the filtered list
export const padToGridLength = (filtered: Product[], length: number = 23): Product[] => {
  if (filtered.length === 0) return [];
  const result: Product[] = [];
  while (result.length < length) {
    for (const item of filtered) {
      if (result.length >= length) break;
      result.push({ ...item, id: result.length + 1000 }); // give unique key id
    }
  }
  return result;
};
