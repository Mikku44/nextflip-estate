import { NavLink } from "react-router";
import { useEffect } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

interface MobileDrawerProps {
    open: boolean;
    onClose: () => void;
    menu: { label: string; href: string }[];
}

export function MobileDrawer({ open, onClose, menu }: MobileDrawerProps) {
    // lock body scroll
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity
          ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />

            {/* Drawer */}
            <aside
                className={`fixed left-0 top-0 z-99 h-full w-[80%] max-w-sm
          bg-white p-6 transition-transform duration-300
          ${open ? "-translate-x-0" : "-translate-x-full"}`}
            >
                <nav className="mt-12 flex flex-col space-y-6">
                    {menu.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.href}
                            onClick={onClose}
                            className={({ isActive }) =>
                                `text-lg font-medium transition
                 ${isActive ? "text-black" : "text-neutral-500"}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    {/* <div className="w-full place-items-end mix-blend-difference opacity-80">
                        <NavLink
                            className="btn w-full"
                             onClick={onClose}
                            to={"/contact"}>
                            ประเมินราคาฟรี

                        </NavLink>
                    </div> */}

                </nav>


            </aside>
        </>
    );
}


interface BurgerButtonProps {
    open: boolean;
    onClick: () => void;
}

export function BurgerButton({ open, onClick }: BurgerButtonProps) {
    return (
        <button
            onClick={onClick}
            aria-label="Toggle menu"
            className="relative z-50 flex text-white mix-blend-difference h-10 w-10 items-center justify-center lg:hidden "
        >
            <RiMenu2Fill className="size-8" />
        </button>
    );
}
export function SearchButton({ open, onClick }: BurgerButtonProps) {
    return (
        <button
            onClick={onClick}
            aria-label="Toggle menu"
            className="relative z-50 flex text-white mix-blend-difference h-10 w-10 items-center justify-center lg:hidden "
        >
            <BiSearch className="size-8" />
        </button>
    );
}
