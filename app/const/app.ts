import { desc } from "framer-motion/client";
import type { AssetModel } from "~/models/assetModel";
import type { CaseStudy } from "~/models/usecaseModel";

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
    question: "ขายคอนโดให้ NextFlip Estate ต้องขายเลยไหม ถ้าประเมินแล้ว?",
    answer: `ไม่จำเป็นต้องขาย
การประเมินของเราเป็นเพียงข้อมูลประกอบการตัดสินใจ
ลูกค้าสามารถเลือกได้ว่าจะขายแบบรับซื้อเงินสด
หรือพิจารณาแนวทางอื่นเพื่อให้ได้ราคาที่เหมาะสมกว่า
*ไม่มีข้อผูกมัด และไม่มีค่าใช้จ่ายใด ๆ*
    `,
  },
  {
    question: "คอนโดติดธนาคาร หรือยังผ่อนไม่หมด ขายได้ไหม?",
    answer: `ขายได้
ทีมงานจะช่วยตรวจสอบภาระหนี้ และแนะนำขั้นตอนที่เหมาะสม
ทั้งกรณีรับซื้อเงินสด หรือแนวทางอื่นตามสภาพทรัพย์
เพื่อให้การโอนเป็นไปอย่างถูกต้องและชัดเจน
    `,
  },
  {
    question: "ห้องมีผู้เช่าอยู่ หรือห้องสภาพเดิม ขายได้หรือไม่?",
    answer: `
ขายได้
NextFlip Estate รับพิจารณาคอนโดทุกสภาพ
ไม่ว่าจะเป็นห้องเก่า ห้องโทรม หรือมีผู้เช่าอยู่
โดยจะประเมินตามสภาพจริงและเงื่อนไขของแต่ละกรณี
    `,
  },
  {
    question: "รับซื้อเงินสดอย่างเดียว หรือมีทางเลือกอื่น?",
    answer: `เรามีมากกว่าหนึ่งทางเลือก
หากลูกค้าต้องการขายเร็ว เราสามารถรับซื้อเงินสด
และหากลูกค้ามีเวลา เราสามารถเสนอแนวทางฟลิป
หรือรูปแบบอื่นเพื่อเพิ่มโอกาสได้ราคาที่สูงขึ้น
*ลูกค้าเป็นผู้เลือก เราเป็นผู้ให้ข้อมูล*`,
  },
  {
    question: "ใช้เวลานานแค่ไหนกว่าจะรู้ผลการประเมิน?",
    answer: `โดยทั่วไปทีมงานจะประเมินเบื้องต้นภายใน 24 ชั่วโมง
เพื่อช่วยให้ลูกค้าตัดสินใจได้ทันเวลา
และหากต้องการข้อมูลเพิ่มเติม สามารถติดต่อพูดคุยได้โดยตรง`,
  },
  {
    question: "มีค่าใช้จ่าย หรือค่าธรรมเนียมแอบแฝงหรือไม่?",
    answer: `ไม่มี
การประเมินราคาและการให้คำแนะนำของ NextFlip Estate
ไม่มีค่าใช้จ่าย และไม่มีข้อผูกมัดใด ๆ
เราเน้นความชัดเจนและโปร่งใสในทุกขั้นตอน`,
  },
];


