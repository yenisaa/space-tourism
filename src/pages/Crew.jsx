import Logo from "../Layout/logo";
import { Outlet } from "react-router-dom";

function Crew() {
  return (
    <section
      className="
        bg-[url('/background-crew-mobile.jpg')]
        md:bg-[url('/background-crew-tablet.jpg')]
        lg:bg-[url('/background-crew-desktop.jpg')]
        bg-center bg-cover bg-no-repeat h-screen md:h-screen lg:h-screen
        flex flex-col  p-5"
    >
      {/* Logo at top */}
      <div className="">
        <Logo />
      </div>

      <div className="lg:w-[1110px] md:w-[688px] items-center md:items-center flex flex-col self-center mt-8 mx-5">
        {/* Title */}
        <div className="flex items-start md:self-start gap-[24px] font-lead text-preset-5 mb-8 mx-[40px]">
          <h3 className="text-white/25 font-bold text-center">02</h3>
          <p className="text-white uppercase tracking-widest  font-normal text-center">
             MEET YOUR CREW
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-[32px] items-center justify-center">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default Crew;
