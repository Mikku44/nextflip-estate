import { Link, NavLink } from "react-router";
import { MENU_APP } from "~/const/app";
import {motion} from 'framer-motion';
import { CONTACT_METHODS } from "~/routes/contact";

export default function Footer() {
  return (
    <div className="bg-zinc-100">

      <footer className="relative bg-(--primary-color) min-h-[300px] pt-18">

        {/* Triangle */}
        <div
          className="absolute top-[-1px] left-0 w-full h-24 bg-zinc-100"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          }}
        />
        {/* Content */}
        <section className="relative  z-10 py-16 text-white container-x ">
          <div className="flex md:flex-row flex-col gap-5 md:justify-between mc-hd">
            {/* image */}
            <div className="max-w-[350px]">
              <div className="text-2xl">NEXTFLIP ESTATE</div>
              <div className="text-lg font-light">
                NextFlip Estate รับซื้อคอนโดเงินสด เพื่อช่วยให้เจ้าของขายได้ไว
                ลดความยุ่งยาก และเดินต่อได้อย่างสบายใจ
              </div>
              {/* <img src="/flat-logo.jpg"
              className="w-[150px] mb-5 bg-(--primary-color) mix-blend-color-burn"
              alt="nextflip-estate " /> */}
            </div>

            {/* MENU */}
            <div className=" nav-item font-light">
              <div className="text-base font-semibold mb-2">เมนูทั้งหมด</div>
              <nav className=" grid md:grid-cols-3">
                {MENU_APP.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    // onClick={onClose}
                    className={({ isActive }) =>
                      `text-lg font-medium transition
                 ${isActive ? "text-white" : "text-white/70"}`
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


              <div className="md:col-span-7">
                <div className="flex flex-wrap gap-2 mt-4">
                  {CONTACT_METHODS.map((method, idx) => (
                    <motion.a
                      key={idx}
                      href={method.href}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group  transition-all duration-500 relative overflow-hidden"
                    >
                      {/* Minimal Icon */}
                      <div className={`text-zinc-400 transition-all  duration-300 transform  ${method.color}`}>
                        {method.icon}
                      </div>

                    

                     
                    </motion.a>
                  ))}

                
                </div>
              </div>

            </div>
          </div>

        </section>
      </footer>
      <section className="bg-(--primary-color) py-2">
        <div className=" flex md:flex-row flex-col gap-5 justify-between container-x w-full">
          <div className="font-light  text-white
           text-sm ">
            NextFlip Estate © 2025. สงวนลิขสิทธิ์.
          </div>
          <div className="flex  gap-2 text-white/80 font-light text-sm">
            <Link className="hover:text-white w-fit " to="/privacy">นโยบายความเป็นส่วนตัว</Link>
            <Link className="hover:text-white w-fit " to="/terms">ข้อกำหนดการใช้งาน</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
