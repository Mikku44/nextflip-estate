import { Outlet } from "react-router";
import ContactInfo from "~/components/FloatingButton";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { Toaster } from 'sonner'
import FacebookSDK from "~/components/FacebookSDK";


export default function Layout() {
  return (
    <main>
      <Toaster />
        <Navbar />
        <FacebookSDK />
        <ContactInfo />
        <Outlet></Outlet>
        <Footer />
    </main>
  )
}
