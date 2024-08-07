const Recipes = () => {
  return (
    <section className="third-section h-screen relative bg-black ">
      <div className="absolute top-[40%] left-20 z-20">
        <h1 className="text-5xl text-yellow-800 font-mynerver font-bold">
          About
        </h1>
        <p className="w-[500px] pt-2 text-yellow-500 text-justify text-sm">
          At Jack Daniels, we are proud to be your trusted source for Jack
          Daniel’s Tennessee Whiskey. Our mission is to share the rich history
          and exceptional quality of Jack Daniel’s with whiskey lovers around
          the world. We believe in celebrating life’s moments, big and small,
          with a drink that’s crafted to perfection.
        </p>

        <button
          onClick={() =>
            alert("I wont take you there scroll down for yourself. Sheesh!!")
          }
          className="bg-amber-300 p-2 rounded-lg text-white mt-5 hover:bg-orange-400 hover:scale-110 hover:text-white transition duration-500"
        >
          Enlighten Me
        </button>
      </div>
    </section>
  );
};

export default Recipes;
