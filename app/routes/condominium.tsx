import { NavLink } from "react-router";
import type { Route } from "./+types/condominium";
import { motion } from "framer-motion";
import { ArrowDown } from "@untitledui/icons";
import { EXAMPLE_CONDO_LIST } from "~/const/app";
import AssetCard from "~/components/AssetCard";
import { FaFacebook, FaLine } from "react-icons/fa6";
import { useMemo, useState } from "react";
import ImageCarousel from "~/components/ImageSlider2";

type SortType = "highprice" | "lowprice" | "new" | "old";





export function meta({ }: Route.MetaArgs) {
  return [
    {
      title: "คอนโดรีโนเวทพร้อมขาย | NextFlip Estate"
    },
    {
      name: "description",
      content:
        "คอนโดรีโนเวทพร้อมขาย โดย NextFlip Estate คัดคุณภาพ ทำเลดี พร้อมเข้าอยู่ ปรึกษาฟรี ดูแลครบทุกขั้นตอน"
    },
  ];
}



export default function Condominium() {

  const [sort, setSort] = useState<SortType>("new");

  const sortedList = useMemo(() => {
    const list = [...EXAMPLE_CONDO_LIST];

    switch (sort) {
      case "highprice":
        return list.sort((a, b) => b.price - a.price);

      case "lowprice":
        return list.sort((a, b) => a.price - b.price);

      case "new":
        return list.sort((a, b) => Number(b.id) - Number(a.id));

      case "old":
        return list.sort((a, b) => Number(a.id) - Number(b.id));

      default:
        return list;
    }
  }, [sort]);


  return (
    <main className='min-h-screen bg-zinc-100 scroll-smooth'>

      <section className="h-[100vh] overflow-hidden relative">
        <div className="absolute z-1 inset-0 bg-linear-0 flex flex-col justify-center
        from-black/90 to-black/0 h-full w-full p-10">
          <div className="container-x flex items-center flex-col">
            <motion.div
              initial={{
                y: 10, opacity: 0
              }}
              whileInView={{
                y: 0, opacity: 1
              }}

              transition={{
                duration: 0.6
              }}
              className="md:text-5xl text-4xl text-center text-white">คอนโดรีโนเวทพร้อมขาย</motion.div>
            <motion.div
              initial={{
                y: 10, opacity: 0
              }}
              whileInView={{
                y: 0, opacity: 1
              }}

              transition={{
                duration: 0.6,
                delay: 0.2
              }}
              className="md:text-2xl text-xl font-light text-center text-white/80">คัดห้องเอง รีโนเวทเอง พร้อมอยู่</motion.div>

            <div className="grid mt-5 gap-2">
              <NavLink to="#more" className="btn text-center flex items-center justify-center gap-2">
                สำรวจตัวอย่าง
                <ArrowDown className="size-5"></ArrowDown>
              </NavLink>
              {/* <NavLink to="#" className="btn-line text-center">ทัก LINE เพื่อขอรายการล่าสุด</NavLink> */}
            </div>
          </div>
        </div>

        {/* <img src="/images/condo62.jpg"
          className="w-full h-full object-cover"
          alt="condominium by NextFlip Estate" /> */}
        <ImageCarousel images={[
          "/images/condo62.jpg",
          "/images/condo63.jpg",
          "/images/condo64.jpg",
          "/images/condo65.jpg",
        ]} />
      </section>

      {/*  */}

      <section className=" min-h-[50vh] bg-zinc-100  py-10 flex items-center justify-center">
        <div className="container-x w-full items-center grid md:grid-cols-2 h-full gap-3">
          <motion.h2
            initial={{
              y: 10, opacity: 0
            }}
            whileInView={{
              y: 0, opacity: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="md:text-5xl md:max-w-[60%] text-3xl" id="more">คอนโดทั้งหมดที่เราคัดมาแล้ว</motion.h2>
          <p className="text-lg max-w-[70%] font-light">ทุกโครงการผ่านการคัดเลือกและรีโนเวทอย่างพิถีพิถัน เพื่อให้คุณมั่นใจในคุณภาพและความคุ้มค่า</p>
        </div>
      </section>

      {/* filter */}
      <div className="text-xl container-x mb-1">เรียงตาม</div>
      <div className="container-x justify-between flex md:flex-row flex-col md:items-end">
        <div className="flex  gap-2 mb-4 flex-wrap ">
          <button
            onClick={() => setSort("new")}
            className={`px-4 py-2 border ${sort === "new" ? "bg-black text-white" : "bg-zinc-100"
              }`}
          >
            ใหม่ล่าสุด
          </button>
          <button
            onClick={() => setSort("old")}
            className={`px-4 py-2 border ${sort === "old" ? "bg-black text-white" : "bg-zinc-100"
              }`}
          >
            เก่าที่สุด
          </button>
          <button
            onClick={() => setSort("highprice")}
            className={`px-4 py-2 border ${sort === "highprice" ? "bg-black text-white" : "bg-zinc-100"
              }`}
          >
            ราคาสูงสุด
          </button>
          <button
            onClick={() => setSort("lowprice")}
            className={`px-4 py-2 border ${sort === "lowprice" ? "bg-black text-white" : "bg-zinc-100"
              }`}
          >
            ราคาต่ำสุด
          </button>
        </div>

        {/*  */}

        <div className="text-zinc-800 text-lg">คอนโดที่ค้นพบ {sortedList.length} ห้อง</div>
      </div>



      {/* CONDO LIST */}

      <section className="container-x bg-zinc-100">
        <div className="grid md:grid-cols-3 gap-5 mt-5">
          {sortedList.map((item) => (
            <AssetCard
            className="h-[500px]"
            data={item} key={item.id} />
          ))}
        </div>
      </section>



      {/*  */}

      <section className=" min-h-[50vh] py-10 flex items-center justify-center">
        <div className="container-x w-full items-center grid h-full gap-3">
          <motion.h2
            initial={{
              y: 10, opacity: 0
            }}
            whileInView={{
              y: 0, opacity: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="md:text-4xl md:max-w-[50%] text-3xl leading-12 font-light" id="more">
            สนใจห้องไหน? <br />
            <span className="font-normal md:text-5xl ">ส่งชื่อโครงการ/งบประมาณมา</span>
            <br /> เดี๋ยวเราคัดให้</motion.h2>
          <p className="text-lg max-w-[40%] font-light">ทีมงาน NextFlip Estate เข้าใจความต้องการของคุณ คัดเฉพาะทรัพย์ที่ใช่ พร้อมให้คำแนะนำอย่างมืออาชีพ</p>
          <NavLink to="/contact" className="btn-1 h-fit text-center mt-5 w-62.5 ">สอบถามเพิ่มเติม</NavLink>

          <div className="text-zinc-500 text-center  w-62.5">----- หรือ -----</div>

          <div className="flex items-center justify-center gap-2 w-62.5">
            <NavLink target="_blank" to="https://lin.ee/4fkHaEbk"><FaLine className="size-6 hover:text-zinc-700 transition-all" /></NavLink>
            <NavLink target="_blank" to="https://www.facebook.com/nextflipestate"><FaFacebook className="size-6 hover:text-zinc-700 transition-all" /></NavLink>
          </div>
        </div>
      </section>


    </main>
  )
}
