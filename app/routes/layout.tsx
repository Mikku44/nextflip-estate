import { Outlet } from "react-router";
import ContactInfo from "~/components/FloatingButton";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";


export default function Layout() {
  return (
    <main>
        <Navbar />
        <ContactInfo />
        <Outlet></Outlet>
        <Footer />
    </main>
  )
}
