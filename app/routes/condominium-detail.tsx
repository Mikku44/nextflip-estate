import ImageCarousel from "~/components/ImageCarousel";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Route } from "./+types/condominium-detail";
import { BsAsterisk } from "react-icons/bs";
import { Link, NavLink } from "react-router";
import { FaLine } from "react-icons/fa6";
import { FAQ } from "~/components/FAQ";
import { formatCurrency } from "~/utils/currencyFormator";
import {
  FaBuilding, FaLayerGroup, FaDoorOpen, FaRulerCombined,
  FaCompass, FaMoneyBillWave, FaDroplet, FaCar, FaMotorcycle
} from "react-icons/fa6";
import ShareButton from "~/components/Sharebutton";
import { useRef } from "react";

export const faqItems = [
  {
    question: "ห้องนี้โอนได้เมื่อไหร่?",
    answer: `
สามารถโอนได้ทันทีหลังตกลงราคา
    `,
  },
  {
    question: "มีผู้เช่าอยู่หรือไม่?",
    answer: `
ปัจจุบันมีผู้เช่า
สามารถรับค่าเช่าต่อได้
    `,
  },
  {
    question: "ต่อรองราคาได้หรือไม่?",
    answer: `
พิจารณาตามเงื่อนไข
และความพร้อมของผู้ซื้อ
    `,
  },
];



export function meta({ data }: Route.MetaArgs) {
  const asset = data?.asset;

  const title = asset
    ? `${asset.title} | ราคา ${asset.price.toLocaleString()} บาท | NextFlip Estate`
    : "รายละเอียดคอนโด | NextFlip Estate";

  const description = asset
    ? `${asset.title} ขนาด ${asset.area} ตร.ม. ${asset.bedrooms} ห้องนอน ${asset.bathrooms} ห้องน้ำ ราคา ${asset.price.toLocaleString()} บาท ทำเลดี เดินทางสะดวก`
    : "รายละเอียดคอนโด ทำเลดี พร้อมอยู่ โดย NextFlip Estate";

  return [
    { title },
    { name: "description", content: description },

    /* ---------- Open Graph ---------- */
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:image", content: asset?.imageUrl ?? "/og-condo.jpg" },

    /* ---------- Twitter ---------- */
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: asset?.imageUrl ?? "/og-condo.jpg" },
  ];
}


