import FreelancerMarketPlace from "@/components/FreelanceMarketplace/FreelancerMarketPlace";
import HowItWorks from "@/components/FreelanceMarketplace/HowItWorks";
import React from "react";


export const metadata = {
  metadataBase: new URL("https://nextconnecthub.com"),
  title: "Freelance Marketplace | NextConnectHub",
  description:
    "At NextConnectHub, we craft high-performance websites, implement proven SEO strategies, and help your brand rise to the top of search results.",
  keywords:
    "AI Chatbot, Freelance Marketplace, Timely Delivery, Clear Communication, Healthcare Portal, Innovation Hub, Doubts Related Web Development",
  openGraph: {
    title: "Freelance Marketplace | NextConnectHub",
    description:
      "At NextConnectHub, we craft high-performance websites, implement proven SEO strategies, and help your brand rise to the top of search results.",
    images: [
      {
        url: "https://nextconnecthub.com/imagelogo.png",
        width: 1200,
        height: 630,
        alt: "Next Connect Hub Logo",
      },
    ],
    url: "https://nextconnecthub.com",
  },
  twitter: {
    title: "Freelance Marketplace | NextConnectHub",
    description:
      "At NextConnectHub, we craft high-performance websites, implement proven SEO strategies, and help your brand rise to the top of search results.",
    images: ["https://nextconnecthub.com/imagelogo.png"],
    card: "summary_large_image",
    creator: "Karan Dalakoti",
  },
};

const page = () => {
  return (
    <div>
      <FreelancerMarketPlace />
      <HowItWorks />
    </div>
  );
};

export default page;
