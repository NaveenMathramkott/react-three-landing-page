const Footer = () => {
  return (
    <footer className="z-50  bottom-0 text-black py-2 px-16 font-extrabold tracking-widest uppercase flex justify-between items-center w-full">
      {/* logo / name */}
      <div className="flex items-center text-5xl">
        <img className="h-12 w-24" src="/public/jd-Nav-logo.webp" alt="" />
        {/* <p className="mb-4 text-white">
          &copy; 2024 NaveenMathramkott. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
