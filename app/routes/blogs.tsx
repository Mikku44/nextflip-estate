import { Link, NavLink } from "react-router";
import type { Route } from "./+types/blogs";
import { ImageSlider } from "~/components/ImageSlider";
import { motion } from "framer-motion";
import ImageCarousel from "~/components/ImageSlider2";


export function meta({ }: Route.MetaArgs) {
  return [
    {
      title: "บทความอสังหาริมทรัพย์ | NextFlip Estate",
    },
    {
      name: "description",
      content:
        "รวมบทความ ความรู้ และคำแนะนำด้านการซื้อ ขาย ฝากขาย คอนโด บ้าน และอสังหาริมทรัพย์ จากผู้เชี่ยวชาญ NextFlip Estate",
    },
  ];
}

const BLOGS = [
  {
    slug: "sell-condo-cash",
    title: "ขายคอนโดเงินสด ดีกว่ายังไง เหมาะกับใคร?",
    excerpt:
      "ทำความเข้าใจข้อดีของการขายคอนโดเงินสด เหมาะกับใครบ้าง และช่วยแก้ปัญหาเจ้าของคอนโดได้อย่างไร",
    date: "2025-01-10",
  },
  {
    slug: "condo-with-tenant",
    title: "คอนโดมีผู้เช่า ขายได้ไหม?",
    excerpt:
      "หลายคนกังวลว่าคอนโดที่มีผู้เช่าจะขายยาก บทความนี้มีคำตอบจากประสบการณ์จริง",
    date: "2025-01-05",
  },
  {
    slug: "why-sell-to-investor",
    title: "ทำไมเจ้าของคอนโดจำนวนมากเลือกขายให้นักลงทุน",
    excerpt:
      "วิเคราะห์เหตุผลที่เจ้าของคอนโดตัดสินใจขายให้กลุ่มนักลงทุน แทนการขายตลาดทั่วไป",
    date: "2024-12-28",
  },
];


export default function BlogPage() {
  return (
    <div className="bg-zinc-100 min-h-screen">
      {/* Hero Section */}
      <div className="h-[70vh] overflow-hidden relative">
        <div className="h-full w-full flex items-center justify-center text-center flex-col pb-10 absolute z-10 inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl max-w-3xl px-4 drop-shadow-2xl text-white "
          >
            บทความ & ความรู้ด้านอสังหาริมทรัพย์
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light max-w-2xl text-white/80 mt-4 px-6"
          >
            ติดปีกความรู้เรื่องคอนโดและบ้านกับ NextFlip Estate
          </motion.p>
        </div>
        {/* <img 
         loading="lazy"
          src="/images/condo24.jpg"
          className="w-full h-full object-cover scale-105" 
          alt="blog cover" 
        /> */}
        <ImageCarousel />
      </div>

      <main className="container mx-auto px-4 py-20 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-12 ">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-zinc-900">บทความทั้งหมด</h2>
            <p className="text-zinc-500 mt-2">แหล่งรวมสาระน่ารู้เพื่อเจ้าของอสังหาริมทรัพย์</p>
          </div>
          <div className="text-lg font-medium text-zinc-400">
            {BLOGS.length} Articles
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {BLOGS.map((blog, index) => {
            const isFeatured = index === 0;
            return (
              <motion.div
                key={blog.slug}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col ${
                  isFeatured ? "md:col-span-6 lg:flex-row h-auto lg:h-[500px]" : "md:col-span-3 lg:col-span-2"
                }`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${isFeatured ? "lg:w-3/5 h-64 lg:h-full" : "h-64"}`}>
                  <img
                    loading="lazy"
                    src={"/images/condo5.jpg"} // Replace with real logic
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={blog.title}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 font-light text-xs font-bold uppercase tracking-widest">
                    Real Estate
                  </div>
                </div>

                {/* Content Container */}
                <div className={`p-8 flex flex-col justify-between ${isFeatured ? "lg:w-2/5" : "flex-1"}`}>
                  <div>
                    <time className="text-sm text-zinc-400 font-medium">{blog.date}</time>
                    <h3 className={`${isFeatured ? "text-3xl" : "text-xl"} font-semibold mt-3 mb-4 transition-colors`}>
                      <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-zinc-600 font-light leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-2 font-semibold text-zinc-900 group/link"
                    >
                      อ่านเพิ่มเติม 
                      <span className="group-hover/link:translate-x-2 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}