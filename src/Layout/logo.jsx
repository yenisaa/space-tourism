import { useState } from "react";
import icon from "../assets/shared/logo.svg";
import burgerMenu from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import navLine from "../assets/shared/line.svg";
import { NavLink } from "react-router-dom";

function Logo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-[64px] md:p-0 lg:px-[64px] w-full lg:w-full relative z-50">
      {/* Logo */}
      <div className=" flex gap-[64px] justify-start md:px-[64px] w-full">
        <img src={icon} alt="logo" className="w-[48px] h-[48px]" />
        <img src={navLine} alt="navigation line" className="hidden lg:flex w-[560px] z-90" />
      </div>

      {/* Burger button */}
      <div className="flex w-full justify-end">
        <button
          className="md:hidden justify-end"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <img src={burgerMenu} alt="menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Desktop nav */}
      <div className="flex-2">
        <nav className="hidden md:flex gap-8 text-white uppercase inset-0 bg-black/50 bg-white/2 backdrop-blur-lg w-full lg:w-[736px] md:w-[640px] md:h-[96px] lg:h-[96px] md:items-center lg:items-center md:px-[40px] md:justify-end lg:justify-end py-4 font-lead  tracking-wider ">
          <NavLink to="/">
            <span className="font-bold">00</span> Home
          </NavLink>
          <NavLink to="/destination">
            <span className="font-bold">01</span> Destination
          </NavLink>
          <NavLink to="/crew">
            <span className="font-bold">02</span> Crew
          </NavLink>
          <NavLink to="/technology">
            <span className="font-bold">04</span> Technology
          </NavLink>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end justify-end w-full">
          <div className="w-full max-w-[250px] h-full bg-white/5 backdrop-blur-lg text-white p-6 flex flex-col gap-6 self-end">
            {/* Close button */}
            <button
              className="items-end"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <img src={closeIcon} alt="close menu" className="w-6 h-6" />
            </button>

            {/* Links */}
            <nav className="flex flex-col gap-4 uppercase font-lead tracking-wider">
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                <span className="font-bold">00</span> Home
              </NavLink>
              <NavLink to="/destination" onClick={() => setIsOpen(false)}>
                <span className="font-bold">01</span> Destination
              </NavLink>
              <NavLink to="/crew" onClick={() => setIsOpen(false)}>
                <span className="font-bold">02</span> Crew
              </NavLink>
              <NavLink to="/technology" onClick={() => setIsOpen(false)}>
                <span className="font-bold">03</span> Technology
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Logo;