export default function CondominiumDetail() {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // scale from 1 to 1.1
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  return (
    <main className="min-h-[150vh] bg-zinc-100">

      <section className="max-h-screen h-[500px] overflow-clip relative">

        <div className=" bg-black/20 absolute z-10 w-full h-[500px] flex flex-col justify-end pb-10">
          <div className="container-x w-full flex flex-col space-y-2">

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
              className="w-fit rounded-xl bg-white md:text-5xl 
              max-w-xl py-2 px-4 drop-shadow-2xl  text-(--primary-color) leading-12">
              <div className="text-sm">ราคาโปรโมชั่น</div>
              <div className="text-4xl ">{formatCurrency(10000)}</div>
            </motion.div>
            <motion.h1
              initial={{
                y: 10, opacity: 0
              }}
              whileInView={{
                y: 0, opacity: 1
              }}

              transition={{
                duration: 0.6
              }}
              className="text-4xl md:text-5xl max-w-xl drop-shadow-2xl  text-white leading-12">
              คอนโดทำเลดี ใกล้ BTS XYZ
            </motion.h1>

            <motion.div
              initial={{
                y: 10, opacity: 0
              }}
              whileInView={{
                y: 0, opacity: 1
              }}

              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="text-lg font-light max-w-xl text-white/70">
              ถานที่ 35 ตร.ม. 1 ห้องนอน 1 ห้องน้ำ ราคา 1,500,000 บาท
            </motion.div>




            {/* <Link
              className="shadow btn-1"
              to="">ประเมินราคาฟรี</Link> */}
          </div>


        </div>

        <ImageCarousel
          className="h-[500px] max-h-[500px]"
          images={[
            "/images/condo3.jpg",
            "/images/condo17.jpg",
            "/images/condo15.jpg",
            "/images/condo26.jpg",
            "/condo.jpg",

          ]}
        />
        {/* <img src="/condo.jpg"
          className="h-full w-full object-cover"
          alt="nextflip estate hero image" /> */}
      </section>


      {/* cta */}

      <section className=" min-h-[50vh] bg-zinc-200  py-10 flex items-center justify-center">
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
            className="md:text-5xl md:max-w-[80%] text-3xl" id="more">สนใจห้องนี้? <br />ประเมินราคาฟรี <br /> ไม่มีค่าใช้จ่าย</motion.h2>
          <p className="text-lg max-w-[70%] font-light">
            ทีมงาน NextFlip Estate เข้าใจความต้องการของคุณ คัดเฉพาะทรัพย์ที่ใช่ พร้อมให้คำแนะนำอย่างมืออาชีพ
            <div className="flex flex-col max-w-[250px] gap-2 mt-4">
              <NavLink
                target="_blank"
                className="btn-line w-full  flex justify-center items-center gap-4"
                to={"https://lin.ee/4fkHaEbk"}>
                <div className=""><FaLine className="size-8" /></div>
                <div className="">สนใจห้องนี้</div>
              </NavLink>
              {/* share */}
              <ShareButton title={`${"Nextflip Estate Condo renovate"} สนใจห้องนี้? ประเมินราคาฟรี ไม่มีค่าใช้จ่าย`} />
            </div>
          </p>

        </div>
      </section>


      {/* basic information */}
      <section className="pt-12 bg-zinc-50 relative">

        <div className="container-x">
          <h2 className="text-2xl mb-8 text-zinc-800">
            ข้อมูลห้อง
          </h2>

          <div className="relative overflow-hidden h-[500px]">

            {/* image */}
            <div className="absolute inset-0 z-0">
              <motion.img
                ref={ref}
                style={{ scale }} src="/images/condo2.jpg" alt="condo" className="w-full h-full object-cover" />
            </div>

            <section className="max-w-[500px] w-full absolute z-5 bottom-0 left-0 m-5 bg-white shadow-2xl p-5">
              {/* Project Name */}
              <div className="flex items-center justify-between  pb-3">
                <div className="flex flex-col ">
                  <div className="">ชื่อโครงการ</div>
                  <span className="font-medium text-3xl text-(--primary-color)" >Condominum XYZ</span>
                </div>
              </div>

              {/* Building */}
              <div className="flex items-center justify-between  pb-3">
                <div className="flex items-center gap-3 ">
                  <FaBuilding className="text-(--primary-color" />
                  <span className="font-medium">อาคาร</span>
                </div>
                <span className="font-light text-zinc-700 ">value</span>
              </div>

              {/* Floor */}
              <div className="flex items-center justify-between  pb-3">
                <div className="flex items-center gap-3 ">
                  <FaLayerGroup className="text-(--primary-color" />
                  <span className="font-medium">ชั้น</span>
                </div>
                <span className="font-light text-zinc-700 ">value</span>
              </div>

              {/* Room Number */}
              <div className="flex items-center justify-between  pb-3">
                <div className="flex items-center gap-3 ">
                  <FaDoorOpen className="text-(--primary-color" />
                  <span className="font-medium">เลขที่ห้อง</span>
                </div>
                <span className="font-light text-zinc-700 ">value</span>
              </div>

              {/* Size */}
              <div className="flex items-center justify-between  pb-3">
                <div className="flex items-center gap-3 ">
                  <FaRulerCombined className="text-(--primary-color" />
                  <span className="font-medium">ขนาด</span>
                </div>
                <span className="font-light text-zinc-700 ">value</span>
              </div>

              {/* Balcony Direction */}
              <div className="flex items-center justify-between  pb-3">
                <div className="flex items-center gap-3 ">
                  <FaCompass className="text-(--primary-color" />
                  <span className="font-medium">ทิศของระเบียงห้อง</span>
                </div>
                <span className="font-light text-zinc-700 ">value</span>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="py-12 bg-zinc-50">
        <div className="container-x">
          <h2 className="text-2xl mb-8 text-zinc-800">
            ค่าใช้จ่ายห้อง
          </h2>

          <div className="relative">


            {/* cost */}
            <div className="grid md:grid-cols-2 gap-y-6 gap-x-16">



              {/* Common Fee */}
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-3 ">
                  <FaMoneyBillWave className="text-green-500" />
                  <span className="font-medium">ค่าส่วนกลาง</span>
                </div>
                <span className="font-light text-zinc-700 ">value</span>
              </div>

              {/* Water Rate */}
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-3 ">
                  <FaDroplet className="text-green-500" />
                  <span className="font-medium">ค่าน้ำ</span>
                </div>
                <span className="font-light text-zinc-700 ">value</span>
              </div>

              {/* Car Parking */}
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-3 ">
                  <FaCar className="text-green-500" />
                  <span className="font-medium">ค่าที่จอดรถยนต์ต่อเดือน</span>
                </div>
                <span className="font-light text-zinc-700 ">value</span>
              </div>

              {/* Bike Parking */}
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-3 ">
                  <FaMotorcycle className="text-green-500" />
                  <span className="font-medium">ค่าที่จอดมอเตอร์ไซต์ต่อเดือน</span>
                </div>
                <span className="font-light text-zinc-700 ">value</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* furniture */}
      <section className="py-12 bg-zinc-50">
        <div className="container-x">
          <h2 className="text-2xl font-semibold mb-6">
            เฟอร์นิเจอร์ / เครื่องใช้ไฟฟ้า
          </h2>

          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <li><BsAsterisk className="text-green-500" /> เตียง + ที่นอน</li>
            <li><BsAsterisk className="text-green-500" /> โซฟา</li>
            <li><BsAsterisk className="text-green-500" /> ตู้เสื้อผ้า</li>
            <li><BsAsterisk className="text-green-500" /> แอร์</li>
            <li><BsAsterisk className="text-green-500" /> ตู้เย็น</li>
            <li><BsAsterisk className="text-green-500" /> เครื่องซักผ้า</li>
          </ul>
        </div>
      </section>

      {/* hightlight */}

      <section className="py-12 bg-zinc-100">
        <div className="container-x">
          <h2 className="text-2xl font-semibold mb-6">จุดเด่นห้อง</h2>

          <div className="grid md:grid-cols-2 md:gap-4 gap-2">
            {[
              "รีโนเวทห้องน้ำใหม่",
              "ครัวบิวท์อิน",
              "เปลี่ยนพื้นใหม่",
              "ระบบไฟใหม่ทั้งห้อง",
              "ห้องสภาพพร้อมอยู่",
              "วิวโล่ง ไม่บล็อก",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 "
              >
                <span className="text-green-500"><BsAsterisk /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* before & after   */}

      <section className="py-12 bg-white">
        <div className="container-x">
          <h2 className="text-2xl font-semibold mb-6">Before – After</h2>

          <div className="grid md:grid-cols-2">
            <div className="relative">
              <div className="bg-white px-5 translate-y-4 py-1 absolute z-1">Before</div>
              <img
                src="/images/condo2.jpg"
                className="object-cover"
                alt="before"
              />
            </div>
            <div className="relative">
              <div className="bg-white px-5 translate-y-4 py-1 absolute z-1">After</div>
              <img
                src="/images/condo24.jpg"
                className="object-cover"
                alt="after"
              />
            </div>
          </div>
        </div>
      </section>
      {/* location */}
      <section className="py-12 bg-zinc-100">
        <div className="container-x">
          <h2 className="text-2xl font-semibold mb-6">ทำเล & แผนที่</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <iframe
              className="w-full h-[300px]"
              loading="lazy"
              src="https://www.google.com/maps?q=bangkok&output=embed"
            />

            <ul className="space-y-3">
              <li className="flex items-center gap-2"><BsAsterisk className="text-green-500" /> ใกล้ BTS / MRT</li>
              <li className="flex items-center gap-2"><BsAsterisk className="text-green-500" /> ใกล้ห้างสรรพสินค้า</li>
              <li className="flex items-center gap-2"><BsAsterisk className="text-green-500" /> เดินทางเข้าเมืองสะดวก</li>
              <li className="flex items-center gap-2"><BsAsterisk className="text-green-500" /> ย่านอยู่อาศัยเงียบสงบ</li>
            </ul>
          </div>
        </div>
      </section>
      {/* for */}
      <section className="py-12 bg-white">
        <div className="container-x">
          <h2 className="text-2xl font-semibold mb-6">เหมาะกับใคร</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-zinc-200 border">
              <h3 className="font-semibold mb-2">อยู่อาศัยเอง</h3>
              <p className="text-zinc-600">
                ห้องสภาพพร้อมอยู่ ไม่ต้องรีโนเวทเพิ่ม
              </p>
            </div>

            <div className="p-6 border-zinc-200 border">
              <h3 className="font-semibold mb-2">นักลงทุน</h3>
              <p className="text-zinc-600">
                Yield ประมาณการ 4–6% ต่อปี (ขึ้นกับราคาปล่อยเช่า)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="bg-zinc-100 pb-24">
        <div className="flex md:flex-row flex-col gap-10">
          <div className="container-x">
            <div className="grid md:grid-cols-2 container-x mx-auto mb-5">
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
                className="md:text-6xl  mx-auto my-5  font-light text-5xl ">
                Frequency Asked Questions
              </motion.h2>
              <div className="text-lg text-black/700 font-light flex items-center">
                คำถามที่พบบ่อยเกี่ยวกับการขายคอนโดและบริการของ NextFlip Estate
              </div>
            </div>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>
      {/* CTA */}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-50 shadow-md md:hidden z-50">
        <div className="flex">
          <a
            href="tel:0863863844"
            className="flex-1 py-4 text-center font-semibold"
          >
            โทร
          </a>
          <a
            target="_blank"
            href="https://lin.ee/4fkHaEbk"
            className="flex-1 py-4 text-center font-semibold bg-green-500 text-white"
          >
            LINE
          </a>
        </div>
      </div>

    </main>
  )
}
