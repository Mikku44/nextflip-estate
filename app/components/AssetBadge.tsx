interface AssetCornerBadgeProps {
    badge: 'โครงการใหม่' | 'ขายแล้ว' | 'โครงการยอดนิยม' | 'พร้อมวางขาย';
}

export function AssetCornerBadge({ badge }: AssetCornerBadgeProps) {
    if (!badge) return null;

    const style: Record<AssetCornerBadgeProps['badge'], string> = {
        'โครงการใหม่': 'from-amber-600 to-amber-500',
        'ขายแล้ว': 'from-red-600 to-red-500',
        'โครงการยอดนิยม': 'from-blue-600 to-green-500',
        'พร้อมวางขาย': 'from-indigo-600 to-green-500',
    };

    return (
        <div
            className={`
         w-fit
        bg-linear-120 ${style[badge]}
        py-2 px-5 text-sm font-light text-white
         shadow-md
      `}
        >
            {badge == "พร้อมวางขาย" ? "ว่างพร้อมขาย" : badge}
        </div>
    );
}
