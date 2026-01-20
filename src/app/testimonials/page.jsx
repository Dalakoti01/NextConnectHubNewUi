import Testimonials from '@/components/testimonials/Testimonials';
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://nextconnecthub.com"),
  title: "Testimonials | NextConnectHub",
  description:
    "We have supported businesses like E-commerce Platform,Blog Portal,Corporarte Agencies,Saas,Portfolio Websites and many more.",
  keywords:
    "AI Chatbot,Testimonials,Corporate Website, E-Commerce Platform , Real Estate Portal, Education Platform,Restraunt Website, Healthcare Portal, Travel Agency Website, Event Management System, Portfolio Website, Blog Platform, Job Portal, Software Requirement Specification, News Website, MarketPlace Platform",
  openGraph: {
    title: "Testimonials | NextConnectHub",
    description:
      "We have supported businesses like E-commerce Platform,Blog Portal,Corporarte Agencies,Saas,Portfolio Websites and many more.",
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
    title: "Testimonials | NextConnectHub",
    description:
      "We have supported businesses like E-commerce Platform,Blog Portal,Corporarte Agencies,Saas,Portfolio Websites and many more.",
    images: ["https://nextconnecthub.com/imagelogo.png"],
    card: "summary_large_image",
    creator: "Karan Dalakoti",
  },
};

const page = () => {
  return (
    <div>
      <Testimonials/>
    </div>
  )
}

export default page