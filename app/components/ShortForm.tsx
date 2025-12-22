import { FaLine } from "react-icons/fa6";


export default function QuickValuationForm() {
    return (
        <section className="w-full flex justify-center py-20">
            <div className="w-full relative z-10 max-w-xl border border-zinc-200 bg-white shadow-xl p-8">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    ประเมินราคาคอนโดเบื้องต้น
                </h2>

                <form className="space-y-5">
                    {/* Project / Location */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            โครงการ / ทำเล
                        </label>
                        <input
                            type="text"
                            name="location"
                            placeholder="เช่น สุขุมวิท, พระราม 9"
                            className="w-full border border-zinc-300 px-4 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    {/* Size */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            ขนาดห้อง (ตร.ม.)
                        </label>
                        <input
                            type="number"
                            name="size"
                            placeholder="เช่น 32"
                            className="w-full border border-zinc-300 px-4 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    {/* Room Condition */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            สภาพห้อง
                        </label>
                        <select
                            name="condition"
                            required
                            className="w-full border border-zinc-300 px-4 py-2.5 text-sm bg-white
              focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            <option value="">เลือกสภาพห้อง</option>
                            <option value="original">สภาพเดิม</option>
                            <option value="renovated">รีโนเวทแล้ว</option>
                            <option value="defect">มีตำหนิ / ต้องซ่อม</option>
                        </select>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            เบอร์โทรศัพท์
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="เช่น 08x-xxx-xxxx"
                            className="w-full border border-zinc-300 px-4 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    {/* LINE */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            LINE ID (ไม่บังคับ)
                        </label>
                        <input
                            type="text"
                            name="line"
                            placeholder="LINE ID ของคุณ"
                            className="w-full border border-zinc-300 px-4 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <div className="grid">
                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full mt-4 bg-black py-3 text-white font-medium
                                    hover:bg-zinc-800 transition"
                        >
                            ส่งเพื่อประเมิน
                        </button>
                        <p className="text-center text-sm text-zinc-500 mt-2">
                            หรือ
                        </p>
                        {/* LINE */}
                        <button
                            type="submit"
                            className="w-full mt-4 bg-green-500 py-3 text-white font-medium
                                    hover:bg-green-400 flex justify-center items-center gap-4 transition "
                        >
                            <FaLine className="size-[24px]" />
                            <div className="">ติดต่อผ่าน LINE</div>
                        </button>
                    </div>
                </form>
            </div>

            <div
                className="absolute bottom-[-70px] left-[-10vw] w-[100vw] h-56  bg-zinc-100"
                style={{
                    clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
                }}
            />
        </section>
    );
}
