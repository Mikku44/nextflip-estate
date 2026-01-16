import { Outlet } from "react-router";
import ContactInfo from "~/components/FloatingButton";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { Toaster } from 'sonner'
import type { Route } from "./+types/home";
// import FacebookSDK from "~/components/FacebookSDK";

export function meta({ }: Route.MetaArgs) {
  return [
    {
      title: "NextFlip Estate | รับซื้อคอนโดเงินสด และที่ปรึกษาการขายอสังหาริมทรัพย์",
    },
    {
      name: "description",
      content:
        "NextFlip Estate โดยคุณเอ้  รับซื้อคอนโดเงินสด ปิดดีลไว ประเมินราคาฟรี พร้อมบริการรีโนเวทฟลิปคอนโดเพื่อเพิ่มมูลค่า สนใจปรึกษาโทร 086-386-3844",
    },
    {
      name: "keywords",
      content:
        "NextFlip Estate, รับซื้อคอนโดเงินสด, ขายคอนโดด่วน, ฟลิปคอนโด, รีโนเวทคอนโดเพื่อขาย, คุณเอ้ , ปรึกษาซื้อขายอสังหาริมทรัพย์",
    },

    // Open Graph (สำหรับแชร์ลง Facebook/Line)
    {
      property: "og:title",
      content: "NextFlip Estate | รับซื้อคอนโดเงินสด ปิดดีลไว ให้ราคายุติธรรม",
    },
    {
      property: "og:description",
      content:
        "อยากขายคอนโดไว หรืออยากเพิ่มมูลค่าห้องด้วยการฟลิป? ปรึกษา NextFlip Estate บริการรับซื้อด้วยเงินสดและดูแลการขายแบบครบวงจร",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://nextflipestate.com",
    },
    {
      property: "og:image",
      content: "https://nextflipestate.com/og-1.jpg", 
    },

    {
      rel: "icon",
      href: "https://www.nextflipestate.com/favicon.ico"
    }
  ];
}


export default function Layout() {
  return (
    <main>
      <Toaster />
        <Navbar />
        {/* <FacebookSDK /> */}
        <ContactInfo />
        <Outlet></Outlet>
        <Footer />
    </main>
  )
}
