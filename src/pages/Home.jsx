import Button from "../feature/button";
import Logo from "../Layout/logo";

function Home() {
  return (
    <main
      className="
        bg-[url('/background-home-mobile.jpg')]
        md:bg-[url('/background-home-tablet.jpg')]
        lg:bg-[url('/background-home-desktop.jpg')]
        bg-center bg-cover h-screen 
        @container flex flex-col items-center  md:items-center justify-center p-5 relative"
    >
        <div className="absolute top-5 left-5">
            <Logo />
        </div>

      <div className="md:w-[1110px] flex items-center justify-center gap-5">
          <div
            className="flex flex-col md:flex-row items-center
          justify-between gap-2 w-full"
          >
            <div className="flex flex-col items-center md:items-start justify-center w-[540px] text-white text-center md:text-left mx-[24px] self-center">
              <div className="">
                <p className="font-lead tracking-[.2rem] md:text-preset-4 text-(--font-blue-300)">SO, YOU WANT TO TRAVEL TO </p>
              </div>
              <div className="">
                <h1 className="font-heading text-[80px] md:text-[144px]">SPACE</h1>
              </div>
              <div className="w-[327px] md:w-[540px]">
                <p className="font-paragraph tracking-wide leading-8">
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge of
                  it. Well sit back, and relax because we’ll give you a truly out of
                  this world experience!
                </p>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Button />
            </div>
          </div>
      </div>
    </main>
  );
}

export default Home;
