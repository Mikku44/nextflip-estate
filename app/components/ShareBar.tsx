import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaLine,
  FaXTwitter,
  FaLink,
} from "react-icons/fa6";
import { toast } from "sonner";

interface ShareBarProps {
  url?: string;
  title?: string;
}

export default function ShareBar({
  url: initialUrl = "",
  title = "Check out this condo",
}: ShareBarProps) {
  const [shareUrl, setShareUrl] = useState(initialUrl);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(initialUrl || window.location.href);
    }
  }, [initialUrl]);

  const items = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Line",
      icon: <FaLine />,
      link: `https://lineit.line.me/share/ui?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "X",
      icon: <FaXTwitter />,
      link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(title)}`,
    },
  ];

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    toast("คัดลอกลิงก์เรียบร้อยแล้ว");
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs uppercase tracking-widest text-zinc-500">
        Share
      </span>

      {items.map((item) => (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 w-9 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-900 hover:text-white transition"
          title={item.name}
        >
          {item.icon}
        </a>
      ))}

      <button
        onClick={copyLink}
        className="h-9 w-9 flex items-center cursor-pointer justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-900 hover:text-white transition"
        title="Copy link"
      >
        <FaLink />
      </button>
    </div>
  );
}
