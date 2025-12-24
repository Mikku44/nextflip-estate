import { Remark } from 'react-remark';
import ImageCarousel from "~/components/ImageCarousel"; // Adjust path as needed
import { MOCK_BLOG } from '~/models/blogModel';

export default function BlogDetail() {
  const blog = MOCK_BLOG; // In a real app, use useParams() and a loader

  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Hero Section with your Image Carousel */}
      <header className="relative h-[60vh] w-full">
        <ImageCarousel images={blog.images} />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
          <div className="max-w-4xl text-center text-white">
            <p className="text-sm uppercase tracking-widest mb-2 opacity-80">{blog.date}</p>
            <h1 className="text-4xl md:text-6xl  leading-tight">
              {blog.title}
            </h1>
            <p className="mt-4 font-light italic">By {blog.author}</p>
          </div>
        </div>
      </header>

      {/* Blog Content Section */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <article className="prose prose-lg prose-slate max-w-none remark-content">
          {/* react-remark processes the markdown string */}
          <Remark>{blog.content}</Remark>
        </article>
        
        <hr className="my-12 border-gray-200" />
        
        <div className="flex justify-between items-center">
          <button className="text-(--primary-color) font-semibold hover:underline">
            ← Back to Tours
          </button>
          <div className="flex gap-4">
            {/* Social Share Icons could go here */}
          </div>
        </div>
      </main>
    </div>
  );
}