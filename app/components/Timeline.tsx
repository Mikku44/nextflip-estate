

type TimelineItem = {
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-px bg-zinc-300" />

      <ul className="space-y-8">
        {items.map((item, index) => (
          <li key={index} className="relative pl-12">
            {/* Dot */}
            <span className="absolute left-0 top-1 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold">
              {index + 1}
            </span>

            {/* Content */}
            <div className="bg-white border border-zinc-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
