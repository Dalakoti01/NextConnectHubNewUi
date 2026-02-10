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
              NEXTCONNECTHUB is the web development arm of K&amp;D SOLUTIONS
              PRIVATE LIMITED, founded in 2020 with a mission to deliver
              high-quality, affordable, and result-driven web solutions.
            </p>

            <p>
              Over the years, we have grown into a focused team of developers,
              designers, and digital specialists who believe in building
              practical, scalable, and performance-oriented digital products.
            </p>

            <p>
              Our approach is rooted in understanding real business problems and
              solving them through clean development, thoughtful design, and
              reliable technology.
            </p>

            <p>
              We operate from our office in <strong>India</strong>, serving
              clients across different regions with the same commitment to
              quality, transparency, and long-term value.
            </p>

            <p>
              Today, we’ve successfully delivered 100+ projects across multiple
              industries, with client satisfaction and measurable outcomes at
              the core of everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
