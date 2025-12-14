
import type { Route } from "./+types/home";
import ImageCarousel from "~/components/ImageCarousel";
import { motion } from "framer-motion";
import AssetCard from "~/components/AssetCard";

export function meta({ }: Route.MetaArgs) {
  return [
    {
      title: "NextFlip Estate | ซื้อ ขาย ฝากขาย คอนโด บ้าน และอสังหาริมทรัพย์"
    },
    {
      name: "description",
      content:
        "NextFlip Estate ผู้เชี่ยวชาญด้านซื้อ ขาย ฝากขาย คอนโด บ้าน และอสังหาริมทรัพย์ ให้คำปรึกษาฟรี ดูแลครบทุกขั้นตอน"
    },
  ];
}



export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="max-h-screen h-screen overflow-clip relative">

        <div className=" bg-black/20 absolute z-10 w-full h-screen flex flex-col justify-end pb-10">
          <div className="container-x w-full flex flex-col space-y-2">
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
              รับซื้อ ฝากขาย อสังหาริมทรัพย์ ทั้วประเทศ
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
              บ้าน คอนโด ขายด่วนหรือฝากขายกับ NextFlip Estate ดูแลครบทุกขั้นตอน ให้คำปรึกษาฟรี ไม่มีค่าใช้จ่าย
            </motion.div>

            {/* <Link
              className="shadow btn-1"
              to="">ปรึกษาตอนนี้</Link> */}
          </div>


        </div>

        <ImageCarousel
          images={[
            "/condo.jpg",
            "https://images.unsplash.com/photo-1629224834618-1cf72b367162?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ]}
        />
        {/* <img src="/condo.jpg"
          className="h-full w-full object-cover"
          alt="nextflip estate hero image" /> */}
      </section>


      {/*  */}

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
            className="md:text-5xl max-w-[80%] text-3xl" id="more">เราช่วยคุณหาคอนโดและบ้านที่ตรงใจ</motion.h2>
          <p className="text-lg max-w-[70%] font-light">ทีมงาน NextFlip Estate เข้าใจความต้องการของคุณ คัดเฉพาะทรัพย์ที่ใช่ พร้อมให้คำแนะนำอย่างมืออาชีพ</p>
        </div>
      </section>


      {/*  */}

      <section className=" w-full bg-zinc-50 min-h-screen items-center py-10">
        <div className="container-x w-full">
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
            className="md:text-4xl max-w-[80%] text-3xl font-light">New properties</motion.h2>
            <div className="grid md:grid-cols-3 gap-5 mt-5">
              {[1,2,3,4,5,6].map((item) => <AssetCard key={item} />)}
            </div>
        </div>
      </section>

    </main>
  );
}
