import icon from '../assets/shared/logo.svg'
import burgerMenu from '../assets/shared/icon-hamburger.svg'

function Logo() {
  return (
    <header className="w-full max-w-[1110px] mx-auto flex justify-between items-center px-4 py-4">
      {/* Logo */}
      <div>
        <img src={icon} alt="Space tourism logo" className="w-10 h-10" />
      </div>

      {/* Burger menu (mobile only) */}
      <button className="md:hidden">
        <img src={burgerMenu} alt="Open navigation menu" className="w-6 h-6" />
      </button>
    </header>
  )
}

export default Logo
