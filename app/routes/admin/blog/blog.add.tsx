import { Form, redirect, useActionData, type ActionFunctionArgs } from "react-router";
import { useState } from "react";
import { blogService } from "~/services/blogService";
import { v4 as uuidv4 } from "uuid";
import { Minus, Image as ImageIcon, Check, Search, X } from "lucide-react";
import MarkdownEditor from "~/components/MarkdownEditor";
import { images_file } from "public/images/image_files";

/**
 * SERVER ACTION
 * จัดการการรับค่าจาก Form และบันทึกลง Database
 */
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const title = formData.get("title")?.toString() || "";
  const slug = formData.get("slug")?.toString() || "";
  const tags = formData.get("tags")?.toString() || "";
  const author = formData.get("author")?.toString() || "";
  const content = formData.get("content")?.toString() || "";

  // รับค่ารูปภาพจาก Hidden Input (JSON String)
  const imagesJSON = formData.get("imagesJSON")?.toString() || "[]";
  let images = [];
  try {
    images = JSON.parse(imagesJSON);
  } catch (e) {
    images = [];
  }

  if (!title || !slug || !content) {
    return { error: "กรุณากรอกข้อมูล Title, Slug และ Content ให้ครบถ้วน" };
  }

  const newBlog = {
    title,
    slug,
    tags,
    author,
    content,
    images, // Array of image URLs
    date: new Date().toISOString().split("T")[0],
  };

  try {

    await blogService.create(newBlog);

    // await blogService.createMultiple([
    //   {
    //     "slug": "financial-burden-debt-condo-solutions",
    //     "title": "💰 การเงิน / หนี้ / ภาระผ่อน - ทางออกทางการเงินสำหรับเจ้าของคอนโด",
    //     "date": "January 07, 2026",
    //     "author": "NextFlip Estate",
    //     "tags": "NextFlip Estate, การเงิน, หนี้คอนโด, ภาระผ่อน, ทางออกทางการเงิน, อสังหาริมทรัพย์",
    //     "images": [
    //       "/images/financial01.jpg",
    //       "/images/financial02.jpg",
    //       "/images/financial03.jpg"
    //     ],
    //     "content": "# 💰 การเงิน / หนี้ / ภาระผ่อน\n\n*วันที่ 7 มกราคม 2026*\n*โดย NextFlip Estate*\n\nหมวดนี้รวบรวมบทความที่ช่วยให้ **เจ้าของคอนโดมองเห็น \"ทางออกทางการเงิน\" อย่างเป็นระบบ** โดยเฉพาะในสถานการณ์ที่การถือครองคอนโดเริ่มกลายเป็นภาระ มากกว่าเป็นทรัพย์สิน\n\n## ปัญหาที่เจ้าของคอนโดมักพบ\n\nในความเป็นจริง เจ้าของคอนโดจำนวนมาก ไม่ได้มีปัญหาที่ตัวห้อง แต่ติดอยู่กับ **โครงสร้างทางการเงิน** เช่น:\n\n* ยอดผ่อนรายเดือนสูงเกินกำลัง\n* เงินต้นยังเหลือเยอะ แต่ราคาตลาดขยับขึ้นช้า\n* ปล่อยเช่าไม่พอผ่อน หรือมีช่วงห้องว่าง\n* อยากขาย แต่ขายไม่ได้ทันที\n\nบทความในหมวดนี้จึงถูกออกแบบมาเพื่อช่วยให้คุณ:\n* เข้าใจสถานการณ์ของตัวเองอย่างตรงไปตรงมา\n* พร้อมทางเลือกที่ **มากกว่าแค่ \"ขายทิ้ง\" หรือ \"ฝืนผ่อนต่อ\"**\n\n---\n\n## 🔍 เราพูดถึงอะไรในหมวดนี้บ้าง\n\n### 1. วิเคราะห์ภาระผ่อนแบบเจ้าของคอนโดจริง\n\n* ควรดูแค่ค่างวด หรือควรดูอะไรเพิ่ม?\n* ดอกเบี้ยที่จ่ายไปแล้ว = ต้นทุนจมจริงหรือไม่\n* จุดไหนคือ \"สัญญาณเตือน\" ว่าควรปรับแผน\n\n### 2. ทางเลือกเมื่อผ่อนไม่ไหว แต่ยังไม่อยากขายขาด\n\n* การรีโนเวทเพื่อเพิ่มราคาขาย\n* การถือทรัพย์แบบมีคนช่วยรับภาระผ่อน\n* การทำสัญญาชั่วคราว เพื่อรอจังหวะขายที่ดีกว่า\n\n### 3. เข้าใจโครงสร้างหนี้ก่อนตัดสินใจ\n\n* เงินต้น vs ราคาตลาด (Gap Analysis)\n* ถ้าขายตอนนี้ ขาดทุนจริงหรือแค่รู้สึกขาดทุน\n* ทางเลือกที่ช่วย \"ลดแรงกดดันรายเดือน\" โดยไม่เสียทรัพย์ทันที\n\n### 4. กรณีศึกษาเจ้าของห้องที่มีภาระสูง\n\n* เจ้าของที่ยังผ่อนอยู่ แต่ไม่อยากแบกต่อ\n* เจ้าของที่ซื้อช่วงราคาสูง และต้องการทางออกที่ไม่เจ็บตัว\n* เจ้าของที่ไม่อยากยุ่งกับผู้รับเหมา ไม่อยากปวดหัวเรื่องขาย\n\n---\n\n## 🧠 แนวคิดสำคัญของหมวดนี้\n\n> **\"ปัญหาการเงินของคอนโด ไม่ควรแก้ด้วยอารมณ์ แต่ควรแก้ด้วยโครงสร้าง\"**\n\nเราเชื่อว่า การตัดสินใจที่ดี ต้องเริ่มจากข้อมูลที่ชัด ไม่ว่าจะเป็น:\n\n* ภาระจริงต่อเดือน\n* ระยะเวลาที่รับได้\n* และความเสี่ยงที่ยอมรับได้\n\nบทความในหมวดนี้ไม่ได้ชี้นำให้คุณ **ขาย** หรือ **ไม่ขาย** แต่ช่วยให้คุณ **ตัดสินใจจากความเข้าใจ ไม่ใช่ความกังวล**\n\n---\n\n## 🎯 เหมาะกับใคร\n\nหมวดนี้เหมาะกับคุณ หากคุณเป็นคนหนึ่งที่:\n\n* รู้สึกว่าคอนโดเริ่มเป็นภาระทางการเงิน\n* ผ่อนอยู่ แต่ไม่มั่นใจว่าจะถือไปต่อดีไหม\n* อยากขาย แต่ยังหาทางออกที่เหมาะกับตัวเองไม่ได้\n* ต้องการทางเลือกที่ไม่ต้องจัดการทุกอย่างคนเดียว\n\n---\n\n## 🤝 สิ่งที่ NextFlip Estate ทำต่าง\n\nเราไม่ได้มองคอนโดแค่ **\"ทรัพย์ที่จะขาย\"** แต่เรามอง **ภาระทางการเงินของเจ้าของเป็นจุดตั้งต้น**\n\nบทความในหมวดนี้จึงเชื่อมโยงกับ:\n\n* เคสตัวอย่างจริง\n* แนวทางการช่วยผ่อนแทนในบางกรณี\n* และการออกแบบทางออกที่เหมาะกับแต่ละสถานการณ์\n\n---\n\n*NextFlip Estate - ทางออกทางการเงินที่เหมาะกับคุณ*"
    //   },

    // ]);
    return redirect("/blogs");
  } catch (error) {
    return { error: "ไม่สามารถบันทึกข้อมูลได้ กรุณาลองใหม่อีกครั้ง" };
  }
};

