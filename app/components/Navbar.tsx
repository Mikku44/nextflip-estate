
import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router'
import { MENU_APP } from '~/const/app'

export default function Navbar() {
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [open, setOpen] = useState(false);

    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.on("change", (y) => {
            if (y > 300) {
                !isScrollDown && setIsScrollDown(true)
            } else {
                setIsScrollDown(false)
            }
        });
    }, [scrollY]);

    return (
        <header className={'w-full min-h-[58px] z-20 fixed py-2 transition '+ (isScrollDown ? 'bg-white border-b border-zinc-200' : 'bg-transparent ') }>
            <nav className='mc-hd container-x  flex justify-items-center items-center'>
                {/* logo */}
                <div className="flex items-center gap-5">
                    <div className="h-[54px] aspect-square">
                        <img
                            src="/logo.png"
                            alt="Nextflip estate logo"
                            className='h-full w-full object-cover' />
                    </div>
                    {/* menu */}
                    <div className="w-full justify-center text-[14px] nav-item text-white mix-blend-difference font-light hidden lg:flex gap-6">
                        {MENU_APP.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center">
                                <NavLink

                                    to={item.href}
                                    className={({ isActive, isPending }) =>
                                        `gap-2 px-2 pb-3 whitespace-nowrap flex items-center ${isPending
                                            ? "pending"
                                            : isActive
                                                ? "nav-lnk-active"
                                                : "nav-lnk"}`}>
                                    {item.label}
                                </NavLink>
                                <div className="px-2 bg-(--primary-color) text-[10px] text-center w-fit">{item?.badge}</div>
                            </div>
                        ))}
                    </div>

                </div>
                {/* action buttons */}
                <div className="grid place-items-end mix-blend-difference col-span-2 w-full">
                    <NavLink
                        className="btn"
                        to={"#"}>
                        ปรึกษาตอนนี้
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}
