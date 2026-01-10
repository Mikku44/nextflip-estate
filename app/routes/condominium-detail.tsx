import ImageCarousel from "~/components/ImageCarousel";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Route } from "./+types/condominium-detail";
import { BsAsterisk } from "react-icons/bs";
import { Link, NavLink, useLoaderData } from "react-router";
import { FaLine } from "react-icons/fa6";
import { FAQ } from "~/components/FAQ";
import { formatCurrency } from "~/utils/currencyFormator";
import {
  FaBuilding, FaLayerGroup, FaDoorOpen, FaRulerCombined,
  FaCompass, FaMoneyBillWave, FaDroplet, FaCar, FaMotorcycle
} from "react-icons/fa6";
import ShareButton from "~/components/Sharebutton";
import { useRef } from "react";
import { assetService } from "~/services/assetService";
import type { AssetDetailModel } from "~/models/assetModel";
import { BiArea, BiSolidCategoryAlt } from "react-icons/bi";
import { RiSofaFill } from "react-icons/ri";
import { AssetBadge } from "~/components/AssetCard";
import { AssetCornerBadge } from "~/components/AssetBadge";

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
ปัจจุบันไม่มีผู้เช่า
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

export async function loader({ params }: Route.LoaderArgs) {
  const asset = await assetService.getBySlug(params.slug);

  if (!asset) {
    throw new Response("Not Found", { status: 404 });
  }

  // ดึงทรัพย์สินที่เกี่ยวข้อง (Related Assets)
  const all = await assetService.getAll(50);
  const related = all.assets.filter((item) => item.slug !== params.slug);

  return {
    asset: asset as AssetDetailModel,
    relatedAssets: related.slice(0, 3),
  };
}



export function meta({ loaderData }: Route.MetaArgs) {
  const asset = loaderData?.asset;

  // Get first image from the images string
  const firstImage = asset?.images?.[0] || "/images/condo2.jpg";

  const title = asset
    ? `${asset.title} | NextFlip Estate`
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
    { property: "og:image", content: firstImage },

    /* ---------- Twitter ---------- */
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: firstImage },
  ];
}

