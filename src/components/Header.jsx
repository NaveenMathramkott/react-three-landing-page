const Header = () => {
  return (
    <header className="z-50 absolute top-4 text-black py-2 px-16 font-extrabold tracking-widest uppercase flex justify-between items-center w-full">
      {/* logo / name */}
      <div className="flex items-center text-5xl">
        <img className="h-12 w-24" src="/public/jd-Nav-logo.webp" alt="" />
      </div>
      {/* button */}
      <button className="font-rubix p-2 bg-yellow-800 text-white font-medium rounded-lg">
        Buy Now
      </button>
    </header>
  );
};

export default Header;
