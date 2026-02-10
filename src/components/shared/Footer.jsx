"use client";

import { Play } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleContactClick = () => {
    if (pathname === "/contactUs") {
      // ✅ Already on Contact page → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // ✅ Navigate to Contact page
      router.push("/contactUs");
    }
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Let your business <br />
              go online
            </h2>
            <p className="text-gray-400 mb-8">Let your business go online</p>

            <div className="flex space-x-4">
              <button
                onClick={handleContactClick}
                className="h-12 px-8 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Get Started
              </button>

              <button
                onClick={handleContactClick}
                className="h-12 px-8 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl bg-white rounded-[2rem] p-8 text-black">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold mb-2">
                    A Beautiful Website or app <br />
                    To grow Your Business
                  </h3>

                  <div className="flex gap-2 mt-4">
                    <div className="w-8 h-2 bg-[#A4D65E] rounded-full" />
                    <div className="w-8 h-2 bg-[#FF4D6D] rounded-full" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-24 h-48 border-4 border-gray-200 rounded-[1.5rem] bg-gray-50 relative" />
                  <div className="w-28 h-56 border-4 border-black rounded-[2rem] bg-white relative shadow-xl -mt-4 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#FF4D6D] flex items-center justify-center text-white">
                      <Play size={16} fill="currentColor" />
                    </div>
                  </div>
                  <div className="w-24 h-48 border-4 border-gray-200 rounded-[1.5rem] bg-gray-50 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
          <div>
            <h3 className="font-bold text-lg mb-6">NextConnectHub</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Modern, fast and budget-friendly web development services for every
              type of company - small or large
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/testimonials" className="hover:text-white">Testimonials</a></li>
              <li><a href="/aboutUs" className="hover:text-white">About Us</a></li>
              <li><a href="/contactUs" className="hover:text-white">Contact Us</a></li>
              <li><a href="/freelanceMarketplace" className="hover:text-white">Freelance Marketplace</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact us</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>nextconnecthub@gmail.com</li>
              <li>+91 7895632801</li>
              <li className="pt-4 text-xs text-gray-500">
                K&D SOLUTIONS PRIVATE LIMITED
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2023 K&D SOLUTIONS PRIVATE LIMITED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/termsandcondition" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="/privacyPolicy" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