export default function CondominiumDetail() {
  const { asset } = useLoaderData<typeof loader>();

  const ref = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scroll2 } = useScroll({
    target: ref2,
  });

  const displayValue = (value: any, suffix = "") =>
    value === null || value === undefined || value === ""
      ? "-"
      : `${value}${suffix}`;


  // scale from 1 to 1.1
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const scale2 = useTransform(scroll2, [0, 5], [1, 1.4]);
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
              <div className="text-4xl ">{formatCurrency(asset.price)}</div>
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
              {asset.title}
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
              {asset.description || `ขนาด ${asset.area} ตร.ม. ${asset.bedrooms} ห้องนอน ${asset.bathrooms} ห้องน้ำ`}
            </motion.div>

          </div>

        </div>

        <ImageCarousel
          className="h-[500px] max-h-[500px]"
          images={asset.images}
        />
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
              <ShareButton title={`แชร์ห้องนี้`} />
            </div>
          </p>

        </div>
      </section>


      {/* basic information */}
      <section className="pt-12 bg-zinc-50 relative">
        <div className="container-x">
          <h2 className="text-xl md:text-2xl flex gap-3 w-full mb-6 md:mb-8 text-zinc-800">
            <div className="">ข้อมูลห้อง</div>
           <AssetCornerBadge badge={asset.badge as any} />
          </h2>



          <div className="relative overflow-hidden h-[380px] sm:h-[420px] md:h-[500px]">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <motion.img
                ref={ref}
                style={{ scale }}
                src={asset.images?.[0] || "/images/condo2.jpg"}
                alt="condo"
                className="w-full h-full object-cover"
              />
              {/* overlay for readability */}
              <div className="absolute inset-0 bg-black/20 md:bg-black/10" />
            </div>

            {/* Info Card */}
            <section
              className="
          absolute z-10
          bottom-0 left-0
          w-full
          md:max-w-[420px]
          bg-white
          p-4 md:p-5
          shadow-2xl
          md:m-5
          
        "
            >


              {/* Project Name */}
              <div className="pb-3">
                <div className="text-xs text-zinc-500">ชื่อโครงการ</div>
                <span className="font-semibold text-xl md:text-2xl text-(--primary-color)">
                  {asset.title}
                </span>
              </div>

              <div className="space-y-2 text-sm md:text-base">
                {/* Building */}
                {asset.buildingName && (
                  <div className="flex items-start gap-2 w-full justify-between">
                    <div className="flex items-center gap-2">
                      <FaBuilding className="text-(--primary-color)" />
                      <span className="font-medium">อาคาร</span>
                    </div>
                    <span className="text-zinc-700 max-w-[200px]">{asset.buildingName}</span>
                  </div>
                )}

                {/* Floor */}
                {asset.floor && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaLayerGroup className="text-(--primary-color)" />
                      <span className="font-medium">ชั้น</span>
                    </div>
                    <span className="text-zinc-700">{asset.floor}</span>
                  </div>
                )}

                {/* Room Number */}
                {asset.roomNumber && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaDoorOpen className="text-(--primary-color)" />
                      <span className="font-medium">เลขที่ห้อง</span>
                    </div>
                    <span className="text-zinc-700">{asset.roomNumber}</span>
                  </div>
                )}

                {/* Size */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaRulerCombined className="text-(--primary-color)" />
                    <span className="font-medium">ขนาด</span>
                  </div>
                  <span className="text-zinc-700">
                    {asset.size} ตร.ว.
                  </span>
                </div>
                {asset.area > 0 && <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BiArea className="text-(--primary-color)" />
                    <span className="font-medium">พื้นที่ใช้สอย</span>
                  </div>
                  <span className="text-zinc-700">
                    {asset.area} ตร.ม.
                  </span>
                </div>}

                {/* Type */}
                {asset.type && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BiSolidCategoryAlt className="text-(--primary-color)" />
                      <span className="font-medium">ชนิดห้อง</span>
                    </div>
                    <span className="text-zinc-700">{asset.type}</span>
                  </div>
                )}

                {/* Direction */}
                {asset.direction && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaCompass className="text-(--primary-color)" />
                      <span className="font-medium">ทิศของระเบียง</span>
                    </div>
                    <span className="text-zinc-700">{asset.direction}</span>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </section>


      {/* cost per room */}
      {(
        <section className="py-12 bg-zinc-50">
          <div className="container-x h-[350px] flex flex-col justify-center w-full" >
            <h2 className="text-2xl mb-8 text-zinc-800 font-bold">
              ค่าใช้จ่ายห้อง
            </h2>

            <div className="relative">
              <div className="grid md:grid-cols-2 gap-y-6 gap-x-16">

                {/* Common Fee */}
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-3">
                    <FaMoneyBillWave className="text-green-500" />
                    <span className="font-medium">ค่าส่วนกลาง</span>
                  </div>
                  <span className="font-light text-zinc-700">
                    {asset?.commonFree
                      ? `${formatCurrency(asset.commonFree)}/เดือน`
                      : "-"}
                  </span>
                </div>

                {/* Water Rate */}
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-3">
                    <FaDroplet className="text-green-500" />
                    <span className="font-medium">ค่าน้ำ</span>
                  </div>
                  <span className="font-light text-zinc-700">
                    {displayValue(asset?.waterBill, " บาท/หน่วย")}
                  </span>
                </div>

                {/* Car Parking */}
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-3">
                    <FaCar className="text-green-500" />
                    <span className="font-medium">ค่าที่จอดรถยนต์ต่อเดือน</span>
                  </div>
                  <span className="font-light text-zinc-700">
                    {asset?.parkingFee
                      ? `${formatCurrency(asset.parkingFee)}/เดือน`
                      : "-"}
                  </span>
                </div>

                {/* Bike Parking */}
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-3">
                    <FaMotorcycle className="text-green-500" />
                    <span className="font-medium">ค่าที่จอดมอเตอร์ไซต์ต่อเดือน</span>
                  </div>
                  <span className="font-light text-zinc-700">
                    {asset?.motorBikeFee
                      ? `${formatCurrency(asset.motorBikeFee)}/เดือน`
                      : "-"}
                  </span>
                </div>

              </div>
            </div>

          </div>
        </section>
      )}

      <section className="max-h-[500px] overflow-hidden flex flex-end">
        <motion.img
          ref={ref2}
          style={{ scale: scale2, }}
          src={asset?.images?.[1]}
          className="object-cover brightness-75"
          alt="" />
      </section>

      {/* furniture */}
      {(
        <section className="py-12 bg-(--primary-color) ">
          <div className="container-x h-[350px]  text-white/90 flex flex-col justify-center w-full">
            <h2 className="md:text-5xl text-2xl text-center font-semibold mb-1">
              เฟอร์นิเจอร์ / เครื่องใช้ไฟฟ้า
            </h2>
            <h2 className=" text-xl text-center mb-10">
              เฟอร์นิเจอร์และเครื่องใช้ไฟฟ้าครบชุด ลดค่าใช้จ่าย พร้อมปล่อยเช่าหรือเข้าอยู่ทันที
            </h2>


            <ul className="grid grid-cols-2 md:grid-cols-2 gap-3">
              {asset?.furnitures?.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <RiSofaFill className=" size-7" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* hightlight */}

      {asset?.hightlights?.length > 0 && (
        <section className="py-12 bg-zinc-100">
          <div className="container-x">
            <h2 className="text-2xl font-semibold mb-6">จุดเด่นห้อง</h2>

            <div className="grid md:grid-cols-2 md:gap-4 gap-2">
              {asset?.hightlights?.map((item, i) => (
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
      )}



      {/* before & after   */}

      {asset.beforeImage && asset.afterImage && (
        <section className="py-12 bg-white">
          <div className="container-x">
            <h2 className="text-2xl font-semibold mb-6">Before – After</h2>

            <div className="grid h-[500px] bg-amber-200 md:grid-cols-2">
              <div className="relative h-full">
                <div className="bg-white px-5 translate-y-4 py-1 absolute z-1">Before</div>
                <img
                  src={asset.beforeImage}
                  className="object-cover h-full w-full"
                  alt="before"
                />
              </div>
              <div className="relative h-full">
                <div className="bg-white px-5 translate-y-4 py-1 absolute z-1">After</div>
                <img
                  src={asset.afterImage}
                  className="object-cover h-full w-full"
                  alt="after"
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {/* location */}
      {/* location & map */}
      {(asset.embededMap || (asset.nearPlaces && asset.nearPlaces.length > 0)) && (
        <section className="py-12 bg-zinc-100">
          <div className="container-x">
            <h2 className="text-2xl font-semibold mb-6">ทำเล & แผนที่</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {asset.embededMap && (
                <iframe
                  className="w-full h-[300px]"
                  loading="lazy"
                  src={asset.embededMap}
                />
              )}

              {(
                <ul className="space-y-3">
                  {asset?.nearPlaces?.map((place, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <BsAsterisk className="text-green-500" /> {place}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* compatible */}
      {asset.compatible && asset.compatible.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container-x">
            <h2 className="text-2xl font-semibold mb-6">เหมาะกับใคร</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {asset.compatible.map((item, index) => (
                <div key={index} className="p-6 border-zinc-200 border">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {(
        <section className="bg-zinc-100 pb-24">
          <div className="flex md:flex-row flex-col gap-10">
            <div className="container-x">
              <div className="grid md:grid-cols-2 md:max-w-5xl mx-auto mb-5">
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
              <FAQ items={asset?.FAQs?.length > 0 ? asset.FAQs.map(faq => ({
                question: faq.title || '',
                answer: faq.desc || ''
              })) : faqItems} />
            </div>
          </div>
        </section>
      )}
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
