import { TbResize } from "react-icons/tb";
import type { AssetModel } from "~/models/assetModel";
import { formatCurrency } from "~/utils/currencyFormator";

interface AssetCardProps { 
    data : any | AssetModel;
}

export default function AssetCard({ data }: AssetCardProps) {
    return (
        <div className="relative group">
            <div className="absolute pointer-events-none w-full md:block hidden md:scale-[120%] z-5 min-h-95 
        group-hover:opacity-100 opacity-0 shadow-xl duration-300
        h-full bg-black group ">
   {/* badge */}
                {data?.badge && (
                    <AssetBadge badge={data.badge} />
                )}


                <div className="h-[65%] w-full">
                    <img src={data?.imageUrl || "/condo.jpg"}
                        className="w-full h-full object-cover"
                        alt="codo image" />
                </div>
                {/* information */}
                <div className="grid text-white p-4 w-full">
                    <div className="">
                        <div className="text-xl line-clamp-1">{data?.title || "Azura Villa"}</div>
                        <div className=" font-light line-clamp-2">{data?.description || "Lorem, ipsum dolor."}</div>
                    </div>
                    {/* price */}
                    <div className="text-xl grid place-self-end font-medium">{data?.price ? formatCurrency(data.price) : "12M"}</div>
                </div>
                <div className="grid grid-cols-3 text-white px-4 gap-2">
                    <div className="flex gap-3 border-r pr-4 border-zinc-300 items-center ">
                        <TbResize />
                        <p className="text-sm">{data?.area  || "- "}m^2</p>
                    </div>
                    <div className="flex justify-center gap-3 border-r pr-4 border-zinc-300 items-center ">
                        <TbResize />
                        <p className="text-sm">{data?.bedrooms  || "- "} ห้องนอน</p>
                    </div>
                    <div className="flex justify-end gap-3 items-center ">
                        <TbResize />
                        <p className="text-sm">{data?.bathrooms  || "- "} ห้องน้ำ</p>
                    </div>

                </div>
            
            </div>

            {/* original card */}

            
            <div className="w-full min-h-96 h-full bg-white group relative transition-all">

                {/* badge */}
                {data?.badge && (
                    <AssetBadge badge={data.badge} />
                )}


                <div className="h-[65%] w-full">
                    <img src={data?.imageUrl || "/condo.jpg"}
                        className="w-full h-full object-cover"
                        alt="codo image" />
                </div>
                {/* information */}
                <div className="grid  p-4 w-full">
                    <div className="">
                        <div className="text-xl line-clamp-1">{data?.title || "Azura Villa"}</div>
                        <div className=" font-light line-clamp-2">{data?.description || "Lorem, ipsum dolor."}</div>
                    </div>
                    {/* price */}
                    <div className="text-xl grid place-self-end font-medium">{data?.price ? formatCurrency(data.price) : "12M"}</div>
                </div>
                <div className="grid grid-cols-3  px-4 gap-2">
                    <div className="flex gap-3 border-r pr-4 border-zinc-300 items-center ">
                        <TbResize />
                        <p className="text-sm">{data?.area  || "- "}m^2</p>
                    </div>
                    <div className="flex justify-center gap-3 border-r pr-4 border-zinc-300 items-center ">
                        <TbResize />
                        <p className="text-sm">{data?.bedrooms  || "- "} ห้องนอน</p>
                    </div>
                    <div className="flex justify-end gap-3 items-center ">
                        <TbResize />
                        <p className="text-sm">{data?.bathrooms  || "- "} ห้องน้ำ</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

interface AssetBadgeProps {
  badge: 'โครงการใหม่' | 'ขายแล้ว' | 'โครงการยอดนิยม';
}

export function AssetBadge({ badge }: AssetBadgeProps) {
  if (!badge) return null;

  const badgeStyles: Record<AssetBadgeProps['badge'], string> = {
    'โครงการใหม่': 'from-amber-600 to-amber-500',
    'ขายแล้ว': 'from-red-600 to-red-500',
    'โครงการยอดนิยม': 'from-blue-600 to-green-500',
  };

  return (
    <div
      className={`
        absolute top-4 left-0 w-fit
        bg-linear-120 ${badgeStyles[badge]}
        py-2 px-5 text-sm font-light text-white
        rounded-r-full shadow-md
      `}
    >
      {badge}
    </div>
  );
}
