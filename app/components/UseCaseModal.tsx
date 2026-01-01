import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function UseCaseModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-black"
        >
          <X />
        </button>

        {/* HEADLINE */}
        <h2 className="text-2xl font-bold mb-2">
          รับซื้อคอนโดเงินสด ปิดดีลใน 15 วัน
        </h2>
        <p className="text-gray-600 mb-6">
          จากห้องปลวกกิน สภาพโทรม สู่ห้องพร้อมปล่อยเช่า
        </p>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="md:col-span-2 space-y-8">
            {/* CHALLENGES */}
            <section>
              <h3 className="font-semibold mb-3">THE CHALLENGES</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>● ห้องสภาพโทรมมาก ปลวกกินทั้งห้อง</li>
                <li>● ครัวพัง บวมน้ำ พื้นเป็นรอย ผนังร้าว</li>
                <li>● เจ้าของไม่อยากรีโนเวทเอง</li>
                <li>● ต้องการขายด่วน เพื่อเดินทางไปต่างประเทศ</li>
                <li>● ไม่สามารถปล่อยเช่าได้</li>
              </ul>
            </section>

            {/* SOLUTION */}
            <section className="rounded-xl bg-gray-900 text-white p-5">
              <h3 className="font-semibold mb-3">SOLUTION / STRATEGY</h3>
              <p className="text-sm leading-relaxed">
                NextFlip ประเมินราคาจากข้อมูลเบื้องต้น และตกลงซื้อขายโดยยังไม่ต้องเข้าดูห้องจริง  
                หลังโอนกรรมสิทธิ์ เรารื้อใหม่ทั้งห้อง กำจัดปลวก ตรวจระบบไฟ  
                ปรับแสงและออกแบบใหม่ให้เหมาะกับตลาดเช่า
              </p>
            </section>

            {/* BEFORE / AFTER */}
            <section>
              <h3 className="font-semibold mb-3">BEFORE & AFTER</h3>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-1">BEFORE</p>
                  <div className="bg-gray-100 h-32 rounded-lg mb-2" />
                  <p className="text-gray-600">
                    ห้องปลวกกิน โครงสร้างเดิมเสียหาย
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">AFTER</p>
                  <div className="bg-gray-100 h-32 rounded-lg mb-2" />
                  <p className="text-gray-600">
                    รีโนเวทใหม่ พร้อมเข้าอยู่และปล่อยเช่า
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT – METRICS */}
          <aside className="rounded-xl border p-4 space-y-3 text-sm">
            <div>⏱ ระยะเวลาปิดดีล: <b>15 วัน</b></div>
            <div>💰 รูปแบบการซื้อ: <b>เงินสด</b></div>
            <div>🔧 ขอบเขตงาน: <b>รีโนเวทใหม่ทั้งห้อง</b></div>
            <div>📈 ผลลัพธ์: <b>เพิ่มมูลค่า / ปล่อยเช่าได้</b></div>
          </aside>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-xl bg-primary/10 p-5 text-center">
          <h4 className="font-bold mb-2">
            มีคอนโดที่อยากขายด่วน?
          </h4>
          <p className="text-sm mb-3">
            ประเมินราคาเบื้องต้นฟรี ปิดดีลเงินสด ไม่ต้องปวดหัวกับการรีโนเวท
          </p>
          <button className="px-5 py-2 rounded-lg bg-primary text-white text-sm">
            ประเมินราคา
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
