import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CgChevronDoubleDown } from "react-icons/cg";


interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className=" border border-zinc-200 bg-white overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() =>
                setOpenIndex(isOpen ? null : index)
              }
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <h3 className="text-base font-medium">
                {item.question}
              </h3>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <CgChevronDoubleDown className="size-5 text-zinc-500" />
              </motion.span>
            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-sm leading-relaxed font-light text-(--primary-color)">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}


