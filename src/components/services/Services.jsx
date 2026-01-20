import {
  Code,
  Wifi,
  Globe,
  Palette,
  CreditCard,
  MessageCircle,
  Clock,
  Database,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 text-black" />,
    title: "MERN Stack Development And Next Js",
    description: `We build fast, modern, and scalable web apps using MongoDB, Express, React,
Node.js and NextJs. Each solution is tailored to your business needs — no copy-paste.`,
  },
  {
    icon: <Wifi className="w-8 h-8 text-black" />,
    title: "WebSocket Support",
    description: `Whether you want to build a chat app, live updates, or real-time collaboration tools — 
we make everything fast, synced, and truly live.`,
  },
  {
    icon: <Globe className="w-8 h-8 text-black" />,
    title: "WordPress Development",
    description: `We create custom WordPress websites with unique design and functionality.
Performance and style — both with no compromise.`,
  },
  {
    icon: <Palette className="w-8 h-8 text-black" />,
    title: "UI/UX Design",
    description: `Your website should look good and feel effortless to use.
We design clean, intuitive, and user-friendly interfaces.`,
  },
  {
    icon: <CreditCard className="w-8 h-8 text-black" />,
    title: "Payment Gateway Integration",
    description:
      "Secure and seamless payment gateway integration using Razorpay or Stripe for smooth transactions.",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-black" />,
    title: "AI Chatbot Integration",
    description: `We integrate intelligent AI chatbots that support users, drive leads,
and elevate the customer experience while matching your brand tone.`,
  },
  {
    icon: <Clock className="w-8 h-8 text-black" />,
    title: "Free Maintenance",
    description: `Every package includes 3 months of free maintenance, bug fixes,
and minor updates — so you can focus on growth.`,
  },
  {
    icon: <Database className="w-8 h-8 text-black" />,
    title: "SEO that really works",
    description: `We make your website fully SEO-ready so search engines love it —
better rankings, more traffic, more customers.`,
  },
  {
    icon: <Settings className="w-8 h-8 text-black" />,
    title: "Custom Solutions",
    description:
      "Have unique requirements? We build custom solutions tailored exactly to your needs.",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    pages: "Up to 10 pages",
    price: "₹15,000",
    features: [
      "MERN Stack Development",
      "Responsive Design",
      "3 Months Free Maintenance",
      "Database Support (512MB)",
    ],
  },
  {
    name: "Standard",
    pages: "Up to 30 pages",
    price: "₹45,000",
    features: [
      "All Basic features",
      "UI/UX Design",
      "Payment Gateway Integration",
      "AI Chatbot Integration",
    ],
  },
  {
    name: "Custom",
    pages: "As needed",
    price: "Custom Quote",
    features: [
      "Tailored to your specific requirements. Contact us for a personalized quote.",
    ],
  },
];

const Services = () => {
  return (
    <div className="w-full mt-15 h-full">
      <div className="w-full min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-black text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              From planning to launch — we provide complete web development
              solutions under one roof.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-black/10 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Our Pricing Structure
              </h2>
              <p className="text-lg text-gray-600">
                Transparent pricing based on your project size and requirements.
              </p>
            </div>

            {/* Pricing Table */}
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-black/10 rounded-lg overflow-hidden">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Package
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">Pages</th>
                    <th className="px-6 py-4 text-left font-semibold">Price</th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Features
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingPlans.map((plan, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 font-semibold text-black">
                        {plan.name}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {plan.pages}
                      </td>
                      <td className="px-6 py-4 font-semibold text-black">
                        {plan.price}
                      </td>
                      <td className="px-6 py-4">
                        <ul className="space-y-1">
                          {plan.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="text-gray-600 text-sm"
                            >
                              • {feature}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center text-gray-600">
              <p className="mb-2">
                Note: Domain and hosting charges are not included.
              </p>
              <p>
                Prices may vary based on specific project requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-black text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Let’s discuss your requirements and build something great together.
            </p>
            <a
              href="/getInTouch"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 inline-block cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
