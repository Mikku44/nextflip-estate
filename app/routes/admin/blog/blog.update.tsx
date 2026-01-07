import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "react-router";
import { useState } from "react";
import { blogService } from "~/services/blogService";
import { v4 as uuidv4 } from "uuid";
import { Minus, Image as ImageIcon, Search, X } from "lucide-react";

import MarkdownEditor from "~/components/MarkdownEditor";
import type { BlogPost } from "~/models/blogModel";

// ---------------------------------------
// LOADER
// ---------------------------------------
export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.blogId;
  if (!id) throw new Error("Blog ID is required");

  const blog = await blogService.getById(id);
  if (!blog) throw new Error("Blog not found");

  return { blog, id };
}

// ---------------------------------------
// ACTION (UPDATE)
// ---------------------------------------
export const action = async ({ request, params }: ActionFunctionArgs) => {
  const id = params.blogId;
  if (!id) return { error: "Missing blog ID" };

  const formData = await request.formData();
  const title = formData.get("title")?.toString() || "";
  const slug = formData.get("slug")?.toString() || "";
  const excerpt = formData.get("excerpt")?.toString() || "";
  const tags = formData.get("tags")?.toString() || "";
  const author = formData.get("author")?.toString() || "";
  const content = formData.get("content")?.toString() || ""; // Synced name

  const imagesJSON = formData.get("imagesJSON")?.toString() || "[]";
  let images = [];
  try {
    images = JSON.parse(imagesJSON);
  } catch (e) {
    images = [];
  }

  if (!title || !slug || !content)
    return { error: "กรุณากรอก Title, Slug และ Content ให้ครบถ้วน" };

  const updatedBlog = {
    title,
    slug,
    excerpt,
    tags,
    author,
    images,
    content,
    date: new Date().toISOString().split("T")[0], // Keep or update date
  };

  try {
    await blogService.update(id, updatedBlog);
    return redirect("/blogs");
  } catch (error) {
    return { error: "ไม่สามารถอัปเดตข้อมูลได้ กรุณาลองใหม่อีกครั้ง" };
  }
};

// ---------------------------------------
// COMPONENT
// ---------------------------------------
export default function BlogUpdatePage() {
  const actionData = useActionData<typeof action>();
  const { blog } = useLoaderData<typeof loader>();

  const [form, setForm] = useState({
    title: blog.title || "",
    slug: blog.slug || "",
    tags: blog.tags || "",
    author: blog.author || "",
    content: blog.content || "",
  });

  const [images, setImages] = useState<string[]>(blog.images || []);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInModal, setSelectedInModal] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Library Images (Matching blog.add logic)
  const length = 25;
  const libraryImages = Array.from({ length }, (_, i) => ({
    filename: `condo${i + 1}.jpg`,
    path: `condo${i + 1}.jpg`
  }));

  const generateSlug = (title: string) => {
    const base = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9ก-๙]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    const shortId = uuidv4().split("-")[0];
    return base ? `${base}-${shortId}` : "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "title") {
      setForm((prev) => ({
        ...prev,
        title: value,
        slug: generateSlug(value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const toggleSelect = (path: string) => {
    const imageUrl = `/images/${path}`;
    setSelectedInModal((prev) =>
      prev.includes(imageUrl) ? prev.filter((url) => url !== imageUrl) : [...prev, imageUrl]
    );
  };

  const handleApplyImages = () => {
    setImages(selectedInModal);
    setIsOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Update Blog Post</h1>

      {actionData?.error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          {actionData.error}
        </div>
      )}

      <Form method="post" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase text-gray-500">Title</label>
            <input
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-2 text-xl transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase text-gray-500">Slug</label>
            <input
              name="slug"
              type="text"
              value={form.slug}
              readOnly
              className="w-full bg-gray-50 border-b-2 border-gray-200 py-2 text-gray-500 italic outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase text-gray-500">Author</label>
            <input
              name="author"
              type="text"
              value={form.author}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-1"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase text-gray-500">Tags</label>
            <input
              name="tags"
              type="text"
              value={form.tags}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-1"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold uppercase text-gray-500">Blog Images</label>
            <button
              type="button"
              onClick={() => {
                setSelectedInModal(images);
                setIsOpen(true);
              }}
              className="flex items-center gap-2 text-sm bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-700 transition"
            >
              <ImageIcon size={16} /> Manage Images ({images.length})
            </button>
          </div>
          <input type="hidden" name="imagesJSON" value={JSON.stringify(images)} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {images.map((url, idx) => (
              <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border group">
                <img src={url} className="w-full h-full object-cover" alt="" />
                <button
                  type="button"
                  onClick={() => setImages(images.filter((_, i) => i !== idx))}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold uppercase text-gray-500">Content</label>
          <MarkdownEditor
            name="content"
            value={form.content}
            onChange={(v) => setForm((p) => ({ ...p, content: v }))}
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="bg-gray-100 text-gray-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
          >
            Cancel
          </button>
        </div>
      </Form>

      {/* MODAL (Synced Design) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl">
            <div className="p-6 border-b flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Image Library</h2>
                <p className="text-sm text-gray-500">{selectedInModal.length} selected</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <Minus size={24} />
              </button>
            </div>

            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search images..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-xl outline-none focus:ring-2 ring-blue-500"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {libraryImages
                .filter(img => img.filename.includes(searchTerm))
                .map((item) => {
                  const url = `/images/${item.path}`;
                  const isSelected = selectedInModal.includes(url);
                  return (
                    <div
                      key={item.filename}
                      onClick={() => toggleSelect(item.path)}
                      className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-4 transition-all ${
                        isSelected ? "border-blue-500 scale-95" : "border-transparent hover:border-gray-200"
                      }`}
                    >
                      <img src={url} className="w-full h-full object-cover" alt="" />
                      {isSelected && (
                        <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                          <div className="bg-blue-500 text-white rounded-full p-1">
                            <X size={20} className="rotate-45" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            <div className="p-6 border-t flex justify-end gap-3">
              <button onClick={() => setIsOpen(false)} className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-xl">
                Cancel
              </button>
              <button onClick={handleApplyImages} className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700">
                Apply Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}