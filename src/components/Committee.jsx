const Committee = () => {
  return (
    <section id="about" className="second-section h-screen bg-black relative">
      {/* glowing background */}
      <div className="h-[600px]  w-full bg-orange-800 "></div>
      {/* text */}
      <div className="absolute top-[15%] sm:right-20 md:right-[200px] text-white">
        <h1 className="text-5xl font-bold font-rubix">
          Why Choose Jack Daniel’s?
        </h1>
        <p className="w-[500px] font-semibold pt-10">
          With over 150 years of craftsmanship, Jack Daniel’s is a symbol of
          American heritage and quality. Our time-honored distillation process
          and dedication to excellence ensure that every bottle embodies the
          spirit of its founder, Jasper Newton “Jack” Daniel. Craftsmanship From
          the choice of grains to the handcrafted barrels, every step of our
          whiskey-making process is meticulously overseen by our Master
          Distiller. This commitment to quality and detail ensures that each sip
          of Jack Daniel’s is a testament to our tradition of excellence.
          Versatility Whether you prefer it neat, on the rocks, or in a classic
          cocktail, Jack Daniel’s offers a versatile range of flavors to suit
          every palate. Explore our whiskey collection and discover your perfect
          pour.
        </p>
        <div className="grid md:grid-cols-2 gap-2 text-black font-rubix font-bold mt-4">
          <span className="bg-orange-500 rounded-full px-3">
            #Almost as good as the real thing
          </span>
        </div>
      </div>
    </section>
  );
};

export default Committee;
