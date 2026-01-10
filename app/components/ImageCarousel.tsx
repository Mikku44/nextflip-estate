import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaXmark, FaGrip } from "react-icons/fa6";

interface ImageCarouselProps {
    images: string[];
    autoPlay?: boolean;
    interval?: number;
    className?: string;
    hiddenThumbs?: boolean;
}

export default function ImageCarousel({
    images = [],
    autoPlay = true,
    interval = 3000,
    className = "",
    hiddenThumbs = false,
}: ImageCarouselProps) {
    const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
    const [isShowingAll, setIsShowingAll] = useState(false); // New state
    const scrollRef = useRef<HTMLDivElement>(null);

    const paginate = (newDirection: number) => {
        setIndex(([prev]) => [
            (prev + newDirection + images.length) % images.length,
            newDirection,
        ]);
    };

    useEffect(() => {
        if (scrollRef.current) {
            const activeThumb = scrollRef.current.children[index] as HTMLElement;
            if (activeThumb) {
                scrollRef.current.scrollTo({
                    left: activeThumb.offsetLeft - scrollRef.current.offsetWidth / 2 + activeThumb.offsetWidth / 2,
                    behavior: "smooth",
                });
            }
        }
    }, [index]);

    useEffect(() => {
        if (!autoPlay || isShowingAll) return; // Pause if showing all
        const timer = setInterval(() => paginate(1), interval);
        return () => clearInterval(timer);
    }, [index, autoPlay, interval, isShowingAll]);

    const scrollThumbs = (dir: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 200;
            scrollRef.current.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            <div className="bg-black/20 w-full h-full absolute z-1 pointer-events-none"></div>
            {/* Show All Button - Placed neatly above the counter */}
            <button
                onClick={() => setIsShowingAll(true)}
                className="flex items-center gap-2 text-white text-xs 
                absolute z-30 bottom-10 md:-bottom-5 right-0 m-4 md:m-8 md:flex
                bg-black/60 hover:bg-black px-3 py-1.5 rounded-md backdrop-blur-sm 
                mr-4 mb-1 transition-colors border border-white/20"
            >
                <FaGrip size={10} />
                แสดงรูปทั้งหมด
            </button>
            {/* Thumbnail Navigation UI - Position kept identical */}
            {!hiddenThumbs && (
                <div className="absolute z-20 bottom-0 items-center right-0 m-4 md:m-8 md:flex hidden">
                    <div className="flex flex-col items-end gap-2">



                        <span className="text-white text-xs bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm mr-4">
                            {index + 1} / {images.length}
                        </span>

                        <div className="relative flex items-center group">
                            <button
                                onClick={() => scrollThumbs("left")}
                                className="absolute left-0 z-30 p-2 bg-black/30 text-white rounded-full hover:bg-black/60 transition-all opacity-80 group-hover:opacity-100 -translate-x-4"
                            >
                                <FaChevronLeft size={12} />
                            </button>

                            <div
                                ref={scrollRef}
                                className="flex gap-2 overflow-x-auto p-4 no-scrollbar snap-x transition-all"
                                style={{
                                    maxWidth: '480px',
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none'
                                }}
                            >
                                {images?.map((image, idx) => (
                                    <motion.div
                                        key={image + idx}
                                        onClick={() => setIndex([idx, idx > index ? 1 : -1])}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`
                                            relative flex-shrink-0 cursor-pointer snap-center
                                            md:size-24 size-16 rounded-xl overflow-hidden border-2 transition-all duration-300
                                            ${index === idx ? "opacity-100 border-white scale-100 shadow-lg" : "opacity-60 border-transparent scale-90"}
                                        `}
                                    >
                                        <img className="h-full w-full object-cover" src={image} alt="" />
                                        {index !== idx && <div className="absolute inset-0 bg-black/20" />}
                                    </motion.div>
                                ))}
                            </div>

                            <button
                                onClick={() => scrollThumbs("right")}
                                className="absolute right-0 z-30 p-2 bg-black/30 text-white rounded-full hover:bg-black/60 transition-all opacity-80 group-hover:opacity-100 translate-x-4"
                            >
                                <FaChevronRight size={12} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={index}
                    src={images[index]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.9}
                    onDragEnd={(_, { offset, velocity }) => {
                        if (offset.x > 100 || velocity.x > 500) paginate(-1);
                        if (offset.x < -100 || velocity.x < -500) paginate(1);
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Bottom Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex([i, i > index ? 1 : -1])}
                        className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2 bg-white/50"}`}
                    />
                ))}
            </div>

            {/* FULL SCREEN OVERLAY - Added this section */}
            <AnimatePresence>
                {isShowingAll && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 overflow-y-auto p-4 md:p-10"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-white text-xl font-bold">รูปภาพทั้งหมด</h3>
                            <button
                                onClick={() => setIsShowingAll(false)}
                                className="p-2 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <FaXmark size={24} />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {images.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => {
                                        setIndex([idx, idx > index ? 1 : -1]);
                                        setIsShowingAll(false);
                                    }}
                                    className="aspect-square cursor-pointer rounded-lg overflow-hidden border border-white/10"
                                >
                                    <img src={img} className="w-full h-full object-cover" alt="" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? "-100%" : "100%",
        opacity: 0,
    }),
};