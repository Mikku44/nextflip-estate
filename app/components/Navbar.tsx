
import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router'
import { MENU_APP } from '~/const/app'
import { BurgerButton, MobileDrawer, SearchButton } from './DrawerMenu';
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';
import { PiChatCenteredDots } from 'react-icons/pi';
import { BsPersonBadge } from 'react-icons/bs';

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
        <>
            <MobileDrawer
                open={open}
                onClose={() => setOpen(false)}
                menu={MENU_APP as any}
            />
            <header className={'w-full flex min-h-[58px] z-20 fixed py-2 transition ' + (isScrollDown ? 'bg-white border-b border-zinc-200' : 'bg-transparent ')}>
                <nav className='mc-hd container-x w-full flex justify-items-center items-center'>
                    {/* logo */}
                    <div className="flex items-center gap-5">
                        <Link to="/" className="h-[54px] aspect-square">
                            <img
                                src="/logo.png"
                                alt="Nextflip estate logo"
                                className='h-full w-full object-cover' />
                        </Link>
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
                    <div className="md:grid hidden place-items-end mix-blend-difference col-span-2 w-full">
                        <NavLink
                            className="btn"
                            to={"/condo-estimator"}>
                            ประเมินราคาฟรี

                        </NavLink>
                    </div>

                </nav>

                <div className="md:hidden h-[54px] aspect-square flex items-center gap-2">
                   
                    <SearchButton open={open} onClick={() => { }} />
                    <BurgerButton open={open} onClick={() => setOpen(!open)} />
                </div>
            </header>


        </>
    )
}
