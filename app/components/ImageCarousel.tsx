import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
    images: string[];
    autoPlay?: boolean;
    interval?: number;
    className?: string;
    hiddenThumbs?: boolean;
}

export default function ImageCarousel({
    images,
    autoPlay = true,
    interval = 3000,
    className = "",
    hiddenThumbs = false,
}: ImageCarouselProps) {
    const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

    const paginate = (newDirection: number) => {
        setIndex(([prev]) => [
            (prev + newDirection + images.length) % images.length,
            newDirection,
        ]);
    };

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(() => paginate(1), interval);
        return () => clearInterval(timer);
    }, [index, autoPlay, interval]);

    return (
        <div className={`relative w-full h-full  overflow-hidden ${className}`}>
            <div className="bg-black/20 w-full h-full absolute z-1 pointer-events-none"></div>
            {/* buttons */}
            {!hiddenThumbs &&<div className="absolute z-10 grid grid-flow-col gap-2 bottom-0 right-0 m-8 md:flex hidden">
                {images.map((image, idx) => <div
                    key={image}
                    onClick={() => setIndex([idx, idx > index ? 1 : -1])}
                    className={`${index !== idx ? "opacity-50 scale-95" : "opacity-90"}  duration-200 md:size-24 size-16 rounded-xl overflow-hidden`}>
                    <img className="h-full w-full object-cover" src={image} />
                </div>)}
            </div>}
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

            {/* Controls */}
            {/* <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 grid place-items-center"
      >
        ‹
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 grid place-items-center"
      >
        ›
      </button> */}

            {/* Dots */}
            <div className="absolute  bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex([i, i > index ? 1 : -1])}
                        className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2 bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -300 : 300,
        opacity: 0,
    }),
};
