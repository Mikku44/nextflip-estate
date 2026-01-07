import { motion } from "framer-motion";
import { IoCallOutline, IoMailOutline, IoLogoYoutube, IoLocationOutline, IoLogoFacebook } from "react-icons/io5";
import { FaLine } from "react-icons/fa";
import ImageCarousel from "~/components/ImageSlider2";
import type { Route } from "./+types/contact";
import { Check } from "lucide-react";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ติดต่อเรา | NextFlip Estate" },
    {
      name: "description",
      content: "ติดต่อ NextFlip Estate ปรึกษาซื้อ-ขายอสังหาริมทรัพย์กับ คุณ Bangkaew โทร 086 386 3844",
    },
  ];
}

export const CONTACT_METHODS = [
  {
    icon: <IoLogoFacebook size={28} />,
    label: "Facebook",
    subtitle: "(ดูเคสจริง & แนวคิดการขายแบบ NextFlip ) ",
    value: "NextFlip Estate",
    href: "https://www.facebook.com/nextflipestate",
    color: "hover:text-blue-600"
  },
  {
    icon: <IoCallOutline size={28} />,
    label: "Phone",
    subtitle: "(สำหรับเคสด่วน / ผ่อนไม่ไหว / ใกล้หลุดจำนอง)",
    value: "086 386 3844",
    href: "tel:0863863844",
    color: "hover:text-amber-600"
  },
  {
    icon: <FaLine size={28} />,
    label: "Line Official",
    subtitle: "(แนะนำสำหรับการประเมินเคสเบื้องต้นส่งรูปห้อง / ภาระผ่อน / เอกสารได้ทันที)",
    value: "@NextFlip",
    href: "https://lin.ee/4fkHaEbk",
    color: "hover:text-green-500"
  },
  {
    icon: <IoMailOutline size={28} />,
    label: "Email",
    subtitle: "(สำหรับการติดต่อเชิงธุรกิจ / นักลงทุน / เอกสาร)",
    value: "pongpan303@gmail.com",
    href: "mailto:pongpan303@gmail.com",
    color: "hover:text-blue-500"
  },
  {
    icon: <IoLogoYoutube size={28} />,
    label: "YouTube",
    subtitle: "(ดูเคสจริง & แนวคิดการขายแบบ NextFlip )",
    value: "NextFlip Estate TV",
    href: "https://youtube.com/channel/UCvirTsG-nwP1D4J6wN7DUmg",
    color: "hover:text-red-600"
  }
];

export default function ContactPage() {
  return (
    <div className="bg-zinc-100 min-h-screen font-sans">

      {/* Hero Section - Same style as Blog */}
      <div className="h-[60vh] overflow-hidden relative">
        <div className="h-full w-full flex items-center justify-center text-center flex-col pb-10 absolute z-10 inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
          <div className="flex md:flex-row flex-col items-end">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold max-w-3xl px-4 drop-shadow-2xl text-white "
            >
              CONTACT US
            </motion.h1>
            <div className="text-white bg-(--primary-color) w-fit px-5">เหตุผลที่ต้องทัก</div>
          </div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light max-w-2xl text-white/80 mt-4 px-6 uppercase tracking-[0.2em]"
          >
            Get in touch with NEXTFLIP ESTATE
          </motion.p>
        </div>
        <ImageCarousel />
      </div>

      <main className="container mx-auto px-4 py-20 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-16 border-b border-zinc-200 pb-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-medium text-zinc-900">เริ่มก้าวแรกของคุณ</h2>
            <p className="text-zinc-800 mt-4 text-lg leading-relaxed">
              ไม่ว่าคุณจะ...
            </p>
            <ul className="text-zinc-800 text-lg">
              <li><Check className="inline" /> ผ่อนไม่ไหว</li>
              <li><Check className="inline" /> อยากขายแต่ไม่อยากลดแรง</li>
              <li><Check className="inline" /> หรือกำลังมองหาทางออกเรื่องภาระหนี้</li>
            </ul>
            <div className="mt-4 text-zinc-800">
              <span className="text-(--primary-color) text-3xl">*</span>
              <span className="text-lg">
                NextFlip Estate พร้อมช่วยวิเคราะห์และวางทางเลือกให้คุณแบบตรงไปตรงมา
                ปรึกษาฟรี ไม่มีข้อผูกมัด
              </span>
            </div>
          </div>
          <div className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
            Available 24/7
          </div>
        </div>

        {/* Contact Grid - Modern Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Left Side: Contact Cards */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CONTACT_METHODS.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.href}
                target="_blank"
                rel="noreferrer"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group bg-white p-10 flex flex-col justify-between h-64 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm border-t border-transparent hover:border-amber-500`}
              >
                <div className={`text-zinc-900 transition-colors duration-300 ${method.color}`}>
                  {method.icon}
                </div>
                <div>

                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{method.label}</span>
                  <p className="text-xl font-semibold mt-1 text-zinc-900">{method.value}</p>
                  <p className="text-sm mt-1 text-zinc-800">{method.subtitle}</p>
                </div>
              </motion.a>
            ))}

            <div className="fb-page w-full" data-href="https://www.facebook.com/nextflipestate"
              data-tabs="timeline" data-small-header="true"
              data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true">
              <blockquote cite="https://www.facebook.com/nextflipestate"
                className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/nextflipestate">NextFlip Estate</a>
              </blockquote>
            </div>
          </div>

          {/* Right Side: Profile Card (Featured style) */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-5 bg-(--primary-color) text-white p-12 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-amber-500/20 transition-all"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-3xl font-bold mb-8">
                N
              </div>
              <h3 className="text-3xl font-bold mb-2 tracking-tight">NEXTFLIP</h3>
              <p className="text-amber-500 uppercase tracking-[0.2em] text-xs font-bold mb-8">Real Estate Consultant</p>

              <div className="my-5 text-zinc-400 font-[300]">
                <p>ผู้เชี่ยวชาญด้านการขายคอนโด</p>
                <div className="">• เคสผ่อนไม่ไหว</div>
                <div className="">• ขายก่อน โอนทีหลัง</div>
                <div className="">• ฟลิปเพื่อเพิ่มมูลค่า</div>
                <div className="mt-4">
                  ทำงานบนหลัก <br />
                  <div className="text-lg">“ขายได้จริง – ไม่ทิ้งภาระไว้กับเจ้าของ”</div>
                </div>
              </div>

              <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
                <div className="flex gap-4">
                  <IoLocationOutline size={20} className="text-amber-500 shrink-0" />
                  <p>Bangkok & Perimeter, Thailand</p>
                </div>
                <p>
                  "หัวใจสำคัญของเราคือการทำให้เรื่องอสังหาฯ กลายเป็นเรื่องง่ายสำหรับคุณ ทีมงาน NextFlip Estate พร้อมพาชมโครงการแบบเจาะลึกทุกวัน"
                </p>
              </div>
            </div>


          </motion.div>
        </div>


        {/* CTA */}

        <section className="mt-20">
          <div className="text-3xl">ไม่แน่ใจว่าควรขายแบบไหนดี?</div>
          <div className="">ทักมาคุยได้ก่อน เราช่วยประเมินทางเลือกให้คุณ โดยไม่ผูกมัดใดๆ</div>
          <div className="mt-10">
            <Link target="_blank"
            className="btn-1 mt-10"
            to="https://lin.ee/4fkHaEbk">
             ปรึกษาฟรีกับ NextFlip
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}