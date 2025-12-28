
import type { Route } from "./+types/home";
import ImageCarousel from "~/components/ImageCarousel";
import { motion } from "framer-motion";
import AssetCard from "~/components/AssetCard";
import { Link, NavLink } from "react-router";
import { FAQ } from "~/components/FAQ";
import { EXAMPLE_CONDO_LIST, faqItems, TIMELINE_STEPS, WHY_US_LIST } from "~/const/app";
import { BsAsterisk } from "react-icons/bs";
import QuickValuationForm from "~/components/ShortForm";
import Timeline from "~/components/Timeline";
import { FaLine } from "react-icons/fa6";
import { BLOGS } from "./blogs";

export function meta({ }: Route.MetaArgs) {
  return [
    {
      title: "ติดต่อ NextFlip Estate | ปรึกษาซื้อ-ขายอสังหาริมทรัพย์กับ คุณ Bangkaew"
    },
    {
      name: "description",
      content:
        "ติดต่อ NextFlip Estate เพื่อปรึกษาการลงทุนคอนโด บ้าน และอสังหาริมทรัพย์ โทร 086 386 3844 หรือแอด LINE เพื่อรับบริการพาชมโครงการแบบ Exclusive โดยทีมงานมืออาชีพ"
    },
    {
      name: "keywords",
      content: "ติดต่อ NextFlip Estate, เบอร์โทร NextFlip Estate, คุณ Bangkaew อสังหา, ปรึกษาซื้อขายคอนโด, นัดชมคอนโด กรุงเทพ"
    },
    // Open Graph สำหรับแชร์ลง Social Media
    {
      property: "og:title",
      content: "Contact NextFlip Estate | Real Estate Consultant"
    },
    {
      property: "og:description",
      content: "สอบถามข้อมูลอสังหาฯ หรือนัดชมโครงการกับ คุณ Bangkaew ได้ทุกช่องทาง"
    },
    {
      property: "og:type",
      content: "website"
    }
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
              คอนโดเก่า / ขายด่วน / ห้องมีผู้เช่า / สภาพเดิม
            </motion.div>

            {/* <Link
              className="shadow btn-1"
              to="">ประเมินราคาฟรี</Link> */}
          </div>


        </div>

        <ImageCarousel
          images={[
            "/images/condo3.jpg",
            "/images/condo17.jpg",
            "/images/condo15.jpg",
            "/images/condo26.jpg",
            "/images/condo34.jpg",
            "/images/condo33.jpg",
            "/images/condo51.jpg",
            "/images/condo50.jpg",
            "/condo.jpg",

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

      {/* why us */}

      <section className=" bg-zinc-100 mx-auto w-full pb-20">

        <div className="grid md:px-0  pt-10 px-4  container-x mx-auto mb-5">
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
            className="md:text-6xl  my-2  font-light text-5xl ">
            Why Nextflip Estate?
          </motion.h2>
          <div className="text-lg text-black/700 font-light flex items-center">
            ที่ Nextflip Estate เราทำงานด้วยทีมงานมืออาชีพที่พร้อมให้คำปรึกษาและดูแลคุณในทุกขั้นตอน
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-2 pt-10 container-x w-full mx-auto  ">
          <div className="shadow-2xl aspect-[4/3] overflow-clip w-full h-full">
            <img src="/images/award.jpg" alt="codo.jpg" />
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


      {/*  */}

      {/* <section className=" w-full bg-zinc-50 min-h-screen items-center py-10">
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
            className="md:text-4xl md:max-w-[80%] text-3xl pb-4">
            <div className="font-light">คอนโดรีโนเวทพร้อมขาย</div>
            <div className="md:text-5xl text-4xl">NextFlip Selection</div>
          </motion.h2>
          <div className="grid md:grid-cols-3  gap-5 mt-5">
            {EXAMPLE_CONDO_LIST.slice(0,3).map((item) =>
              <AssetCard 
              className="h-[550px]"
              data={item} 
              key={item.id} />)}
          </div>

      

          <div className="flex justify-center">
            <NavLink to="/condominium" className="btn-1 h-fit text-center mt-10 w-fit ">ดูคอนโดเพิ่มเติม</NavLink>
          </div>
        </div>
      </section> */}

      {/*  */}

      <section className="w-full bg-zinc-100 min-h-screen items-center py-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-3 h-auto md:h-[250px] container-x py-10">
          <div className="flex items-center">
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:text-6xl md:max-w-[90%] font-light text-4xl leading-tight"
            >
              Trusted by owners who value results.
            </motion.h2>
          </div>

          <div className="text-lg text-zinc-600 font-light flex items-center leading-relaxed">
            ร่วมเป็นส่วนหนึ่งกับเจ้าของคอนโดที่ไว้วางใจให้เราดูแล
            ด้วยระบบที่โปร่งใสและตรวจสอบได้จริง
            การันตีจากข้อมูลและเอกสารจริงที่ส่งตรงถึงทีมงานของเราทุกวัน
          </div>
        </div>


        {/* card blog */}

        <div className="container-x">
          <div className="h-auto md:h-125 mb-10 bg-white mt-16 group transition shadow-2xl grid md:grid-cols-5 overflow-hidden border border-zinc-100">
            <div className="p-10 md:p-10 md:col-span-2 relative flex flex-col justify-center">
              <h4 className="md:text-5xl text-3xl font-light leading-tight">
                เชื่อมโยงความต้องการ <br />
                <span className="font-medium text-(--primary-color)">ด้วยความไว้วางใจ</span>
              </h4>
              <p className="text-lg mt-6 line-clamp-5 font-light text-zinc-500 leading-relaxed">
                เราสร้างพื้นที่ที่ปลอดภัยสำหรับการส่งต่ออสังหาริมทรัพย์ที่มีค่า
                ไม่ว่าคุณจะเป็นผู้ขายที่ต้องการราคาที่เหมาะสม หรือผู้ซื้อที่มองหาคุณภาพ
                ทีมงาน khain.app คัดกรองทุกเอกสารเพื่อให้ทุกการจับคู่คือความสำเร็จ
              </p>

              {/* button */}
              <div className="mt-10 md:absolute bottom-10 w-full h-fit">
                <NavLink
                  className=" items-center justify-center px-8 py-4 bg-(--primary-color) text-white hover:bg-black
                   transition-all tracking-[0.05em] font-light text-sm"
                  to={"/use-case"}>
                  ดูเคสคอนโดตัวอย่าง
                </NavLink>
              </div>
            </div>

            {/* image - แนะนำให้ใช้รูปที่มีทั้งผู้ซื้อและผู้ขาย หรือรูปบรรยากาศการส่งมอบเอกสาร */}
            <div className="md:col-span-3 min-h-[300px]">
              {/* <img src="/images/client.jpg" // เปลี่ยนเป็นรูปที่เหมาะสม
                className="h-full w-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                alt="Connecting buyers and sellers" /> */}

              <ImageCarousel
                hiddenThumbs
                images={[
                  "/images/client3.jpg",
                  "/images/client.jpg",
                  "/images/client2.jpg",
                  "/images/client4.jpg",
                  "/images/client5.jpg",
                  "/images/client6.jpg",
                  "/images/client7.jpg",
                  "/images/client8.jpg",
                  "/images/client9.jpg",
                  "/images/client10.jpg",
                  "/images/client11.jpg",
                  "/images/client12.jpg",
                  "/images/client13.jpg",
                ]} />
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



      {/* form */}
      <section className="bg-zinc-200 grid md:grid-cols-2 ">
        <div className="max-h-[950px]">
          <video src="/videos/condo-sell.mp4"
            x-webkit-airplay="deny"
            playsInline
            webkit-playsinline="true"
            controls autoPlay muted preload="true"
            className=" h-full w-full object-cover"
          />
        </div>
        <div className="w-full relative z-1">
          <QuickValuationForm />
        </div>
      </section>

      {/* timeline */}
      <section className="bg-zinc-100  py-16">

        <div className="container-x relative z-1">

          <div className="grid px-4  md:grid-cols-2 gap-2 max-w-4xl mx-auto mb-5">
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
              className="md:text-6xl mt-5  font-light text-5xl ">
              ขั้นตอนการขายคอนโดเงินสด
            </motion.h2>
            <div className="text-lg text-black/700 font-light flex items-end">
              ครบทุกกระบวนการในที่เดียว ประเมิน ดูแลเอกสาร และดำเนินการจนจบการขาย
            </div>
          </div>
          <Timeline items={TIMELINE_STEPS} />
        </div>
      </section>


      <section className="container-x pb-24">
        <div className="grid md:grid-cols-2 gap-6 md:gap-3 h-auto md:h-[250px] container-x py-10">
          <div className="flex items-center">
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:text-6xl md:max-w-[90%] font-light text-4xl leading-tight"
            >
              เคล็ดลับเรื่องคอนโด
            </motion.h2>
          </div>
          <div className="text-lg text-zinc-600 font-light flex items-center leading-relaxed">
            อ่านบทความและคำแนะนำจากผู้เชี่ยวชาญของเรา เพื่อช่วยให้คุณตัดสินใจได้อย่างมั่นใจในการซื้อขายคอนโด และอสังหาริมทรัพย์
          </div>
        </div>

        {/* card blog */}

        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {BLOGS.map((blog, index) => {

            return (
              <motion.div
                key={blog.slug}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group bg-white overflow-hidden 
                  shadow-sm hover:shadow-2xl
                   transition-all duration-500 flex flex-col 
                  md:col-span-3 lg:col-span-2
                  }`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden h-64`}>
                  <img
                    loading="lazy"
                    src={"/images/condo5.jpg"} // Replace with real logic
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={blog.title}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 font-light
                   text-xs uppercase tracking-widest">
                    Real Estate
                  </div>
                </div>

                {/* Content Container */}
                <div className={`p-8 flex flex-col justify-between flex-1`}>
                  <div>
                    <time className="text-sm text-zinc-400 font-medium">{blog.date}</time>
                    <h3 className={`text-xl font-semibold mt-3 mb-4 transition-colors`}>
                      <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-zinc-600 font-light leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-2 font-semibold text-zinc-900 group/link"
                    >
                      อ่านเพิ่มเติม
                      <span className="group-hover/link:translate-x-2 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>



      {/* CTA */}

      <section className="py-10 bg-zinc-100">
        <div className="container-x">
          <div className="container-x">
            <div className="min-h-[500px] mb-10 bg-white  mt-16 group transition
           shadow-2xl  grid md:grid-cols-5 overflow-hidden ">
              <div className="p-10 md:col-span-2 relative">
                <h4 className="md:text-4xl text-3xl font-light">อยากขายด่วน? <br />ส่งข้อมูลห้องให้ประเมินฟรี</h4>
                <p className="text-xl mt-5 line-clamp-5 font-light text-zinc-600">
                  ไม่แน่ใจว่าห้องขายได้เท่าไร? ส่งข้อมูลมาให้เราช่วยประเมินก่อนตัดสินใจได้ฟรี
                </p>
                {/* button */}
                <div className="mt-6 gap-2 md:grid-cols-2 flex-col space-x-2 md:grid 
                flex md:w-[90%] h-fit md:absolute bottom-14">
                  <NavLink
                    className="btn-1 group w-full flex-1 justify-center flex"
                    to={"/condo-estimator"}>
                    ประเมินฟรี
                  </NavLink>
                  <NavLink
                    className="btn-line group flex w-full justify-center gap-2 "
                    to={"https://lin.ee/4fkHaEbk"}>
                    <FaLine className="size-[24px]" />
                    <div className="">LINE</div>
                  </NavLink>
                </div>
              </div>
              {/* image */}
              <div className="md:col-span-3">
                <img src="/images/condo54.jpg"
                  className="h-full w-full object-cover"
                  alt="blog" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
