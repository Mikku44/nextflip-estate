import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoBarChartOutline, IoTimeOutline, IoClose } from "react-icons/io5";
import CaseDetailModal from "./CaseDetailModal";


interface CaseCardProps {

    data: {

        slug: string;

        title: string;

        excerpt: string;

        imageAfter: string;

        status: string; // "Renovated" | "Sold Fast"

        time: string;

        result: string;

    };

    index: number;

}

export default function CaseStudyCard({ data, index }: CaseCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const isFeatured = index === 0;

    return (
        <>
            <motion.div
                onClick={() => setIsOpen(true)} // คลิกเพื่อเปิด Modal
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer ${isFeatured ? "md:col-span-6 lg:flex-row h-auto lg:h-[500px]" : "md:col-span-3 lg:col-span-2"
                    }`}
            >
                {/* ส่วน Image และ Content เดิมของคุณ... */}
                <div className={`relative overflow-hidden ${isFeatured ? "lg:w-3/5 h-72 lg:h-full" : "h-72"}`}>
                    <img loading="lazy" src={data.imageAfter} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={data.title} />
                    <div className="absolute top-4 left-4 bg-zinc-900 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">{data.status}</div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3 shadow-xl">
                        <div className="flex items-center gap-2 text-zinc-900">
                            <IoBarChartOutline size={14} className="text-amber-600" />
                            <span className="text-xs font-bold uppercase tracking-tighter">{data.result}</span>
                        </div>
                    </div>
                </div>

                <div className={`p-8 flex flex-col justify-between ${isFeatured ? "lg:w-2/5" : "flex-1"}`}>
                    <div>
                        <div className="flex items-center gap-2 text-zinc-400 mb-3">
                            <IoTimeOutline size={14} />
                            <span className="text-xs font-medium uppercase tracking-widest">{data.time} Process</span>
                        </div>
                        <h3 className={`${isFeatured ? "text-3xl" : "text-xl"} font-semibold mb-4 leading-tight`}>{data.title}</h3>
                        <p className="text-zinc-500 font-light leading-relaxed line-clamp-3">{data.excerpt}</p>
                    </div>
                    <div className="mt-8 text-xs font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-100 w-fit pb-1">View Full Case →</div>
                </div>
            </motion.div>

            {/* เรียกใช้งาน Modal */}
            <AnimatePresence>
                {isOpen && <CaseDetailModal data={data} onClose={() => setIsOpen(false)} />}
            </AnimatePresence>
        </>
    );
}