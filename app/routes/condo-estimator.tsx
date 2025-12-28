import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaCloudUploadAlt } from 'react-icons/fa';
import ImageCarousel from '~/components/ImageSlider2';
import type { Route } from './+types/condo-estimator';


export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "ประเมินราคาคอนโดฟรี | รู้ราคาขายภายใน 24 ชม. | NextFlip Estate",
    },
    {
      name: "description",
      content:
        "ประเมินราคาคอนโดฟรีกับ NextFlip Estate รู้ราคาขายภายใน 24 ชั่วโมง ประเมินตรงตลาด รับซื้อเงินสดจริง ปรึกษาฟรี ไม่มีค่าใช้จ่าย",
    },
  ];
}




export default function ValuationStepForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 3; // Adjusted to match your visible steps

  // 1. Centralized Data State
  const [formData, setFormData] = useState({
    projectName: '',
    buildingFloor: '',
    sizeSqm: '',
    bedrooms: 'Studio',
    isCornerUnit: false,
    conditionDetail: '',
    roomStatus: 'ว่าง',
    liabilityStatus: '',
    askingPrice: '',
    contactName: '',
    phoneNumber: '',
  });


  // 2. Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  // 3. Database Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data to send to DB:", formData);

    // Example API Call:
    // const response = await fetch('/api/valuation', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    // });

    alert("ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด");
  };

  return (
    <main className='bg-zinc-100 pb-10'>
      {/* HERO section remains same */}
      <div className="h-[70vh] bg-zinc-100 overflow-hidden relative">
        <div className="h-full w-full flex items-center justify-center text-center flex-col pb-10 absolute z-10 inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <motion.h1 className="text-4xl md:text-6xl max-w-3xl px-4 drop-shadow-2xl text-white">ประเมินราคาคอนโด</motion.h1>
          <motion.p className="text-lg md:text-xl font-light max-w-2xl text-white/80 mt-4 px-6">รับประเมินราคาคอนโดฟรี โดยผู้เชี่ยวชาญด้านอสังหาฯ ของเรา</motion.p>
        </div>
        <ImageCarousel />
      </div>

      <section className="pb-10 container-x">
        <div className="w-full mt-10 max-w-2xl mx-auto bg-white h-fit border p-8 md:p-12 shadow-2xl border-t-4 border-zinc-900">
          <div className="mb-10 flex justify-between items-center text-[10px] font-bold tracking-widest uppercase text-zinc-400">
            <span>Step {step} of {totalSteps}</span>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-1 w-8 transition-colors ${step >= i ? 'bg-zinc-900' : 'bg-zinc-200'}`} />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="min-h-[450px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-2xl font-light mb-8">A) ข้อมูลห้อง</h3>
                  <input name="projectName" value={formData.projectName} onChange={handleChange} type="text" placeholder="ชื่อโครงการ" className="w-full input p-3" required />
                  <div className="grid grid-cols-2 gap-4">
                    <input name="buildingFloor" value={formData.buildingFloor} onChange={handleChange} type="text" placeholder="อาคาร/ชั้น" className="input p-3" />
                    <input name="sizeSqm" value={formData.sizeSqm} onChange={handleChange} type="number" placeholder="ขนาด (ตร.ม.)" className="input p-3" />
                  </div>
                  <select name="bedrooms" value={formData.bedrooms} onChange={handleChange} className="w-full input bg-transparent  p-3">
                    <option value="Studio">Studio</option>
                    <option value="1 ห้องนอน">1 ห้องนอน</option>
                    <option value="2 ห้องนอน+">2 ห้องนอน+</option>
                  </select>
                  <label className="flex items-center gap-3 cursor-pointer py-2">
                    <input name="isCornerUnit" checked={formData.isCornerUnit} onChange={handleChange} type="checkbox" className="w-4 h-4 accent-zinc-900" />
                    <span className="text-sm font-light text-zinc-600">เป็นห้องมุม?</span>
                  </label>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-2xl font-light mb-8">B) สภาพ & สถานะ</h3>
                  <textarea name="conditionDetail" value={formData.conditionDetail} onChange={handleChange} placeholder="รายละเอียดสภาพห้อง..." className="w-full border border-zinc-200 p-4 focus:border-zinc-900 outline-none font-light h-32" />
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">สถานะห้อง</p>
                      <div className="flex md:flex-row flex-col flex-wrap gap-2">
                        {['ว่าง', 'มีผู้เช่า', 'อยู่เอง'].map((status) => (
                          <label key={status} className="flex-1">
                            <input
                              type="radio"
                              name="roomStatus"
                              value={status}
                              checked={formData.roomStatus === status}
                              onChange={handleChange}
                              className="hidden" // ซ่อน radio ดั้งเดิม
                            />
                            <div className={`cursor-pointer py-3 px-4 text-center text-sm 
                                  transition-all border ${formData.roomStatus === status
                                ? 'bg-zinc-900 text-white border-zinc-900 shadow-md'
                                : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400'}`}>
                              {status}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">ภาระผูกพัน</p>
                      <div className="grid  md:grid-cols-2 gap-2">
                        {[
                          { id: 'bank', label: 'ติดธนาคาร' },
                          { id: 'free', label: 'ปลอดภาระ' }
                        ].map((item) => (
                          <label key={item.id} className="cursor-pointer">
                            <input
                              type="radio"
                              name="liabilityStatus"
                              value={item.id}
                              checked={formData.liabilityStatus === item.id}
                              onChange={handleChange}
                              className="hidden"
                            />
                            <div className={`py-3 px-4 text-center text-sm transition-all border
                                    ${formData.liabilityStatus === item.id
                                ? 'bg-zinc-900 text-white border-zinc-900 shadow-md'
                                : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400'}`}>
                              {item.label}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-2xl font-light mb-8">C) ราคา & ติดต่อกลับ</h3>
                  <input name="askingPrice" value={formData.askingPrice} onChange={handleChange} type="number" placeholder="ราคาที่ต้องการขาย (บาท)" className="w-full input p-3" />
                  <div className="grid grid-cols-2 gap-4">
                    <input name="contactName" value={formData.contactName} onChange={handleChange} type="text" placeholder="ชื่อของคุณ" className="input p-3" />
                    <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" placeholder="เบอร์โทรศัพท์" className="input p-3" />
                  </div>
                  {/* <div className="border-2 border-dashed border-zinc-200 p-8 text-center hover:border-zinc-900 transition-colors cursor-pointer group">
                    <FaCloudUploadAlt className="mx-auto text-zinc-300 group-hover:text-zinc-900 mb-2" size={32} />
                    <p className="text-xs font-light text-zinc-400">Upload รูปห้อง (สูงสุด 10 รูป)</p>
                  </div> */}
                </motion.div>
              )}
            </AnimatePresence>

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
                <button type="button" className="flex-[2] py-4 bg-zinc-900 text-white flex items-center justify-center gap-2 hover:bg-black transition-all font-bold uppercase tracking-widest text-xs shadow-xl shadow-zinc-200">
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