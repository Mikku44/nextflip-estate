
import { AnimatePresence, useScroll, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigation } from 'react-router'
import { MENU_APP } from '~/const/app'
import { BurgerButton, MobileDrawer } from './DrawerMenu';


export default function Navbar() {
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [open, setOpen] = useState(false);
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

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

            {isLoading && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[999] flex items-end justify-center pointer-events-none"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 16 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="mb-6 flex items-center gap-3 rounded-full border border-zinc-200 bg-white/90 px-5 py-3 shadow-sm backdrop-blur"
                        >
                            {/* Dots */}
                            <div className="flex items-center gap-1">
                                {[0, 1, 2].map((i) => (
                                    <motion.span
                                        key={i}
                                        className="size-1.5 rounded-full bg-zinc-400"
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.15,
                                            ease: "easeInOut",
                                        }}
                                    />
                                ))}
                            </div>

                            <span className="text-sm font-medium tracking-wide text-zinc-600">
                                กำลังโหลด
                            </span>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

            )}
            <MobileDrawer
                open={open}
                onClose={() => setOpen(false)}
                menu={MENU_APP as any}
            />
            <header className={'w-full flex min-h-[58px] z-50 fixed py-2 transition ' + (isScrollDown ? 'bg-white border-b border-zinc-200' : 'bg-transparent ')}>
                <nav className='mc-hd container-x w-full flex justify-items-center items-center'>
                    {/* logo */}
                    <div className="flex items-center gap-5">
                        <Link to="/" className="h-17 aspect-square">
                            <img
                                src="/logo.png"
                                alt="Nextflip estate logo"
                                className='h-full w-full object-cover' />
                        </Link>
                        {/* menu */}
                        <div className="w-full justify-center text-[17px] nav-item text-white mix-blend-difference font-light hidden lg:flex gap-6">
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

                    {/* <SearchButton open={open} onClick={() => { }} /> */}
                    <BurgerButton open={open} onClick={() => setOpen(!open)} />
                </div>
            </header>


        </>
    )
}
