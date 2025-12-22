
import type { Route } from "./+types/home";
import ImageCarousel from "~/components/ImageCarousel";
import { motion } from "framer-motion";
import AssetCard from "~/components/AssetCard";
import { NavLink } from "react-router";
import { FAQ } from "~/components/FAQ";
import { faqItems, TIMELINE_STEPS, WHY_US_LIST } from "~/const/app";
import CardWithOverlay from "~/components/OverlayCard";
import { BsAsterisk } from "react-icons/bs";
import QuickValuationForm from "~/components/ShortForm";
import Timeline from "~/components/Timeline";

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
              รับซื้อคอนโดเงินสด ปิดดีลไว
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
              คอนโดเก่า / ขายด่วน / ห้องมีผู ้เช่า / สภาพเดิม
            </motion.div>

            {/* <Link
              className="shadow btn-1"
              to="">ประเมินราคาฟรี</Link> */}
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
            className="md:text-5xl md:max-w-[80%] text-3xl" id="more">เราช่วยคุณหาคอนโดและบ้านที่ตรงใจ</motion.h2>
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
            className="md:text-4xl md:max-w-[80%] text-3xl font-light">New properties</motion.h2>
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {["โครงการใหม่", "ขายแล้ว", "โครงการยอดนิยม", "", ""].map((item) => <AssetCard data={{ badge: item }} key={item} />)}
          </div>
        </div>
      </section>

      {/*  */}

      <section className="w-full bg-zinc-100 min-h-screen items-center py-10">
        <div className="grid md:grid-cols-2 gap-3 h-[250px]  container-x">
          <div className="flex items-center">
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
              className="md:text-6xl md:max-w-[80%] font-light text-5xl ">See what offer and how it works</motion.h2>

          </div>

          <div className="text-lg text-black/700 font-light flex items-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Maxime impedit exercitationem, placeat explicabo asperiores quia
            dicta adipisci doloremque praesentium quam.
          </div>


        </div>


        {/* card blog */}

        <div className="container-x">
          <div className="h-[500px] mb-10 bg-white  mt-16 group transition
           shadow-2xl  grid md:grid-cols-5 overflow-hidden ">
            <div className="p-10 md:col-span-2 relative">
              <h4 className="md:text-5xl text-3xl line-clamp-2 font-light">Blog Title Lorem, ipsum dolor.</h4>
              <p className="text-xl mt-5 line-clamp-5 font-light text-zinc-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem in sed
                similique aliquid voluptates atque iusto exercitationem sapiente quos?
              </p>
              {/* button */}
              <div className="mt-6 w-full h-fit md:absolute bottom-14">
                <NavLink
                  className="btn-1 group "
                  to={"#"}>
                  อ่านเพิ่มเติม
                </NavLink>
              </div>
            </div>
            {/* image */}
            <div className="md:col-span-3">
              <img src="/condo.jpg"
                className="h-full w-full object-cover"
                alt="blog" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}

      <section className="bg-zinc-100 pb-24">
        <div className="flex md:flex-row flex-col gap-10">
          <div className="container-x">
            <div className="grid md:grid-cols-2 max-w-3xl mx-auto mb-5">
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

      {/* why us */}

      <section className=" bg-zinc-100 mx-auto w-full pb-52">

        <div className="grid px-4 md:grid-cols-2 max-w-3xl mx-auto mb-5">
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
            className="md:text-6xl   mx-auto my-5  font-light text-5xl ">
            Why Nextflip Estate?
          </motion.h2>
          <div className="text-lg text-black/700 font-light flex items-center">
            ที่ Nextflip Estate เราทำงานด้วยทีมงานมืออาชีพที่พร้อมให้คำปรึกษาและดูแลคุณในทุกขั้นตอน
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-2 pt-10 container-x w-full mx-auto  ">
          <div className="shadow-2xl">
            <img src="/condo.jpg" alt="codo.jpg" />
          </div>
          <div className=" flex flex-col w-full justify-between">
            {WHY_US_LIST.map((item) =>
              <div key={item.title}
                className="flex items-center shadow-2xl p-4 gap-2 w-full bg-white">
                <BsAsterisk className="mt-1 text-green-700"></BsAsterisk>
                <div className="">
                  <div className="">{item.title}</div>
                  <div className="text-sm opacity-70">{item.desc}</div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* form */}
      <section className="bg-zinc-200 relative py-16">
        <img src="/images/condo1.jpg"
          className="absolute h-full w-full object-cover top-0 left-0 opacity-30"
        />
        <div className="container-x relative z-1">
          <QuickValuationForm />
        </div>
      </section>

      {/* timeline */}
      <section className="bg-zinc-100  py-16">

        <div className="container-x relative z-1">
          

          <Timeline items={TIMELINE_STEPS} />
        </div>
      </section>

    </main>
  );
}
