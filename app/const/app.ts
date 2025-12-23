import { desc } from "framer-motion/client";
import type { AssetModel } from "~/models/assetModel";

export const APP_NAME = "Easy Hom 1969"

export const MENU_APP = [
    {
        href: "/", label: "หน้าแรก"
    },

    {
        href: "/condo-estimator", label: "ประเมินราคา", badge: "Free"
    },
    {
        href: "/condominium", label: "คอนโดรีโนเวทพร้อมขาย", badge: "New"
    },
    // {
    //     href : "/know-nextflip-estate" , label : "รู้จัก Nextflip estate" 
    // },
    {
        href: "/use-case", label: "เคสตัวอย่าง"
    },
    {
        href: "/blogs", label: "บทความ"
    },
    {
        href: "/contact", label: "ติดต่อเรา"
    },
]

export const CONTACT_LIST = [
    { href: "mailto:pongpan303@gmail.com", label: "pongpan303@gmail.com" },
    { href: "tel:0863863844", label: "086 386 3844" },
    { href: "https://www.youtube.com/@pongpanmatkhao2273", label: "NextFlip Estate" },
]


export const faqItems = [
    {
        question: "NextFlip Estate คือใคร และทำอะไร",
        answer: `
NextFlip Estate คือทีมผู้เชี่ยวชาญด้านการรับซื้อคอนโดเงินสด
และการพัฒนาอสังหาริมทรัพย์มือสองให้กลับมามีคุณค่าอีกครั้ง

เรารับซื้อคอนโดด้วยเงินสดจริง เหมาะสำหรับเจ้าของที่ต้องการขายด่วน
ไม่อยากรอขั้นตอนสินเชื่อ หรือมีข้อจำกัดด้านสภาพห้อง เอกสาร หรือผู้เช่า
    `,
    },
    {
        question: "ทำไมการขายคอนโดให้ NextFlip Estate ถึงสะดวกกว่า",
        answer: `
เราเข้าใจปัญหาของเจ้าของคอนโดที่ต้องการขายเร็ว
จึงออกแบบกระบวนการให้เรียบง่าย ชัดเจน และไม่ซับซ้อน

ไม่ต้องรออนุมัติสินเชื่อ ไม่ต้องซ่อมแซมห้อง
และสามารถตกลงราคาที่เหมาะสมได้ในเวลารวดเร็ว
    `,
    },
    {
        question: "NextFlip Estate พัฒนาคอนโดอย่างไร",
        answer: `
นอกจากการรับซื้อ เรานำประสบการณ์ด้านการรีโนเวท
และการลงทุนมาใช้คัดเลือก ปรับปรุง และพัฒนาคอนโดแต่ละห้องอย่างตั้งใจ

เพื่อให้เป็นห้องที่พร้อมอยู่อาศัย
และคุ้มค่าทั้งสำหรับผู้อยู่อาศัยและนักลงทุน
    `,
    },
    {
        question: "แนวคิดหลักของ NextFlip Estate คืออะไร",
        answer: `
NextFlip Estate เชื่อว่าการซื้อ–ขายอสังหาริมทรัพย์ที่ดี
ไม่ใช่แค่เรื่องราคา

แต่คือความโปร่งใส ความชัดเจน
และการแก้ปัญหาให้ลูกค้าได้จริงในเวลาที่เหมาะสม
    `,
    },
];


export const WHY_US_LIST = [
    {
        image: "/condo.jpg",
        title: "รับซื้อด้วยเงินสดจริง",
        desc: "ซื้อด้วยเงินสด ไม่ต้องรออนุมัติสินเชื่อ ปิดการขายได้รวดเร็ว"
    },
    {
        image: "/condo.jpg",
        title: "ประเมินเบื้องต้นภายใน 24 ชั่วโมง",
        desc: "ทราบราคาคร่าว ๆ ได้ไว ช่วยตัดสินใจได้ทันเวลา"
    },
    {
        image: "/condo.jpg",
        title: "รับสภาพเดิมทุกกรณี",
        desc: "ไม่ว่าจะเป็นห้องเก่า ห้องโทรม หรือมีตำหนิ เรารับซื้อทั้งหมด"
    },
    {
        image: "/condo.jpg",
        title: "ช่วยแนะนำเอกสารและขั้นตอน",
        desc: "ดูแลตั้งแต่ต้นจนจบ อธิบายชัดเจน เข้าใจง่าย ไม่ซับซ้อน"
    },
    {
        image: "/condo.jpg",
        title: "มีทีมรีโนเวทมืออาชีพ",
        desc: "ทีมงานในมือ เพิ่มความน่าเชื่อถือ และช่วยประเมินมูลค่าได้แม่นยำ"
    }
];

export const TIMELINE_STEPS = [
  {
    title: "ส่งข้อมูล",
    description: "กรอกข้อมูลโครงการ ขนาด และสภาพห้อง เพื่อเริ่มการประเมิน"
  },
  {
    title: "ประเมิน",
    description: "ทีมงานประเมินราคาตามข้อมูลจริง ภายในระยะเวลาที่รวดเร็ว"
  },
  {
    title: "นัดดูห้อง",
    description: "ติดต่อเพื่อนัดหมายเข้าตรวจสอบสภาพห้องจริง"
  },
  {
    title: "ตกลงราคา",
    description: "ยืนยันราคาซื้อขายอย่างชัดเจน โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง"
  },
  {
    title: "นัดโอน / รับเงิน",
    description: "ดำเนินการโอนกรรมสิทธิ์ และรับเงินสดทันทีอย่างปลอดภัย"
  }
];


export const EXAMPLE_CONDO_LIST : AssetModel[]  = [
    {
        id: "1",
        title: "ขายด่วน คอนโด XYZ ใกล้ BTS พร้อมอยู่",
        description: "คอนโดตกแต่งครบ ใกล้ BTS เดินทางสะดวก พร้อมเข้าอยู่ได้ทันที",
        price: 2500000,
        area: 35,
        bedrooms: 1,
        bathrooms: 1,
        badge: 'โครงการใหม่',
        imageUrl: "/images/condo51.jpg",
    },
    {
        id: "2",
        title: "ขายด่วน คอนโด XYZ ใกล้ BTS พร้อมอยู่",
        description: "คอนโดตกแต่งครบ ใกล้ BTS เดินทางสะดวก พร้อมเข้าอยู่ได้ทันที",
        price: 2500000,
        area: 35,
        bedrooms: 1,
        bathrooms: 1,
        badge: 'โครงการยอดนิยม',
        imageUrl: "/images/condo15.jpg",
    },
    {
        id: "2",
        title: "ขายด่วน คอนโด XYZ ใกล้ BTS พร้อมอยู่",
        description: "คอนโดตกแต่งครบ ใกล้ BTS เดินทางสะดวก พร้อมเข้าอยู่ได้ทันที",
        price: 2500000,
        area: 35,
        bedrooms: 1,
        bathrooms: 1,
        badge: 'ขายแล้ว',
        imageUrl: "/images/condo32.jpg",
    },
    
]
