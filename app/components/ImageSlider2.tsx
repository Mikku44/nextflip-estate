import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Fallback images if none are provided via props
const DEFAULT_IMAGES = [
    '/images/condo24.jpg',
    '/images/condo25.jpg',
    '/images/condo26.jpg',
];

interface ImageCarouselProps {
    images?: string[];
}

const ImageCarousel = ({ images = DEFAULT_IMAGES }: ImageCarouselProps) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Only start timer if there's more than one image
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [images.length]); // Re-run if the image array length changes

    return (
        <div className="relative w-full h-full overflow-hidden bg-gray-900">
            <AnimatePresence mode="popLayout">
                <motion.img
                    // Key is essential for Framer Motion to know when to swap elements
                    key={images[index]}
                    src={images[index]}
                    alt={`Slide ${index}`}
                    
                    // The "Ken Burns" Effect Logic:
                    // Starts at natural size (1)
                    initial={{ opacity: 0, scale: 1 }}
                    // Zooms in slowly to 1.1 (10% growth)
                    animate={{ opacity: 1, scale: 1.1 }}
                    // Continues zooming to 1.15 while fading out for a seamless transition
                    exit={{ opacity: 0, scale: 1.15 }}
                    
                    transition={{
                        opacity: { duration: 1.5, ease: "easeInOut" },
                        scale: { duration: 7, ease: "linear" }, 
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Overlay to ensure any text placed on top remains readable */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
    );
};

export default ImageCarousel;