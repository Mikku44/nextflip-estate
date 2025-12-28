import { motion } from 'framer-motion';
import type { Route } from './+types/terms';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ข้อกำหนดและเงื่อนไขการใช้งาน | NextFlip Estate" },
    { name: "description", content: "ข้อกำหนดและเงื่อนไขการใช้บริการประเมินราคาคอนโดของ NextFlip Estate" },
  ];
}

export default function TermsOfUse() {
  return (
    <main className="bg-zinc-50 min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-zinc-200 p-10 md:p-16 shadow-sm"
        >
          <h1 className="text-3xl font-light text-zinc-900 mb-2">Terms of Use</h1>
          <p className="text-zinc-400 text-sm mb-12 uppercase tracking-widest">Effective Date: December 28, 2025</p>

          <div className="space-y-10 font-light text-zinc-600 leading-relaxed">
            <section>
              <h2 className="text-zinc-900 font-medium mb-4 uppercase tracking-tighter">1. การให้บริการประเมินราคา</h2>
              <p>
                บริการประเมินราคาคอนโดผ่าน NextFlip Estate เป็นการประเมินเบื้องต้นโดยอิงจากข้อมูลตลาดในขณะนั้น 
                ผลลัพธ์ที่ได้ไม่ใช่ราคาประเมินจากสถาบันการเงิน และอาจมีการเปลี่ยนแปลงตามสภาพห้องจริงและปัจจัยทางการตลาดอื่น ๆ
              </p>
            </section>

            <section>
              <h2 className="text-zinc-900 font-medium mb-4 uppercase tracking-tighter">2. ความถูกต้องของข้อมูล</h2>
              <p>
                ผู้ใช้บริการตกลงที่จะให้ข้อมูลที่เป็นความจริงและถูกต้องเกี่ยวกับคุณสมบัติของอสังหาริมทรัพย์ 
                การให้ข้อมูลเท็จอาจส่งผลให้การประเมินราคาผิดพลาดและบริษัทขอสงวนสิทธิ์ในการยกเลิกการให้บริการ
              </p>
            </section>

            <section>
              <h2 className="text-zinc-900 font-medium mb-4 uppercase tracking-tighter">3. ข้อจำกัดความรับผิดชอบ</h2>
              <p>
                NextFlip Estate จะไม่รับผิดชอบต่อความสูญเสียหรือความเสียหายใดๆ ที่เกิดจากการนำข้อมูลการประเมินราคาไปใช้ 
                การตัดสินใจซื้อขายหรือลงทุนควรได้รับคำปรึกษาเพิ่มเติมจากผู้เชี่ยวชาญด้านกฎหมายและการเงิน
              </p>
            </section>

            <div className="pt-10 border-t border-zinc-100">
              <p className="text-xs text-zinc-400 italic">
                * หากมีข้อสงสัยเกี่ยวกับข้อกำหนดการใช้งาน กรุณาติดต่อทีมงาน NextFlip Estate โดยตรง
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}