import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaLine, FaCloudUploadAlt } from 'react-icons/fa';
import ImageCarousel from '~/components/ImageSlider2';
import type { Route } from './+types/condo-estimator';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ประเมินราคาคอนโดฟรี | NextFlip Estate" },
    { 
      name: "description", 
      content: "ส่งข้อมูลคอนโดเพื่อรับการประเมินราคาเบื้องต้นฟรี วิเคราะห์แม่นยำด้วยฐานข้อมูลตลาดจริง โดยทีมงาน NextFlip Estate" 
    },
    { 
      name: "keywords", 
      content: "ประเมินราคาคอนโด, เช็กราคาคอนโด, ฝากขายคอนโด, ขายคอนโดเงินสด, NextFlip Estate" 
    },
    { property: "og:title", content: "ประเมินราคาอสังหาฯ ฟรีกับ NextFlip Estate" },
    { property: "og:image", content: "/images/condo15.jpg" }, // ใส่รูป Preview สวยๆ
  ];
}

export default function ValuationStepForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <main className='bg-zinc-100 pb-10'>
      {/* HERO section */}
      <div className="h-[70vh] bg-zinc-100 overflow-hidden relative">
        <div className="h-full w-full flex items-center justify-center text-center flex-col pb-10 absolute z-10 inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl max-w-3xl px-4 drop-shadow-2xl text-white "
          >
            ประเมินราคาคอนโด
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light max-w-2xl text-white/80 mt-4 px-6"
          >
            รับประเมินราคาคอนโดฟรี โดยผู้เชี่ยวชาญด้านอสังหาฯ ของเรา
          </motion.p>
        </div>
        {/* <img 
               loading="lazy"
                src="/images/condo24.jpg"
                className="w-full h-full object-cover scale-105" 
                alt="blog cover" 
              /> */}
        <ImageCarousel />
      </div>
      {/* form */}
      <section className="pb-10">
        <div className="w-full mt-10  max-w-2xl mx-auto bg-white h-fit border p-8 md:p-12 shadow-2xl border-t-4 border-zinc-900">
          {/* Progress Bar */}
          <div className="mb-10 flex justify-between items-center text-[10px] font-bold tracking-widest uppercase text-zinc-400">
            <span>Step {step} of {totalSteps}</span>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-1 w-8 transition-colors ${step >= i ? 'bg-zinc-900' : 'bg-zinc-200'}`} />
              ))}
            </div>
          </div>
          <form className="min-h-[450px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-2xl font-light mb-8">A) ข้อมูลห้อง</h3>
                  <input type="text" placeholder="ชื่อโครงการ" className="w-full input" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="อาคาร/ชั้น" className="input" />
                    <input type="text" placeholder="ขนาด (ตร.ม.)" className="input" />
                  </div>
                  <select className="w-full input bg-transparent">
                    <option>จำนวนห้องนอน</option>
                    <option>Studio</option>
                    <option>1 ห้องนอน</option>
                    <option>2 ห้องนอน+</option>
                  </select>
                  <label className="flex items-center gap-3 cursor-pointer py-2">
                    <input type="checkbox" className="w-4 h-4 accent-zinc-900" />
                    <span className="text-sm font-light text-zinc-600">เป็นห้องมุม?</span>
                  </label>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-2xl font-light mb-8">B) สภาพ & สถานะ</h3>
                  <textarea placeholder="รายละเอียดสภาพห้อง (เช่น รีโนเวทแล้ว, มีตำหนิผนัง)" className="w-full border border-zinc-200 p-4 focus:border-zinc-900 outline-none font-light h-32" />
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">สถานะห้อง</p>
                      <label className="flex gap-2 text-sm font-light"><input type="radio" name="status" /> ว่าง</label>
                      <label className="flex gap-2 text-sm font-light"><input type="radio" name="status" /> มีผู้เช่า</label>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">ภาระผูกพัน</p>
                      <label className="flex gap-2 text-sm font-light"><input type="checkbox" /> ติดธนาคาร</label>
                      <label className="flex gap-2 text-sm font-light"><input type="checkbox" /> ค้างส่วนกลาง</label>
                    </div>
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-2xl font-light mb-8">C) ราคา & ติดต่อกลับ</h3>
                  <input type="number" placeholder="ราคาที่ต้องการขาย (บาท)" className="w-full input" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="ชื่อของคุณ" className="input" />
                    <input type="tel" placeholder="เบอร์โทรศัพท์" className="input" />
                  </div>
                  <div className="border-2 border-dashed border-zinc-200 p-8 text-center hover:border-zinc-900 transition-colors cursor-pointer group">
                    <FaCloudUploadAlt className="mx-auto text-zinc-300 group-hover:text-zinc-900 mb-2" size={32} />
                    <p className="text-xs font-light text-zinc-400">Upload รูปห้อง (สูงสุด 10 รูป)</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-12 border-t border-zinc-100 pt-8">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="flex-1 py-4 border border-zinc-200 flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all font-medium uppercase tracking-widest text-xs">
                  <FaChevronLeft size={10} /> Back
                </button>
              )}
              {step < totalSteps ? (
                <button type="button" onClick={nextStep} className="flex-[2] py-4 bg-zinc-900 text-white flex items-center justify-center gap-2 hover:bg-black transition-all font-medium uppercase tracking-widest text-xs">
                  Next Step <FaChevronRight size={10} />
                </button>
              ) : (
                <button type="submit" className="flex-[2] py-4 bg-zinc-900 text-white flex items-center justify-center gap-2 hover:bg-black transition-all font-bold uppercase tracking-widest text-xs shadow-xl shadow-zinc-200">
                  Submit Request
                </button>
              )}
            </div>
          </form>
        </div>
      </section>


    </main>
  );
}