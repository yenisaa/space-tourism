function Button() {
  return (
      <div className="hover:bg-white/10 p-8 rounded-full">
          <div className="bg-white flex flex-col items-center justify-center rounded-full shadow-md w-[144px] h-[144px] md:w-[275px] md:h-[275px]">
            <h1 className="text-(--font-blue) font-black font-heading hover:text-[#0B0D17]/50 tracking-wide">
              EXPLORE
            </h1>
          </div>
      </div>
  );
}

export default Button;
