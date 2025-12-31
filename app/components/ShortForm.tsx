import { FaLine } from "react-icons/fa6";
import { Link } from "react-router";
import { useState } from "react";
import { toast } from "sonner";

export default function QuickValuationForm() {
    const [loading, setLoading] = useState(false);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        // ปรับ Payload ให้ตรงกับ name ใน input
        const payload = {
            project: formData.get("project") as string,
            building: formData.get("building") as string,
            floor: formData.get("floor") as string,
            price: formData.get("price") as string,
            phone: formData.get("phone") as string,
            line: formData.get("line") as string,
        };

        const message = `
*ขอสอบถามข้อมูลและประเมินราคาเบื้องต้น*

ชื่อโครงการ: ${payload.project}
อาคาร: ${payload.building}
ชั้น: ${payload.floor}
ราคาที่ต้องการขาย: ${payload.price} บาท
หมายเลขโทรศัพท์: ${payload.phone}
LINE ID: ${payload.line || "-"}
        `.trim();

        const href = `https://lin.ee/4fkHaEbk?text=${encodeURIComponent(message)}`;

        window.open(href, "_blank");
        
        setLoading(false);
        toast("ระบบกำลังเปิด LINE เพื่อส่งข้อมูล");
        e.currentTarget.reset();
    }

    return (
        <section className="w-full flex justify-center md:py-20 px-4 py-4">
            <div className="w-full max-w-xl bg-white shadow-xl p-8 border border-zinc-100">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    ประเมินราคาคอนโดเบื้องต้น
                </h2>

                <form onSubmit={onSubmit} className="space-y-5">
                    {/* Project Name */}
                    <div className="space-y-1">
                        <label htmlFor="project" className="text-sm font-medium">
                            ชื่อโครงการ
                        </label>
                        <input
                            id="project"
                            name="project"
                            required
                            placeholder="เช่น Life Asoke, IDEO Rama 9"
                            className="w-full input p-2"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Building */}
                        <div className="space-y-1">
                            <label htmlFor="building" className="text-sm font-medium">
                                อาคาร
                            </label>
                            <input
                                id="building"
                                name="building"
                                placeholder="เช่น A หรือ 1"
                                className="w-full input p-2"
                            />
                        </div>
                        {/* Floor */}
                        <div className="space-y-1">
                            <label htmlFor="floor" className="text-sm font-medium">
                                ชั้น
                            </label>
                            <input
                                id="floor"
                                name="floor"
                                type="number"
                                placeholder="เช่น 12"
                                className="w-full input p-2"
                            />
                        </div>
                    </div>

                    {/* Asking Price */}
                    <div className="space-y-1">
                        <label htmlFor="price" className="text-sm font-medium">
                            ราคาที่ต้องการขาย (บาท)
                        </label>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            placeholder="เช่น 3500000"
                            className="w-full input p-2"
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                        <label htmlFor="phone" className="text-sm font-medium">
                            เบอร์โทรศัพท์
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            required
                            placeholder="08x-xxx-xxxx"
                            className="w-full input p-2"
                        />
                    </div>

                    {/* LINE */}
                    <div className="space-y-1">
                        <label htmlFor="line" className="text-sm font-medium">
                            LINE ID (ไม่บังคับ)
                        </label>
                        <input
                            id="line"
                            name="line"
                            placeholder="ID ของคุณ"
                            className="w-full input p-2"
                        />
                    </div>

                    <div className="font-light text-sm text-zinc-600 italic">
                        * การประเมินนี้ไม่มีค่าใช้จ่าย และไม่มีข้อผูกมัด
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black py-3 text-white font-medium hover:bg-zinc-800 transition-colors"
                    >
                        {loading ? "กำลังส่ง..." : "ส่งข้อมูลเพื่อประเมินฟรี"}
                    </button>

                    <p className="text-center text-sm text-zinc-500">หรือ</p>

                    <Link
                        target="_blank"
                        to="https://lin.ee/4fkHaEbk"
                        className="w-full bg-[#06C755] py-3 text-white font-medium flex justify-center items-center gap-3 hover:bg-[#05b34c] transition-colors"
                    >
                        <FaLine size={24} />
                        ติดต่อผ่าน LINE โดยตรง
                    </Link>
                </form>
            </div>
        </section>
    );
}