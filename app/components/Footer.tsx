import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="bg-zinc-100">
      
      <footer className="relative bg-(--primary-color) min-h-[300px] pt-18">

        {/* Triangle */}
        <div
          className="absolute top-[-1px] left-0 w-full h-24 bg-zinc-100"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          }}
        />
        {/* Content */}
        <section className="relative  z-10 py-16 text-white container-x ">
          <div className="flex md:flex-row flex-col gap-5 md:justify-between mc-hd">
            {/* image */}
            <div className="">
              <div className="text-xl">NEXTFLIP ESTATE</div>
              {/* <img src="/flat-logo.jpg"
              className="w-[150px] mb-5 bg-(--primary-color) mix-blend-color-burn"
              alt="nextflip-estate " /> */}
            </div>

            {/* MENU */}
            <div className="grid nav-item font-light gap-3">
              <Link className="nav-lnk w-fit " to="/about">About</Link>
              <Link className="nav-lnk w-fit " to="/privacy">Privacy Policy</Link>
              <Link className="nav-lnk w-fit " to="/terms">Terms of Service</Link>
            </div>
          </div>

        </section>
      </footer>
      <section className="bg-(--primary-color) ">
        <div className="font-light py-2  text-white container-x
         text-sm ">
          NextFlip Estate © 2025. All rights reserved.
        </div>
      </section>
    </div>
  );
}
