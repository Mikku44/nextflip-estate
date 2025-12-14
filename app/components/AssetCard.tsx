import { TbResize } from "react-icons/tb";


export default function AssetCard() {
  return (
    <div className="relative group">
        <div className="absolute pointer-events-none w-full scale-[120%] z-5 min-h-95 
        group-hover:opacity-100 opacity-0 shadow-xl duration-300
        h-full bg-black group ">
            <div className="h-[65%] w-full">
                <img src="/condo.jpg"
                className="w-full h-full object-cover"
                alt="codo image" />
            </div>
            {/* information */}
            <div className="grid grid-cols-2 p-4 w-full invert-100">
                <div className="">
                    <div className="text-xl">Azura Villa</div>
                    <div className="text-lg font-light">Lorem, ipsum dolor.</div>
                </div>
                {/* price */}
                <div className="text-xl grid place-self-end font-medium">฿12M</div>
            </div>
            <div className="grid grid-cols-3  px-4 gap-2 invert-100">
                <div className="flex gap-3 border-r pr-4 border-zinc-300 items-center ">
                    <TbResize />
                    <p className="text-sm">400 m^2</p>
                </div>
                <div className="flex gap-3 border-r pr-4 border-zinc-300 items-center ">
                    <TbResize />
                    <p className="text-sm">400 m^2</p>
                </div>
                <div className="flex gap-3 items-center ">
                    <TbResize />
                    <p className="text-sm">400 m^2</p>
                </div>
        
            </div>
        </div>
        <div className="w-full min-h-95 h-full bg-white group transition-all">
            <div className="h-[65%] w-full">
                <img src="/condo.jpg"
                className="w-full h-full object-cover"
                alt="codo image" />
            </div>
            {/* information */}
            <div className="grid grid-cols-2 p-4 w-full">
                <div className="">
                    <div className="text-xl">Azura Villa</div>
                    <div className="text-lg font-light">Lorem, ipsum dolor.</div>
                </div>
                {/* price */}
                <div className="text-xl grid place-self-end font-medium">฿12M</div>
            </div>
            <div className="grid grid-cols-3  px-4 gap-2">
                <div className="flex gap-3 border-r pr-4 border-zinc-300 items-center ">
                    <TbResize />
                    <p className="text-sm">400 m^2</p>
                </div>
                <div className="flex gap-3 border-r pr-4 border-zinc-300 items-center ">
                    <TbResize />
                    <p className="text-sm">400 m^2</p>
                </div>
                <div className="flex gap-3 items-center ">
                    <TbResize />
                    <p className="text-sm">400 m^2</p>
                </div>
        
            </div>
        </div>
    </div>
  )
}