/**
 * CLIENT COMPONENT
 */
export default function BlogAddPage() {
  const actionData = useActionData<typeof action>();

  // Form State สำหรับฟิลด์ทั่วไป
  const [form, setForm] = useState({
    title: "",
    slug: "",
    tags: "",
    author: "",
    content: "",
  });

  // State สำหรับรูปภาพที่เลือกแล้ว
  const [images, setImages] = useState<string[]>([]);

  // Modal & Selection State
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInModal, setSelectedInModal] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  /** * รายชื่อรูปภาพตัวอย่าง 
   * ในการทำงานจริง คุณอาจจะ fetch จาก API หรือดึงมาจากโฟลเดอร์ public
   */

  const length = 25;

  const arr = Array.from({ length: length }, (_, index) => `/images/condo${index + 1}.jpg`);
  const arr2 = images_file.map(img => `/images/${img.path}`);
  const libraryImages = [
    ...arr,
    ...arr2
  ];

  const filteredImages = libraryImages.filter(img => img.includes(searchTerm));

  // Auto-generate slug เมื่อ Title เปลี่ยน
  const generateSlug = (title: string) => {
    const base = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9ก-๙]+/g, "-") // รองรับอักษรไทยเบื้องต้น
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

  const handleToggleImage = (url: string) => {
    setSelectedInModal(prev =>
      prev.includes(url) ? prev.filter(i => i !== url) : [...prev, url]
    );
  };

  const handleApplyImages = () => {
    setImages(selectedInModal);
    setIsOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Create New Blog</h1>
      </div>

      {actionData?.error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          {actionData.error}
        </div>
      )}

      <Form method="post" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Title</label>
            <input
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-2 text-xl transition-colors"
              placeholder="หัวข้อบล็อกของคุณ..."
              required
            />
          </div>

          {/* Slug */}
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Slug</label>
            <input
              name="slug"
              type="text"
              value={form.slug}
              onChange={handleChange}
              className="w-full bg-gray-50 border-b-2 border-gray-200 py-2 text-gray-500 italic outline-none"
              placeholder="auto-generated-slug"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Author */}
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Author</label>
            <input
              name="author"
              type="text"
              value={form.author}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-1 transition-colors"
              placeholder="John Doe"
            />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Tags</label>
            <input
              name="tags"
              type="text"
              value={form.tags}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-1 transition-colors"
              placeholder="travel, real estate, condo"
            />
          </div>
        </div>

        {/* Image Picker Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Blog Images</label>
            <button
              type="button"
              onClick={() => {
                setSelectedInModal(images);
                setIsOpen(true);
              }}
              className="flex items-center gap-2 text-sm bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-700 transition"
            >
              <ImageIcon size={16} /> เลือกรูปภาพ ({images.length})
            </button>
          </div>

          {/* Hidden input for server-side processing */}
          <input type="hidden" name="imagesJSON" value={JSON.stringify(images)} />

          {/* Preview list */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {images.map((url, idx) => (
              <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border bg-gray-100 group">
                <img src={url} className="w-full h-full object-cover" alt="Preview" />
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

        {/* Markdown Editor */}
        <div className="space-y-2">
          <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Content</label>
          <MarkdownEditor
            name="content"
            value={form.content}
            onChange={(val) => setForm(p => ({ ...p, content: val }))}
            placeholder="เริ่มเขียนเนื้อหาของคุณที่นี่..."
            minHeight="400px"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
        >
          Publish Blog Post
        </button>
      </Form>

      {/* SELECTION MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          <div className="relative bg-white w-full max-w-4xl h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            <div className="p-6 border-b border-zinc-200 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Image Library</h2>
                <p className="text-gray-500 text-sm">เลือกรูปภาพที่ต้องการใช้ในบทความ</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition">
                <Minus size={24} />
              </button>
            </div>

            <div className="p-6 bg-gray-50 flex-shrink-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search images by URL..."
                  className="w-full pl-10 pr-4 py-2 input focus:ring-2 focus:ring-blue-500 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredImages?.length > 0 ? filteredImages.map((url) => {
                const isSelected = selectedInModal.includes(url);
                return (
                  <div
                    key={url}
                    onClick={() => handleToggleImage(url)}
                    className={`group h-[200px] w-full relative aspect-video rounded-xl overflow-hidden cursor-pointer border-4 transition-all ${isSelected ? "border-blue-500 scale-[0.98]" : "border-transparent hover:border-gray-200"
                      }`}
                  >
                    <img src={url} className="w-full h-full object-cover" alt="Library Item" />
                    {isSelected && (
                      <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                        <div className="bg-blue-500 text-white rounded-full p-2 shadow-lg">
                          <Check size={20} strokeWidth={3} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              }) :
                searchTerm ? ( // Only show if searchTerm actually exists
                  <div
                    key={searchTerm}
                    onClick={() => handleToggleImage(searchTerm)}
                    className={`group h-[200px] w-full relative aspect-video rounded-xl overflow-hidden cursor-pointer border-4 transition-all ${selectedInModal.includes(searchTerm) // Dynamic highlight
                      ? "border-blue-500 scale-[0.98]"
                      : "border-transparent hover:border-gray-200"
                      }`}
                  >
                    <img src={searchTerm} className="w-full h-full object-cover" alt="Search Result" />

                    {/* Dynamic Checkmark visibility */}
                    {selectedInModal.includes(searchTerm) && (
                      <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                        <div className="bg-blue-500 text-white rounded-full p-2 shadow-lg">
                          <Check size={20} strokeWidth={3} />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="col-span-full text-center py-10 text-gray-400">
                    No images found.
                  </div>
                )
              }
            </div>

            <div className="p-6 border-t border-zinc-200 flex items-center justify-between bg-white">
              <span className="text-sm font-medium text-gray-600">
                Selected: {selectedInModal.length} images
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleApplyImages}
                  className="px-8 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-md"
                >
                  Apply Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}