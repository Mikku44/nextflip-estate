import { AnimatePresence, motion } from "framer-motion";
import { FaLine } from "react-icons/fa";

interface LineCopyModalProps {
  open: boolean;
  text: string;
  onClose?: () => void;
}

export default function LineCopyModal({
  open,
  text,
  onClose,
}: LineCopyModalProps) {
  const handleCopyAndContinue = async () => {
    try {
      await navigator.clipboard.writeText(text);


       const lineUrl =
        "https://line.me/R/ti/p/@647xoqha?text=" +
        encodeURIComponent(text);
    //   const lineUrl =
    //     "https://line.me/R/msg/text/?" +
    //     encodeURIComponent(text);

      window.open(lineUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-sm rounded-2xl bg-white/90 backdrop-blur-md p-6 shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-center text-gray-800 leading-relaxed">
              ระบบได้เตรียมข้อความไว้ให้แล้ว
              <br />
              กรุณากดปุ่มด้านล่างเพื่อเปิด LINE
              <br />
              
            </p>

            <textarea name="message" id="msg" cols={15}
            className="input mx-auto w-full border-2 h-[240px]
            mt-5 bg-zinc-100 text-zinc-800 rounded-xl border-black" 
            value={text}></textarea>

            <button
              onClick={handleCopyAndContinue}
              className="mt-6 w-full rounded-xl flex items-center justify-center gap-4 bg-green-500 py-3 text-sm font-medium text-white
                         hover:bg-green-500/80 transition active:scale-[0.98]"
            >
             <FaLine className="size-12" /> Add Line and Copy
            </button>

            {onClose && (
              <button
                onClick={onClose}
                className="mt-3 w-full text-sm text-gray-500 hover:text-gray-700"
              >
                ยกเลิก
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
