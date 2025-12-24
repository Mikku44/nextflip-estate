import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { CONTACT_METHODS } from "~/routes/contact";


export default function FloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Mini Actions */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col items-end gap-3 mb-3"
          >
            {CONTACT_METHODS.map((item) => (
              <ActionButton
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
                color={item.color}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: open ? 45 : 0 }}
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-lg"
      >
        {/* Pulse */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(0,0,0,0.4)",
              "0 0 0 14px rgba(0,0,0,0)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="absolute inset-0 rounded-full"
        />
        <FiPlus size={24} />
      </motion.button>
    </div>
  );
}


function ActionButton({
  icon,
  label,
  href,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  color?: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center gap-3 px-4 py-2 rounded-full bg-white text-black shadow border border-gray-200 transition ${color}`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </motion.a>
  );
}
