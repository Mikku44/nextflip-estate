import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/blogs";
import { motion } from "framer-motion";
import ImageCarousel from "~/components/ImageSlider2";
import { blogService } from "~/services/blogService"; // นำเข้า service
import type { BlogPost } from "~/models/blogModel";

// 1. เพิ่ม Loader เพื่อดึงข้อมูลจากฐานข้อมูล
export async function loader() {
  const data = await blogService.getAll(100); // ดึงมา 100 รายการล่าสุด
  return {
    blogs: data.blogs as BlogPost[],
  };
}

export function meta({}: Route.MetaArgs) {
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

export default function BlogPage() {
  // 2. ใช้ข้อมูลจาก Loader แทน BLOGS mockup
  const { blogs } = useLoaderData<typeof loader>();

  return (
    <div className="bg-zinc-100 min-h-screen">
      {/* Hero Section */}
      <div className="h-[70vh] overflow-hidden relative">
        <div className="h-full w-full flex items-center justify-center text-center flex-col pb-10 absolute z-10 inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl max-w-3xl px-4 drop-shadow-2xl text-white font-bold"
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
        <ImageCarousel />
      </div>

      <main className="container mx-auto px-4 py-20 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-zinc-900">
              บทความทั้งหมด
            </h2>
            <p className="text-zinc-500 mt-2">
              แหล่งรวมสาระน่ารู้เพื่อเจ้าของอสังหาริมทรัพย์
            </p>
          </div>
          <div className="text-lg font-medium text-zinc-400">
            {blogs.length} Articles
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => {
              const isFeatured = index === 0;
              // ดึงรูปแรกจาก Array images ถ้าไม่มีให้ใช้รูป Default
              const coverImage =
                blog.images && blog.images.length > 0
                  ? blog.images[0]
                  : "/images/condo5.jpg";

              return (
                <motion.div
                  key={blog.slug}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col ${
                    isFeatured
                      ? "md:col-span-6 lg:flex-row h-auto lg:min-h-[500px]"
                      : "md:col-span-3 lg:col-span-2"
                  }`}
                >
                  {/* Image Container */}
                  <div
                    className={`relative overflow-hidden ${
                      isFeatured ? "lg:w-3/5 h-64 lg:h-auto" : "h-64"
                    }`}
                  >
                    <img
                      loading="lazy"
                      src={coverImage}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={blog.title}
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-widest text-zinc-900">
                      {blog.tags?.split(",")[0] || "Real Estate"}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div
                    className={`p-8 flex flex-col justify-between ${
                      isFeatured ? "lg:w-2/5" : "flex-1"
                    }`}
                  >
                    <div>
                      <time className="text-sm text-zinc-400 font-medium">
                        {new Date(blog.date).toLocaleDateString("th-TH", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <h3
                        className={`${
                          isFeatured ? "text-3xl" : "text-xl"
                        } font-semibold mt-3 mb-4 transition-colors `}
                      >
                        <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                      </h3>
                      <p className="text-zinc-600 font-light leading-relaxed line-clamp-3">
                        {/* ตัดเนื้อหาจาก content มาแสดงเป็น excerpt */}
                        {blog.content?.replace(/[#*`]/g, "").substring(0, 160)}...
                      </p>
                    </div>

                    <div className="mt-8">
                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="inline-flex items-center gap-2 font-semibold text-zinc-900 group/link"
                      >
                        อ่านเพิ่มเติม
                        <span className="group-hover/link:translate-x-2 transition-transform">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-6 text-center py-20 text-zinc-400">
              ยังไม่มีบทความในขณะนี้
            </div>
          )}
        </div>
      </main>
    </div>
  );
}