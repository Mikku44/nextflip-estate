import { motion } from "framer-motion";
import { IoClose, IoAlertCircleOutline, IoBuildOutline, IoCheckmarkCircleOutline, IoTimeOutline, IoWalletOutline, IoTrendingUpOutline } from "react-icons/io5";
import { NavLink } from "react-router";

export default function CaseDetailModal({ data, onClose }: { data: any; onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
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
        <button onClick={onClose} className="absolute top-6 right-6 z-50 bg-white/20 hover:bg-white p-2 rounded-full transition-all text-white hover:text-black">
          <IoClose size={24} />
        </button>

        {/* 1. Hero: After Image + Summary */}
        <header className="relative h-[400px] w-full">
          <img src={data.imageAfter} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-10 text-white">
            <span className="bg-amber-500 text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">{data.status}</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight max-w-3xl">{data.title}</h2>
          </div>
        </header>

        <div className="p-8 md:p-16">
          <div className="grid md:grid-cols-12 gap-16">
            
            {/* Left Content */}
            <div className="md:col-span-8 space-y-16">
              {/* 2. Section: ปัญหาเดิม */}
              <section>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8 flex items-center gap-2">
                  <IoAlertCircleOutline className="text-amber-600" /> The Challenges
                </h3>
                <div className="space-y-4">
                  {data.problems.map((p: string, i: number) => (
                    <div key={i} className="p-5 bg-zinc-50 border-l-2 border-zinc-200 font-light text-zinc-600 italic">
                      " {p} "
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. Section: แนวทางรีโนเวท */}
              <section className="bg-zinc-900 text-white p-10 relative overflow-hidden">
                <h3 className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <IoBuildOutline /> Strategy
                </h3>
                <p className="text-xl font-light leading-relaxed relative z-10">{data.strategy}</p>
                <IoBuildOutline className="absolute -right-8 -bottom-8 text-white/5" size={200} />
              </section>

              {/* 4. Section: Gallery (Simple) */}
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-8">Before & After</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <img src={data.imageBefore} className="h-64 w-full object-cover grayscale" />
                    <p className="text-[10px] uppercase font-bold text-zinc-400">Before Restoration</p>
                  </div>
                  <div className="space-y-2">
                    <img src={data.imageAfter} className="h-64 w-full object-cover" />
                    <p className="text-[10px] uppercase font-bold text-amber-600 tracking-widest underline">After NextFlip</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Content: 5. สรุปผลลัพธ์ */}
            <aside className="md:col-span-4 space-y-8">
              <div className="bg-zinc-100 p-8 sticky top-8">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-10 border-b border-zinc-200 pb-4">Key Metrics</h4>
                <div className="space-y-10">
                  <div className="flex gap-4">
                    <IoTimeOutline className="text-zinc-400" size={20} />
                    <div><p className="text-[10px] font-bold text-zinc-400 uppercase">Time</p><p className="font-semibold">{data.time}</p></div>
                  </div>
                  <div className="flex gap-4">
                    <IoWalletOutline className="text-zinc-400" size={20} />
                    <div><p className="text-[10px] font-bold text-zinc-400 uppercase">Budget</p><p className="font-semibold">{data.budget}</p></div>
                  </div>
                  <div className="flex gap-4">
                    <IoTrendingUpOutline className="text-green-600" size={20} />
                    <div><p className="text-[10px] font-bold text-zinc-400 uppercase">Outcome</p><p className="font-bold text-green-700">{data.result}</p></div>
                  </div>
                </div>
              </div>

              {/* 6. CTA ปิดท้าย */}
              <NavLink to="/valuation" className="block bg-zinc-900 text-white p-8 group">
                <h4 className="text-xl font-light mb-2">มีห้องจะขาย?</h4>
                <p className="text-xs text-zinc-400 mb-6">ให้เราช่วยประเมินราคาและวางแผนการรีโนเวทให้ฟรี</p>
                <span className="text-xs font-bold uppercase tracking-widest border-b border-white/20 group-hover:border-white transition-all">ประเมินฟรีตอนนี้ →</span>
              </NavLink>
            </aside>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}