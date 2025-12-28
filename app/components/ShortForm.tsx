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

        const payload = {
            location: formData.get("location") as string,
            size: formData.get("size") as string,
            condition: formData.get("condition") as string,
            phone: formData.get("phone") as string,
            line: formData.get("line") as string,
        };

        const message = `
            *ขอสอบถามข้อมูลและประเมินราคาเบื้องต้น*

            ทำเลที่ตั้ง: ${payload.location}
            ขนาดพื้นที่: ${payload.size}
            สภาพทรัพย์สิน: ${payload.condition}
            หมายเลขโทรศัพท์: ${payload.phone}
            LINE ID: ${payload.line}
            `.trim();

        // const href = `https://lin.ee/4fkHaEbk?text=${encodeURIComponent(message)}`;

        // window.open(href, "_blank");
     

        try {
            const res = await fetch("/api/apply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(message),
            });

            if (!res.ok) throw new Error("Submit failed");

            const result = await res.json();
            console.log("Success:", result);

            toast("ส่งข้อมูลเรียบร้อยแล้ว");
        } catch (error) {
            console.error("Error submitting form:", error);
            toast("เกิดข้อผิดพลาด กรุณาลองใหม่");
        } finally {
            setLoading(false);
        }

        setLoading(false);
        toast("ระบบกำลังเปิด LINE เพื่อส่งข้อมูล");
        e.currentTarget.reset();
    }


    return (
        <section className="w-full flex justify-center md:py-20 px-4 py-4">
            <div className="w-full max-w-xl  bg-white shadow-xl p-8">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    ประเมินราคาคอนโดเบื้องต้น
                </h2>

                <form onSubmit={onSubmit} className="space-y-5">
                    {/* Location */}
                    <div className="space-y-1">
                        <label htmlFor="location" className="text-sm font-medium">
                            โครงการ / ทำเล
                        </label>
                        <input
                            id="location"
                            name="location"
                            required
                            placeholder="เช่น สุขุมวิท, พระราม 9"
                            className="w-full input"
                        />
                    </div>

                    {/* Size */}
                    <div className="space-y-1">
                        <label htmlFor="size" className="text-sm font-medium">
                            ขนาดห้อง (ตร.ม.)
                        </label>
                        <input
                            id="size"
                            name="size"
                            type="number"
                            required
                            placeholder="เช่น 32"
                            className="w-full input"
                        />
                    </div>

                    {/* Condition */}
                    <div className="space-y-1">
                        <label htmlFor="condition" className="text-sm font-medium">
                            สภาพห้อง
                        </label>
                        <select
                            id="condition"
                            name="condition"
                            required
                            className="w-full input"
                        >
                            <option value="">เลือกสภาพห้อง</option>
                            <option value="สภาพเดิม">สภาพเดิม</option>
                            <option value="รีโนเวทแล้ว">รีโนเวทแล้ว</option>
                            <option value="มีตำหนิ / ต้องซ่อม">มีตำหนิ / ต้องซ่อม</option>
                        </select>
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
                            placeholder="เช่น 08x-xxx-xxxx"
                            className="w-full input"
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
                            placeholder="LINE ID ของคุณ"
                            className="w-full input"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        disabled={loading}
                        className="w-full bg-black py-3 text-white font-medium hover:bg-zinc-800"
                    >
                        {loading ? "กำลังส่ง..." : "ส่งเพื่อประเมิน"}
                    </button>

                    <p className="text-center text-sm text-zinc-500">หรือ</p>

                    <Link
                        target="_blank"
                        to="https://lin.ee/4fkHaEbk"
                        className="w-full bg-green-500 py-3 text-white font-medium flex justify-center items-center gap-3"
                    >
                        <FaLine size={24} />
                        ติดต่อผ่าน LINE
                    </Link>
                </form>
            </div>
        </section>
    );
}
