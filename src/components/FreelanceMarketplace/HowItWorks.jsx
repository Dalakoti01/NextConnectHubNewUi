import React from "react";
import ToastButton from "./ToastButton";

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Getting started with AnyoneCanConnect is simple and straightforward.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Step 1 - Text on Left */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 text-right pr-8">
              <h3 className="text-xl font-semibold text-black mb-2">
                Create an Account
              </h3>
              <p className="text-gray-600">
                Sign up on AnyoneCanConnect and complete your profile
                <br />
                with your project requirements.
              </p>
            </div>
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center z-10 relative">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-300"></div>
            </div>
            <div className="flex-1 pl-8"></div>
          </div>

          {/* Step 2 - Text on Right */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 pr-8"></div>
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center z-10 relative">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-300"></div>
            </div>
            <div className="flex-1 text-left pl-8">
              <h3 className="text-xl font-semibold text-black mb-2">
                Browse Freelancers
              </h3>
              <p className="text-gray-600">
                Explore profiles of skilled professionals and find the
                <br />
                perfect match for your project.
              </p>
            </div>
          </div>

          {/* Step 3 - Text on Left */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 text-right pr-8">
              <h3 className="text-xl font-semibold text-black mb-2">
                Discuss Your Project
              </h3>
              <p className="text-gray-600">
                Connect with freelancers to discuss your requirements,
                <br />
                timeline, and budget.
              </p>
            </div>
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center z-10 relative">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-300"></div>
            </div>
            <div className="flex-1 pl-8"></div>
          </div>

          {/* Step 4 - Text on Right */}
          <div className="flex items-center justify-center">
            <div className="flex-1 pr-8"></div>
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center z-10 relative">
                <span className="text-white font-bold text-lg">4</span>
              </div>
            </div>
            <div className="flex-1 text-left pl-8">
              <h3 className="text-xl font-semibold text-black mb-2">
                Hire & Collaborate
              </h3>
              <p className="text-gray-600">
                Hire your chosen freelancer and work together to bring
                <br />
                your project to life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-black text-white py-16 mt-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Freelancer?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-300">
            Join AnyoneCanConnect today and connect with skilled professionals
            ready to help with your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ToastButton
              label="Sign Up Now"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition cursor-pointer"
            />
            <ToastButton
              label="Browse Freelancers"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
