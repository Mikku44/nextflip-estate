import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaShare,
  FaFacebookF,
  FaLine,
  FaInstagram,
  FaXTwitter,
} from 'react-icons/fa6';
import { toast } from 'sonner';

interface ShareButtonProps {
  url?: string;
  title?: string;
  variant?: 'full' | 'icon'; // New prop to switch styles
}

const ShareButton = ({
  url: initialUrl = "",
  title = "Check out this condo!",
  variant = 'full'
}: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState(initialUrl);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(initialUrl || window.location.href);
    }
  }, [initialUrl]);

  const shareOptions = [
    { name: 'Facebook', icon: <FaFacebookF />, color: '#1877F2', link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { name: 'Line', icon: <FaLine />, color: '#06C755', link: `https://lineit.line.me/share/ui?url=${encodeURIComponent(shareUrl)}` },
    // { name: 'Instagram', icon: <FaInstagram />, color: '#E4405F', link: `https://www.instagram.com/` },
    { name: 'X', icon: <FaXTwitter />, color: '#000000', link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}` },
  ];

  const handleNativeShare = async (e: any) => {
    e.preventDefault();
    if (navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl });
      } catch (err) {
        toast(`Error sharing ${JSON.stringify(err)}`);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      toast('คัดลอกลิงก์ไปยังคลิปบอร์ดแล้ว!');
    }
  };

  return (
    <>
      {/* Trigger Button Logic */}
      {variant === 'full' ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true)
          }}
          className="btn-1 w-full cursor-pointer flex justify-center items-center gap-2 px-4 py-2 border hover:bg-gray-50 transition-all"
        >
          <span>{title ? title :"แชร์คอนโดนี้"}</span>
          <FaShare />
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true)
          }}
          className="p-3 bg-white border border-zinc-200 rounded-full shadow-sm hover:bg-gray-50 transition-all text-zinc-700 flex items-center justify-center h-10 w-10"
          title="แชร์"
        >
          <FaShare size={18} />
        </button>
      )}

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="relative w-full max-w-sm bg-white shadow-2xl p-6 overflow-hidden rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">แชร์ให้เพื่อน</h3>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {shareOptions.map((option) => (
                  <a
                    key={option.name}
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div
                      style={{ backgroundColor: option.color }}
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-transform group-active:scale-90"
                    >
                      {option.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-600">{option.name}</span>
                  </a>
                ))}
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleNativeShare}
                  className="w-full flex items-center justify-center gap-2 p-3 bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors rounded-xl"
                >
                  <FaShare className="text-sm" />
                  แชร์ไปที่อื่น / มือถือ
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full p-2 text-gray-400 hover:text-gray-600 text-sm font-medium"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShareButton;