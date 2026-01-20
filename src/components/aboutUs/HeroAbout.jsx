const HeroAbout = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-black text-white py-20 mt-15 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            About Us
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Learn more about NEXTCONNECTHUB and the team behind our success.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black text-center mb-12">
            Our Story
          </h2>

          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-6">
            <p>
              NEXTCONNECTHUB is the web development arm of KHATRI & DALAKOTI
              SOLUTIONS PRIVATE LIMITED, founded in 2020 with a mission to provide
              high-quality, affordable web development services.
            </p>
            <p>
              What started as a partnership between two tech enthusiasts has
              grown into a dedicated team of developers, designers, and digital
              strategists.
            </p>
            <p>
              Our founders recognized a gap in the market for development
              services that were technically excellent yet budget-friendly.
            </p>
            <p>
              Today, we’ve delivered 100+ projects across industries, with
              quality, transparency, and client satisfaction at our core.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
