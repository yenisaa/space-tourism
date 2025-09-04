import DesktopBg from '../assets/home/background-home-desktop.jpg'
import TabletBg from '../assets/home/background-home-tablet.jpg'
import MobileBg from '../assets/home/background-home-mobile.jpg'

function BgImages() {
  return (
    <>
      <div className="">
        <img
          src={MobileBg}
          alt="background image for mobile devices"
          className="w-screen md:hidden"
        />
        <img
          src={TabletBg}
          alt="background image for tablet devices"
          className="hidden md:block lg:hidden"
        />
        <img
          src={DesktopBg}
          alt="background image for mobile devices"
          className="hidden md:hidden lg:block"
        />
      </div>
    </>
  );
}

export default BgImages
