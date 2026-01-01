import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  title: string;
}

const ImagePreview = ({ images, title }: Props) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      {/* 1. The Grid Display */}
      <div className="grid grid-cols-2 gap-3">
        {images?.map((p, i) => (
          <motion.div
            key={i}
            layoutId={p} // Shared element transition
            onClick={() => setSelectedImg(p)}
            className="cursor-pointer overflow-hidden "
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src={p} 
              alt={`${title} - ${i}`} 
              className="w-full h-full object-cover aspect-square"
            />
          </motion.div>
        ))}
      </div>

      {/* 2. The Modal Preview Overlay */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.button
              className="absolute top-5 right-5 text-white text-2xl"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </motion.button>

            <motion.img
              layoutId={selectedImg} // Matches the layoutId in the grid for a smooth fly-out
              src={selectedImg}
              alt="Preview"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImagePreview;