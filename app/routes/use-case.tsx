import { motion } from "framer-motion";
import { IoCheckmarkCircleOutline, IoAlertCircleOutline, IoBuildOutline, IoTimeOutline, IoWalletOutline, IoBarChartOutline } from "react-icons/io5";
import ImageCarousel from "~/components/ImageSlider2";

const CASE_DATA = {
  title: "รีโนเวทคอนโดเก่า 20 ปี ให้เป็น Luxury Minimal",
  summary: "จากห้องสภาพเสื่อมโทรม ขายไม่ออกมา 2 ปี NextFlip ปรับโฉมใหม่จนขายได้ใน 14 วัน",
  status: "ขายด่วน / ขายแล้ว",
  images: ["/images/condo24.jpg", "/images/condo25.jpg", "/images/condo26.jpg"],
  problems: [
    "ระบบไฟและท่อน้ำเดิมชำรุดเสียหายหนัก",
    "เลย์เอาท์ห้องมืดและทึบ ทำให้พื้นที่ดูแคบกว่าความเป็นจริง",
    "เฟอร์นิเจอร์เดิมบิวท์อินแบบเก่า ไม่ตอบโจทย์กลุ่มเป้าหมายรุ่นใหม่"
  ],
  renovationPlan: "เราเลือกทุบผนังบางส่วนเพื่อเปิดรับแสงธรรมชาติ และเปลี่ยนมาใช้โทนสี Warm White ผสมกับงานไม้จริง เพื่อเพิ่มความรู้สึกพรีเมียมแต่ยังดูอบอุ่น",
  results: {
    time: "21 วัน",
    budget: "450,000 บาท",
    outcome: "ปิดการขายได้สูงกว่าราคาประเมิน 15%"
  },
  gallery: [
    { label: "Before", url: "/images/condo5.jpg" },
    { label: "After", url: "/images/condo24.jpg" }
  ]
};

export default function CaseDetail() {
  return (
    <div className="bg-zinc-100 min-h-screen font-sans text-zinc-900">
      {/* Hero Section: After Image + Summary */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <ImageCarousel images={CASE_DATA.images} />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent z-1" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 z-20 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="bg-amber-500 text-black px-4 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block"
            >
              {CASE_DATA.status}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl  tracking-tighter mb-4 max-w-4xl"
            >
              {CASE_DATA.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light"
            >
              {CASE_DATA.summary}
            </motion.p>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-20">
      
      </main>
    </div>
  );
}