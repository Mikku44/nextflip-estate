export interface AssetModel {
    id?:string;
    title: string;
    description: string;
    price: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    badge?: 'โครงการใหม่' | 'ขายแล้ว' | 'โครงการยอดนิยม';
    imageUrl: string;

}

export interface AssetFullModel {
  /* ---------- Core ---------- */
  id?: string;
  title: string;
  description: string;

  price: number;              // ราคาขาย
  area: number;               // ตร.ม.
  bedrooms: number;
  bathrooms: number;

  badge?: 'โครงการใหม่' | 'ขายแล้ว' | 'โครงการยอดนิยม';

  /* ---------- Media ---------- */
  imageUrl: string;           // รูป cover
  images?: string[];          // รูปทั้งหมด (carousel)
  beforeImages?: string[];    // Before
  afterImages?: string[];     // After

  /* ---------- Renovation / Highlights ---------- */
  highlights?: string[];      // จุดเด่นห้อง (bullet + icon)
  renovated?: {
    bathroom?: boolean;
    kitchen?: boolean;
    floor?: boolean;
    lighting?: boolean;
    painting?: boolean;
    other?: string[];
  };

  /* ---------- Location ---------- */
  location?: {
    address?: string;
    lat?: number;
    lng?: number;
    mapEmbedUrl?: string;
    nearby?: string[];        // BTS, ห้าง, ทางด่วน
  };

  /* ---------- Investment ---------- */
  suitableFor?: {
    living?: boolean;         // อยู่เอง
    investment?: boolean;     // นักลงทุน
    estimatedYield?: number;  // % ต่อปี (ประมาณการ)
  };

  /* ---------- Furniture & Appliances ---------- */
  furniture?: string[];       // เตียง, โซฟา ฯลฯ
  appliances?: string[];      // แอร์, ตู้เย็น ฯลฯ

  /* ---------- FAQ ---------- */
  faqs?: {
    question: string;
    answer: string;
  }[];

  /* ---------- Contact / CTA ---------- */
  contact?: {
    phone?: string;
    lineId?: string;
  };

  /* ---------- Meta / SEO ---------- */
  createdAt?: string;         // ใช้ sort new / old
  updatedAt?: string;
}