export const BLOGS = [
  {
    slug: "sell-condo-cash",
    title: "ขายคอนโดเงินสด ดีกว่ายังไง เหมาะกับใคร?",
    excerpt:
      "ทำความเข้าใจข้อดีของการขายคอนโดเงินสด เหมาะกับใครบ้าง และช่วยแก้ปัญหาเจ้าของคอนโดได้อย่างไร",
    date: "2025-01-10",
  },
  {
    slug: "condo-with-tenant",
    title: "คอนโดมีผู้เช่า ขายได้ไหม?",
    excerpt:
      "หลายคนกังวลว่าคอนโดที่มีผู้เช่าจะขายยาก บทความนี้มีคำตอบจากประสบการณ์จริง",
    date: "2025-01-05",
  },
  {
    slug: "why-sell-to-investor",
    title: "ทำไมเจ้าของคอนโดจำนวนมากเลือกขายให้นักลงทุน",
    excerpt:
      "วิเคราะห์เหตุผลที่เจ้าของคอนโดตัดสินใจขายให้กลุ่มนักลงทุน แทนการขายตลาดทั่วไป",
    date: "2024-12-28",
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
    title: "รับคอนโดทุกสภาพ",
    desc: "ไม่ว่าจะเป็นห้องเก่า ห้องโทรม หรือมีผู้เช่า"
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


export const EXAMPLE_CONDO_LIST: AssetModel[] = [
  {
    id: "1",
    title: "ขายด่วน คอนโด XYZ ใกล้ BTS พร้อมอยู่",
    description: "คอนโดตกแต่งครบ ใกล้ BTS เดินทางสะดวก พร้อมเข้าอยู่ได้ทันที",
    price: 1500000,
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
    price: 2000000,
    area: 35,
    bedrooms: 1,
    bathrooms: 1,
    badge: 'โครงการยอดนิยม',
    imageUrl: "/images/condo15.jpg",
  },
  {
    id: "3",
    title: "ขายด่วน คอนโด XYZ ใกล้ BTS พร้อมอยู่",
    description: "คอนโดตกแต่งครบ ใกล้ BTS เดินทางสะดวก พร้อมเข้าอยู่ได้ทันที",
    price: 2500000,
    area: 35,
    bedrooms: 1,
    bathrooms: 1,
    badge: 'ขายแล้ว',
    imageUrl: "/images/condo32.jpg",
  },
  {
    id: "4",
    title: "ขายด่วน คอนโด XYZ ใกล้ BTS พร้อมอยู่",
    description: "คอนโดตกแต่งครบ ใกล้ BTS เดินทางสะดวก พร้อมเข้าอยู่ได้ทันที",
    price: 2500000,
    area: 35,
    bedrooms: 1,
    bathrooms: 1,
    badge: 'ขายแล้ว',
    imageUrl: "/images/condo32.jpg",
  },
  {
    id: "5",
    title: "ขายด่วน คอนโด XYZ ใกล้ BTS พร้อมอยู่",
    description: "คอนโดตกแต่งครบ ใกล้ BTS เดินทางสะดวก พร้อมเข้าอยู่ได้ทันที",
    price: 2500000,
    area: 35,
    bedrooms: 1,
    bathrooms: 1,
    badge: 'ขายแล้ว',
    imageUrl: "/images/condo23.jpg",
  },
  {
    id: "6",
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


export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "cash-buy-quick-deal",
    title: "รับซื้อคอนโดเงินสด ปิดดีลใน 15 วัน: จากห้องปลวกกิน สู่ห้องพร้อมปล่อยเช่า",
    excerpt: `## รับซื้อเงินสด ปิดดีลใน 15 วัน
เจ้าของต้องการปลดภาระและเดินทางไปต่างประเทศ
ตกลงซื้อจากข้อมูลเบื้องต้นโดยยังไม่ต้องเข้าดูห้องจริง
ห้องสภาพโทรม นำมารีโนเวทใหม่ทั้งห้อง เพิ่มมูลค่าและปล่อยเช่าได้ทันที
`,
    imageAfter: "/use-case/dcondo-ram-intra/after.jpg", // Placeholder - replace with actual path
    imageBefore: "/use-case/dcondo-ram-intra/before.jpg", // Placeholder - replace with actual path
    beforeDetail: "● ห้องสภาพโทรมมาก ปลวกกินทั้งห้อง ● ครัวพัง บวมน้ำ พื้นเป็นรอย ผนังร้าว ● เจ้าของไม่กล้ารีโนเวทเอง",
    afterDetail: "● ห้องรีโนเวทใหม่ทั้งห้อง ● กำจัดปลวก และปรับปรุงโครงสร้าง ● พร้อมปล่อยเช่าทันที",
    status: "ซื้อแล้ว - เพิ่มมูลค่าสำเร็จ",
    images: [
      "/use-case/dcondo-ram-intra/dcondo-ram-intra.jpg", // Placeholder - replace with actual paths
      "/use-case/dcondo-ram-intra/dcondo-ram-intra2.jpg", // Placeholder - replace with actual paths
      "/use-case/dcondo-ram-intra/dcondo-ram-intra3.jpg", // Placeholder - replace with actual paths
      "/use-case/dcondo-ram-intra/dcondo-ram-intra4.jpg", // Placeholder - replace with actual paths
      "/use-case/dcondo-ram-intra/dcondo-ram-intra5.jpg", // Placeholder - replace with actual paths
      "/use-case/dcondo-ram-intra/dcondo-ram-intra6.jpg", // Placeholder - replace with actual paths
      "/use-case/dcondo-ram-intra/dcondo-ram-intra7.jpg", // Placeholder - replace with actual paths
      "/use-case/dcondo-ram-intra/dcondo-ram-intra8.jpg", // Placeholder - replace with actual paths
      "/use-case/dcondo-ram-intra/dcondo-ram-intra9.jpg", // Placeholder - replace with actual paths

    ],
    time: "15 วัน",
    budget: "เงินสด",
    result: "ห้องพร้อมปล่อยเช่า / เพิ่มมูลค่า",
    category: "Cash Buy & Renovation",
    problems: [
      "ห้องสภาพโทรมมาก ปลวกกินทั้งห้อง",
      "ครัวพัง บวมน้ำ พื้นเป็นรอย ผนังร้าว",
      "เจ้าของไม่กล้ารีโนเวทเอง และไม่อยากปวดหัวกับผู้รับเหมา",
      "ต้องการขายด่วน เพื่อเดินทางไปต่างประเทศ",
      "ห้องเคยปล่อยเช่า แต่ไม่สามารถปล่อยได้"
    ],
    strategy: "NextFlip ประเมินราคาจากข้อมูลเบื้องต้นและตกลงซื้อขายโดยยังไม่ต้องเข้าดูห้องจริง หลังโอนกรรมสิทธิ์ เรารื้อใหม่ทั้งห้อง กำจัดปลวกเป็นอันดับแรก ตรวจระบบไฟใหม่ทั้งหมด ปรับแสงให้เข้าถึงทุกมุม และออกแบบใหม่ให้เหมาะกับตลาดเช่า"
  },
  {
    slug: "duplex-flip-value-add",
    title: "Flip เพิ่มมูลค่าห้อง 2 ชั้น ปิดการขายได้ราคาดีกว่าภายใน 1 ปี",
    excerpt: `## โจทย์เจ้าของห้อง 
เจ้าของต้องการขาย แต่ไม่รีบ และอยากได้ราคาที่สูงขึ้น
กังวลค่าใช้จ่ายรีโนเวท โดยเฉพาะห้อง 2 ชั้น ที่อาจบานปลาย
## แนวทางที่เราเสนอ 
วางแผนแบบ Flip ภายใต้สัญญา 1 ปี
เรารับหน้าที่บริหารงบ รีโนเวท และทำการตลาดทั้งหมด

`,
    imageAfter: "/use-case/champs-elysees-tiwanon/champs-elysees-tiwanon6.jpg", // สมมติ path รูปภาพ
    imageBefore: "/use-case/champs-elysees-tiwanon/champs-elysees-tiwanon5.jpg", // สมมติ path รูปภาพ
    beforeDetail: "● ห้อง 2 ชั้น โครงสร้างซับซ้อน ● สภาพเดิมใช้งานมานาน ● เจ้าของไม่ต้องการเสี่ยงทำเอง",
    afterDetail: "โครงสร้างดูทันสมัย minimal มากขึ้น",
    status: "ขายแล้ว - เพิ่มมูลค่าสำเร็จ",
    images: [
      "/use-case/champs-elysees-tiwanon/champs-elysees-tiwanon.jpg",
      "/use-case/champs-elysees-tiwanon/champs-elysees-tiwanon2.jpg",
      "/use-case/champs-elysees-tiwanon/champs-elysees-tiwanon3.jpg",
      "/use-case/champs-elysees-tiwanon/champs-elysees-tiwanon4.jpg",
      "/use-case/champs-elysees-tiwanon/champs-elysees-tiwanon5.jpg",
      "/use-case/champs-elysees-tiwanon/champs-elysees-tiwanon6.jpg",
      "/use-case/champs-elysees-tiwanon/champs-elysees-tiwanon7.jpg",
      "/use-case/champs-elysees-tiwanon/champs-elysees-tiwanon8.jpg",
      "/use-case/champs-elysees-tiwanon/champs-elysees-tiwanon9.jpg",
      "/use-case/champs-elysees-tiwanon/champs-elysees-tiwanon10.jpg",
    ],

    time: "น้อยกว่า 1 ปี",
    budget: "คุมงบตามแผน Flip", // สามารถระบุเป็นตัวเลขจริงได้หากมีภายหลัง
    result: "ขายได้ราคาสูงกว่าเดิม + เจ้าของไม่ต้องลงแรง",
    category: "Flip & Renovation",
    problems: [
      "ห้อง 2 ชั้น (Duplex) มีโครงสร้างซับซ้อน เสี่ยงงบบานปลาย",
      "สภาพห้องเดิมผ่านการใช้งานมานาน ดูไม่ทันสมัย",
      "เจ้าของต้องการขายแต่ไม่อยากเสี่ยงลงทุนและคุมงานเอง"
    ],
    strategy: "เสนอแผน Flip ภายใต้สัญญา 1 ปี โดยเราบริหารจัดการงบประมาณ การรีโนเวท และทำการตลาดแบบครบวงจร เพื่อลดความเสี่ยงให้เจ้าของห้อง"
  },

  {
    slug: "renovate-and-carry-mortgage",
    title: "ฟลิป + รับผ่อนให้ ระหว่างรอขาย",
    excerpt: `## ขายยังไม่ได้ในราคาที่ต้องการ เรารับผ่อนให้แทน
หากขายทันทีไม่ได้ราคา หรือไม่อยากขายขาดทุน 
เรารับภาระผ่อนให้ และจัดการรีโนเวทเพื่อขายให้ได้ราคาที่ดีกว่า
ไม่ต้องแบกค่างวดต่อ ระหว่างรอขายในราคาที่เหมาะสม
`,
    imageAfter: "/use-case/lumpini-center-nawamin/lumpini-center-nawamin.jpg", 
    imageBefore: "/use-case/lumpini-center-nawamin/lumpini-center-nawamin5.jpg", 
    beforeDetail: "● เจ้าของแบกภาระหนี้รายเดือน ● เงินต้นคงเหลือสูง ขายทันทีไม่ได้ราคา ● ห้องสภาพโทรมขาดการดูแล",
    afterDetail: "● ห้องสภาพใหม่พร้อมขาย ● ราคาขายสูงขึ้นตามมูลค่าจริง ● เจ้าของหยุดจ่ายค่างวดทันที",
    status: "ปิดการขาย - ลดภาระสำเร็จ",
    images: [
      "/use-case/lumpini-center-nawamin/lumpini-center-nawamin.jpg",
      "/use-case/lumpini-center-nawamin/lumpini-center-nawamin2.jpg",
      "/use-case/lumpini-center-nawamin/lumpini-center-nawamin3.jpg",
      "/use-case/lumpini-center-nawamin/lumpini-center-nawamin4.jpg",
      "/use-case/lumpini-center-nawamin/lumpini-center-nawamin5.jpg",
      "/use-case/lumpini-center-nawamin/lumpini-center-nawamin6.jpg",
      "/use-case/lumpini-center-nawamin/lumpini-center-nawamin7.jpg",
    ],
    time: "สัญญา 1 ปี",
    budget: "รับผิดชอบเงินงวด + งบรีโนเวท",
    result: "เจ้าของลดภาระทันที / ขายได้ราคาที่พอใจ",
    category: "Flip & Carry Mortgage",
    problems: [
      "ต้องการขายคอนโดเพื่อลดภาระหนี้รายเดือนที่แบกอยู่",
      "เงินต้นคงเหลือสูง หากขายสภาพเดิมจะขาดทุนหรือแทบไม่เหลือเงินทอน",
      "กังวลค่าใช้จ่ายในการรีโนเวทว่าจะบานปลายหากทำเอง"
    ],
    strategy: "วางโครงสร้างสัญญา 'ฟลิป 1 ปี' โดย NextFlip รับภาระผ่อนชำระค่างวดธนาคารแทนเจ้าของทุกเดือนในระหว่างดำเนินการ พร้อมลงทุนรีโนเวทห้องใหม่ทั้งห้องเพื่ออัปเกรดภาพลักษณ์และเพิ่มมูลค่าตลาด ทำให้ปิดการขายได้ในราคาที่สูงกว่าสภาพเดิม"
  },

  {
    slug: "lumpini-condo-town-bodindecha-ramkhamhaeng",
    title: "ซื้อเงินสด ปิดดีลเร็ว",
    excerpt: `## เจ้าของต้องการปลดภาระ และไม่ต้องการรับความเสี่ยงจากการรีโนเวทเอง
ไม่อยากปวดหัวกับผู้รับเหมา NextFlip รับซื้อเงินสด ปิดดีลรวดเร็ว จากนั้นดูแลการรีโนเวททั้งหมดแทนเจ้าของ`,
    
    // Using your new CHALLENGES section
    problems: [
      "ห้องสภาพโทรมมาก ปลวกกินทั้งห้อง",
      "ครัว ผนัง พื้น และเฟอร์นิเจอร์เสียหายหนัก",
      "ระบบไฟเก่า แสงไม่ทั่วถึง ทำให้ห้องดูมืดและแคบ",
      "เจ้าของต้องการขายเร็ว เพื่อนำเงินไปใช้วัตถุประสงค์อื่น",
      "ไม่อยากปวดหัวกับผู้รับเหมา หากต้องมารีโนเวทใหม่เอง"
    ],

    // Using your new STRATEGY section
    strategy: "เราตัดสินใจรับซื้อจากข้อมูลเบื้องต้นเพื่อช่วยให้เจ้าของปิดดีลได้ทันเวลา หลังโอนกรรมสิทธิ์ ทีมงานเริ่มจากการกำจัดปลวกทั้งห้อง รื้อโครงสร้างเดิมที่เสียหาย ตรวจเช็คระบบไฟใหม่ และออกแบบแสงสว่างให้เข้าถึงทุกมุมห้อง ก่อนรีโนเวทใหม่ทั้งหมดเพื่อเพิ่มมูลค่าในตลาด",

    // KEY METRICS (Right Sidebar)
    time: "ปิดดีลภายใน 15 วัน",
    budget: "รับซื้อเงินสดจริง",
    result: "รีโนเวทใหม่ เพิ่มมูลค่าทรัพย์ และพร้อมขายต่อ",


    // BEFORE & AFTER
    imageBefore: "/use-case/lumpini-condo-town-bodindecha-ramkhamhaeng/lumpini-condo-town-bodindecha4.jpg",
    imageAfter: "/use-case/lumpini-condo-town-bodindecha-ramkhamhaeng/lumpini-condo-town-bodindecha.jpg",
    beforeDetail: "ห้องเดิม ปลวกกิน โครงสร้างเสียหาย",
    afterDetail: "รีโนเวทใหม่ทั้งห้อง สว่าง โล่ง พร้อมขาย",
    
    category: "Cash Buy & Fast Flip",
    status: "ปิดดีลเรียบร้อย",
    
    // The images for the Framer Motion grid we made earlier
    images: [
      "/use-case/lumpini-condo-town-bodindecha-ramkhamhaeng/lumpini-condo-town-bodindecha.jpg",
      "/use-case/lumpini-condo-town-bodindecha-ramkhamhaeng/lumpini-condo-town-bodindecha2.jpg",
      "/use-case/lumpini-condo-town-bodindecha-ramkhamhaeng/lumpini-condo-town-bodindecha3.jpg",
      "/use-case/lumpini-condo-town-bodindecha-ramkhamhaeng/lumpini-condo-town-bodindecha4.jpg",
      "/use-case/lumpini-condo-town-bodindecha-ramkhamhaeng/lumpini-condo-town-bodindecha5.jpg",
    ]
  },
];