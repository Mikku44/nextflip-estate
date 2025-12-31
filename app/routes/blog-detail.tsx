import { Remark } from 'react-remark';
import { useNavigate, useLoaderData } from 'react-router';
import ImageCarousel from "~/components/ImageCarousel";
import { blogService } from '~/services/blogService';
import type { Route } from './+types/blog-detail';
import type { BlogPost } from '~/models/blogModel'; // ตรวจสอบ path ของ interface
import ShareButton from '~/components/Sharebutton';

export async function loader({ params }: Route.LoaderArgs) {
  const blog = await blogService.getBySlug(params.slug);

  if (!blog) {
    throw new Response("Not Found", { status: 404 });
  }

  // ดึงบทความที่เกี่ยวข้อง (Related Blogs)
  const all = await blogService.getAll(50);
  const related = all.blogs.filter((item) => item.slug !== params.slug);

  return {
    blog: blog as BlogPost,
    relatedBlogs: related.slice(0, 3),
  };
}

export function meta({ loaderData }: Route.MetaArgs) {
  const blog = loaderData?.blog;

  if (!blog) return [{ title: "Blog Not Found" }];

  return [
    { title: `${blog.title} | NextFlip Estate` },
    {
      name: "description",
      content: blog.content?.substring(0, 160) || "", // ตัดเนื้อหาบางส่วนไปเป็น description
    },
  ];
}

export default function BlogDetail() {
  // ดึงข้อมูลจริงจาก Loader มาใช้งาน
  const { blog } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Hero Section - ใช้ข้อมูลรูปภาพจาก database */}
      <header className="relative h-[60vh] w-full bg-zinc-800">
        {blog.images && blog.images.length > 0 ? (
          <ImageCarousel images={blog.images} />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-500">
            No image available
          </div>
        )}



        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 pointer-events-none">
          <div className="max-w-4xl text-center text-white pointer-events-auto">
            <p className="text-sm uppercase tracking-widest mb-2 opacity-80">
              {new Date(blog.date).toLocaleDateString('th-TH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {blog.title}
            </h1>
            <p className="mt-4 font-light italic">By {blog.author}</p>
          </div>
        </div>
      </header>

      {/* Blog Content Section */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <article className="prose prose-lg prose-zinc max-w-none remark-content  ">
          {/* แสดงเนื้อหา Markdown จากฐานข้อมูล */}
          <Remark>{blog.content}</Remark>
        </article>

        <hr className="my-12 border-zinc-200" />

        <div className="flex md:flex-row flex-col gap-5 justify-between items-center mb-10">
          <button
            onClick={() => navigate(-1)}
            className="text-zinc-900 font-semibold hover:underline flex items-center gap-2"
          >
            <span>←</span> Back to Blogs
          </button>
          {/* share */}
          <div className="md:w-[250px]">
            <ShareButton title='แชร์บทความนี้' />
          </div>

        </div>
      </main>
    </div>
  );
}