import { motion, AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import { 
  IoClose, 
  IoAlertCircleOutline, 
  IoBuildOutline, 
  IoTimeOutline, 
  IoWalletOutline, 
  IoTrendingUpOutline,
  IoFlashOutline, 
  IoAccessibility,
  IoImage
} from "react-icons/io5";
import { Remark } from "react-remark";
import { NavLink } from "react-router";
import ImagePreview from "./ImagePreview";

export default function CaseDetailModal({ data, onClose }: { data: any; onClose: () => void }) {
  if (!data) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-900/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto relative shadow-2xl rounded-sm"
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-50 bg-black/50 hover:bg-black p-2 rounded-full transition-all text-white"
        >
          <IoClose size={24} />
        </button>

        {/* 1. Hero: Banner */}
        <header className="relative h-[400px] w-full overflow-hidden">
          <img src={data.imageAfter} className="w-full h-full object-cover" alt="After Renovation" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
            <span className="bg-amber-500 text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-flex items-center gap-2">
              <IoFlashOutline /> {data.status}
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight max-w-3xl leading-tight">
              {data.title}
            </h2>
          </div>
        </header>

        <div className="p-8 md:p-16">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            
            {/* Left Content */}
            <div className="md:col-span-8 space-y-16">

               <section>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8 flex items-center gap-2">
                  <IoAccessibility className="text-amber-600" /> Excerpt
                </h3>
                <div className="grid gap-3">
                 {data?.excerpt && 
                   <article className="prose prose-lg prose-zinc max-w-none remark-content  ">
                           {/* แสดงเนื้อหา Markdown จากฐานข้อมูล */}
                           <Remark>{data?.excerpt || "No information."}</Remark>
                         </article>
                 }
                </div>
              </section>
              
              {/* 2. Section: THE CHALLENGES */}
              <section>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8 flex items-center gap-2">
                  <IoAlertCircleOutline className="text-amber-600" /> The Challenges
                </h3>
                <div className="grid gap-3">
                  {data.problems.map((p: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-zinc-50 border-l-2 border-zinc-200">
                      <span className="text-zinc-300 font-serif text-2xl leading-none">“</span>
                      <p className="font-light text-zinc-600 italic leading-relaxed">{p}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. Section: SOLUTION / STRATEGY */}
              <section className="bg-zinc-900 text-white p-10 relative overflow-hidden rounded-sm">
                <div className="relative z-10">
                  <h3 className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                    <IoBuildOutline /> Strategy & Solution
                  </h3>
                  <p className="text-xl font-light leading-relaxed text-zinc-200">
                    {data.strategy}
                  </p>
                </div>
                <IoBuildOutline className="absolute -right-8 -bottom-8 text-white/5" size={200} />
              </section>

              {/* 2. Section: Image gallery */}
              <section>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8 flex items-center gap-2">
                  <IoImage className="text-amber-600" /> Gallery
                </h3>
                {/* <div className="grid grid-cols-2 gap-3">
                  {data?.images?.map((p: string, i: number) => (
                    <div key={i} className="">
                     <img src={p} alt={data.title} />
                    </div>
                  ))}
                </div> */}

               {data?.images && <ImagePreview images={data.images} 
                title="Gallery"
                />}
              </section>

              {/* 4. Section: BEFORE & AFTER */}
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-8">Visual Transformation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <div className="overflow-hidden bg-zinc-200 aspect-[4/3]">
                        <img src={data.imageBefore} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <p className="mt-3 text-[10px] uppercase font-bold text-zinc-400 tracking-tighter">Before: {data.beforeDetail}</p>
                  </div>
                  <div className="group">
                    <div className="overflow-hidden bg-zinc-200 aspect-[4/3]">
                        <img src={data.imageAfter} className="h-full w-full object-cover border-b-2 border-amber-500" />
                    </div>
                    <p className="mt-3 text-[10px] uppercase font-bold text-amber-600 tracking-widest">After: {data.afterDetail}</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Content: 5. KEY METRICS */}
            <aside className="md:col-span-4 space-y-8 ">
              <div className="bg-zinc-100 p-8  z-10 top-8 ">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-10 border-b border-zinc-200 pb-4">Key Metrics</h4>
                <div className="space-y-10">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm text-zinc-400">
                        <IoTimeOutline size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">ระยะเวลาปิดดีล</p>
                        <p className="font-semibold text-lg">{data.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm text-zinc-400">
                        <IoWalletOutline size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">รูปแบบการซื้อ</p>
                        <p className="font-semibold text-lg">{data.budget}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 min-w-10 bg-white flex items-center justify-center rounded-full text-green-600">
                        <IoTrendingUpOutline size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">ผลลัพธ์ที่ได้</p>
                        <p className="font-bold text-green-700 leading-tight">{data.result}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. CTA ปิดท้าย */}
              <NavLink to="/condo-estimator" className="block bg-amber-500 text-black p-8 group transition-all hover:bg-zinc-900 hover:text-white">
                <h4 className="text-xl font-bold mb-2">มีคอนโดที่อยากขายด่วน?</h4>
                <p className="text-xs opacity-80 mb-6">ประเมินราคาเบื้องต้นฟรี ปิดดีลเงินสด ไม่ต้องปวดหัวกับการรีโนเวท</p>
                <span className="text-xs font-black uppercase tracking-widest border-b-2 border-current">ประเมินราคาฟรี →</span>
              </NavLink>
            </aside>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}