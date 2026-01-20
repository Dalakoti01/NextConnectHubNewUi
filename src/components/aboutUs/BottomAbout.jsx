import { BookOpen, Lightbulb } from "lucide-react";
import Link from "next/link";

const BottomAbout = () => {
  return (
    <div>
      {/* Work Culture */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-black md:text-4xl font-serif font-bold text-center mb-8">
            Our Work Culture
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
            At NEXTCONNECTHUB, we don’t just write code — we build dreams.
            Every idea is heard, every effort is valued, and curiosity drives
            innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-black/10 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-7 h-7 mr-3 text-black" />
                <h3 className="text-xl text-black font-bold">Innovation Hub</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We encourage experimentation, creativity, and asking “why not?”
                — because innovation comes from freedom.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-7 h-7 mr-3 text-black" />
                <h3 className="text-xl text-black font-bold">Continuous Learning</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Learning never stops. We promote workshops, internal sessions,
                and a culture where mistakes are stepping stones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-black md:text-4xl font-serif font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-600 mb-8">
            Let’s discuss your idea and turn it into a powerful digital product.
          </p>

          <Link href="/getInTouch">
            <button className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-900 transition cursor-pointer">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomAbout;
