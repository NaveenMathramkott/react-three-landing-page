const Hero = () => {
  return (
    <section className="h-screen relative bg-black ">
      <div className="absolute top-[40%] left-20 z-20">
        <h1 className="text-5xl text-yellow-800 font-mynerver font-bold">
          Jack Daniels
        </h1>
        <p className="w-[500px] pt-2 text-yellow-500 text-justify text-sm">
          Jack Daniel’s Tennessee Honey and Jack Daniel’s Tennessee Fire A
          unique blend of Jack Daniel’s Old No. 7 and a proprietary honey
          liqueur, Tennessee Honey is a delightful fusion of flavors. Its
          smooth, sweet finish makes it ideal for sipping straight or adding a
          twist to your favorite cocktails. Ignite your senses with the bold,
          fiery taste of Jack Daniel’s Tennessee Fire. Infused with a spicy
          cinnamon liqueur, this whiskey delivers a warm, smooth finish that’s
          perfect for those who like a little heat in their drink.
        </p>

        <button
          onClick={() => alert("just scroll for it")}
          className="bg-amber-300 p-2 rounded-lg text-white mt-5 hover:bg-orange-400 hover:scale-110 hover:text-white transition duration-500"
        >
          Enlighten Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
