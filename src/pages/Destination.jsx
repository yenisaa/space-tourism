import Logo from "../Layout/logo";
import { Outlet, NavLink } from "react-router-dom";

function Destination() {
  return (
    <section
      className="
        bg-[url('/background-destination-mobile.jpg')]
        md:bg-[url('/background-destination-tablet.jpg')]
        lg:bg-[url('/background-destination-desktop.jpg')]
        bg-center bg-cover bg-no-repeat md:h-screen lg:h-screen
        flex flex-col  p-5"
    >
      {/* Logo at top */}
      <div className="self-start">
        <Logo />
      </div>

      <div className="lg:w-[1110px] md:w-screen flex flex-col self-center mt-8 mx-5">
        {/* Title */}
        <div className="flex items-start gap-9 font-lead text-preset-5 mb-8 ">
          <h3 className="text-white/25">01</h3>
          <p className="text-white uppercase tracking-widest font-normal">Pick your destination</p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-[32px] items-center lg:items-start justify-center">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default Destination;
