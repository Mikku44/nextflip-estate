import { motion } from "framer-motion";

type CardWithOverlayProps = {
  image: string;
  title: string;
  description?: string;
  height?: string;
};

export default function CardWithOverlay({
  image,
  title,
  description,
  height = "h-80",
}: CardWithOverlayProps) {
  return (
    <motion.div
     
      transition={{ duration: 0.3 }}
      className={`relative ${height} w-full overflow-hidden shadow-lg cursor-pointer`}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-semibold leading-tight">
          {title}
        </h3>

        {description && (
          <p className="mt-2 text-sm text-white/80">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
