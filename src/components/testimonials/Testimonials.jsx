import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "Restaurant Website",
    description:
      "Restaurant website with online reservation system and menu management.",
    image: "/RestrauntImage.jpg",
    category: "Restaurant",
    link: "https://elegant-restaurant-website-with-fixed.onrender.com/",
  },
  {
    id: 2,
    title: "Fitness Application",
    description:
      "Workout tracking app with personalized fitness plans and progress monitoring.",
    image: "/FitnessPortfolio.jpg",
    category: "Fitness",
    link: "https://fitnessapp-1fbr.onrender.com/",
  },
  {
    id: 3,
    title: "Real Estate Portal",
    description:
      "Property listing website with advanced search and filtering options.",
    image: "/RealEstatePortfolio.jpg",
    category: "Real Estate",
    link: "https://realestate-portal-tdta.onrender.com",
  },
  {
    id: 4,
    title: "Education Platform",
    description:
      "Online learning management system with video courses and assessments.",
    image: "/EducationPortfolio.jpg",
    category: "Education",
    link: "https://edu-bharat.vercel.app/",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with payment integration and inventory management.",
    image: "/EcommercePortfolio.jpg",
    category: "E-Commerce",
    link: "https://ecom-virid-eight.vercel.app/",
  },
  {
    id: 6,
    title: "Healthcare Portal",
    description:
      "Patient management system with appointment scheduling functionality.",
    image: "/HealthcarePortfolio.jpg",
    category: "Healthcare",
    link: "https://healthcare-fjsn.onrender.com/",
  },
  {
    id: 7,
    title: "Travel Agency Website",
    description:
      "Travel booking website with tour packages and customer reviews.",
    image: "/TravelAgency.jpg",
    category: "Travel",
    link: "https://travel-by-samarth.vercel.app/",
  },
  {
    id: 8,
    title: "Corporate Website",
    description:
      "Modern corporate website with custom CMS and blog functionality.",
    image: "/CorporateWebsite.jpg",
    category: "Corporate",
    link: "https://agra-tax-navigator.vercel.app/",
  },
  {
    id: 9,
    title: "Event Management System",
    description:
      "Event planning and management platform with ticket sales functionality.",
    image: "/EventManagement.jpg",
    category: "Events",
    link: "https://event-management-samarth.vercel.app/",
  },
  {
    id: 10,
    title: "Portfolio Website",
    description:
      "Professional portfolio website for a photography business with gallery features.",
    image: "/PortfolioWebsite.jpg",
    category: "Portfolio",
    link: "https://portfolio-taxwise.vercel.app/",
  },
  {
    id: 11,
    title: "Blog Platform",
    description:
      "Content management system for bloggers with social media integration.",
    image: "/BlogWebsite.jpg",
    category: "Blog",
    link: "https://blog-by-samarth.vercel.app/",
  },
  {
    id: 12,
    title: "Job Portal",
    description:
      "Job listing and application management system for recruiters and job seekers.",
    image: "/JobPortal.jpg",
    category: "Job Portal",
    link: "https://jobportal-vwpr.onrender.com/",
  },
  {
    id: 13,
    title: "Software Requirement Specification",
    description:
      "Community platform with user profiles, messaging, and content sharing.",
    image: "/SoftwareRequirementSpecification.jpg",
    category: "Social",
    link: "https://srs-project-tau.vercel.app/",
  },
  {
    id: 14,
    title: "News Website",
    description:
      "News aggregation and publishing platform with categories and search functionality.",
    image: "/NewsWebsite.jpg",
    category: "News",
    link: "https://newsapp-2trq.onrender.com/",
  },
  {
    id: 15,
    title: "Marketplace Platform",
    description:
      "Multi-vendor marketplace with product listings and secure transactions.",
    image: "/MarketplaceWebsite.jpg",
    category: "Marketplace",
    link: "",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full mt-15 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-black text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              A selection of projects showcasing how we help businesses succeed
              online.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-black/10 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <Image
                    className="object-cover w-full h-full"
                    alt={item.title}
                    src={item.image}
                    height={400}
                    width={400}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2 cursor-pointer">
                          <ExternalLink className="w-4 h-4" />
                          View Demo
                        </button>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-gray-100 text-black text-xs font-medium px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-black font-medium hover:underline transition flex items-center gap-1 cursor-pointer">
                        View Demo
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-black py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let’s talk about your idea and turn it into a powerful digital
              product.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://calendly.com/nextconnecthub/nextconnecthub"
            >
              <button className="bg-white text-black px-10 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
