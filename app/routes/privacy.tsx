import { motion } from 'framer-motion';
import type { Route } from './+types/privacy';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "นโยบายความเป็นส่วนตัว | NextFlip Estate" },
    { name: "description", content: "รายละเอียดการคุ้มครองข้อมูลส่วนบุคคลสำหรับผู้ใช้บริการ NextFlip Estate" },
  ];
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-zinc-50 min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-zinc-200 p-10 md:p-16 shadow-sm"
        >
          <h1 className="text-3xl font-light text-zinc-900 mb-2">Privacy Policy</h1>
          <p className="text-zinc-400 text-sm mb-12 uppercase tracking-widest">Last Updated: December 28, 2025</p>

          <div className="space-y-10 font-light text-zinc-600 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-zinc-900 font-medium uppercase tracking-tighter">1. ข้อมูลที่เราจัดเก็บ</h2>
              <p>ในการขอรับบริการประเมินราคา เรามีความจำเป็นต้องจัดเก็บข้อมูลดังต่อไปนี้:</p>
              <ul className="list-disc ml-5 space-y-2">
                <li>ข้อมูลติดต่อ: ชื่อ-นามสกุล และเบอร์โทรศัพท์</li>
                <li>ข้อมูลอสังหาริมทรัพย์: ชื่อโครงการ, ชั้น, ขนาดห้อง และรูปภาพ (ถ้ามี)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-zinc-900 font-medium uppercase tracking-tighter">2. วัตถุประสงค์ในการใช้ข้อมูล</h2>
              <p>เราใช้ข้อมูลของคุณเพื่อ:</p>
              <ul className="list-disc ml-5 space-y-2">
                <li>วิเคราะห์และประเมินมูลค่าทรัพย์สินตามที่คุณร้องขอ</li>
                <li>ติดต่อกลับเพื่อให้คำปรึกษาหรือเสนอราคารับซื้อ</li>
                <li>พัฒนาการให้บริการภายในทีม NextFlip Estate เท่านั้น</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-zinc-900 font-medium uppercase tracking-tighter">3. การรักษาความปลอดภัย</h2>
              <p>
                ข้อมูลของคุณจะถูกเก็บรักษาเป็นความลับและเข้าถึงได้เฉพาะเจ้าหน้าที่ที่เกี่ยวข้อง 
                เราจะไม่มีการเปิดเผยหรือขายข้อมูลส่วนบุคคลของคุณให้แก่บุคคลที่สามเพื่อวัตถุประสงค์ทางการค้าโดยเด็ดขาด
              </p>
            </section>

            <div className="pt-10 border-t border-zinc-100">
              <p className="text-sm text-zinc-900">ติดต่อเจ้าหน้าที่คุ้มครองข้อมูล:</p>
              <p className="text-sm">Email: support@nextflipestate.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}