"use client";
import {
  Users,
  Code,
  CheckCircle,
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  BarChart3,
  FileText,
  Search,
  Lock,
  HeadphonesIcon,
  Star,
} from "lucide-react";
import ToastButton from "./ToastButton";

const FreelancerMarketPlace = () => {
  const services = [
    { name: "Web Development", icon: Globe },
    { name: "Mobile App Development", icon: Smartphone },
    { name: "UI/UX Design", icon: Palette },
    { name: "WordPress Development", icon: Globe },
    { name: "E-commerce Solutions", icon: ShoppingCart },
    { name: "Digital Marketing", icon: BarChart3 },
    { name: "Content Creation", icon: FileText },
    { name: "SEO Optimization", icon: Search },
  ];

  const features = [
    {
      icon: Users,
      title: "Vetted Professionals",
      description:
        "Our freelancers are carefully vetted to meet high standards of quality and professionalism.",
    },
    {
      icon: Code,
      title: "Specialized Skills",
      description:
        "Find experts in niche technologies, frameworks, or design styles tailored to your needs.",
    },
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description:
        "All work delivered through our platform comes with a satisfaction guarantee.",
    },
  ];

  const advantages = [
    {
      icon: Users,
      title: "Access Expert Freelancers",
      description:
        "Carefully vetted developers, designers, and marketers who understand your project goals.",
    },
    {
      icon: BarChart3,
      title: "Transparent Pricing",
      description:
        "No hidden charges. What you see is what you pay — simple and honest.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "Every project is reviewed to ensure it meets the quality we promise.",
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description:
        "Payments are released only when you’re completely satisfied.",
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description:
        "We support you throughout the project lifecycle.",
    },
    {
      icon: Star,
      title: "Specialized Expertise",
      description:
        "Find professionals with exactly the skills your project requires.",
    },
  ];

  return (
    <div className="w-full h-full">
      {/* Hero */}
      <section className="bg-black mt-15 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            AnyoneCanConnect Freelance Marketplace
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Connect with skilled freelancers for your specific project needs.
          </p>
          <ToastButton
            label="Explore The Marketplace"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer"
          />
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            About AnyoneCanConnect
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            AnyoneCanConnect connects businesses with skilled freelancers from our trusted network.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex w-16 h-16 items-center justify-center border border-black/10 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Services Available
          </h2>
          <p className="text-lg text-gray-600">
            Find experts across a wide range of digital services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-black/10 rounded-lg p-6 text-center hover:shadow-lg transition"
              >
                <div className="inline-flex w-12 h-12 items-center justify-center border border-black/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-black">{service.name}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Why Choose Our Marketplace
          </h2>
          <p className="text-lg text-gray-600">
            Advantages that make hiring freelancers easy and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div
                key={index}
                className="bg-white border border-black/10 rounded-lg p-6"
              >
                <div className="inline-flex w-12 h-12 items-center justify-center border border-black/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {adv.title}
                </h3>
                <p className="text-gray-600">{adv.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FreelancerMarketPlace;
