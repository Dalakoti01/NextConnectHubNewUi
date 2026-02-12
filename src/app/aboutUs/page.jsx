
import AboutPage from '@/components/aboutUsNew/AboutPage';
import React from 'react'


export const metadata = {
  metadataBase: new URL("https://nextconnecthub.com"),
  title: "About Us | NextConnectHub",
  description:
    "We have grown from a partnership into a team of developers, designers, and strategists helping businesses succeed through powerful digital solutions.We work on UODDM Framework",
  keywords:
    "UODDM,AI Chatbot,Corporate Website, Quality First , Timely Delivery, Clear Communication,Restaurant Website, Healthcare Portal ,Innovation Hub",
  openGraph: {
    title: "About Us | NextConnectHub",
    description:
      "We have grown from a partnership into a team of developers, designers, and strategists helping businesses succeed through powerful digital solutions.",
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
    title: "About Us | NextConnectHub",
    description:
      "We have grown from a partnership into a team of developers, designers, and strategists helping businesses succeed through powerful digital solutions.",
    images: ["https://nextconnecthub.com/imagelogo.png"],
    card: "summary_large_image",
    creator: "Karan Dalakoti",
  },
};

const page = () => {

  
  return (
    <div>
      <AboutPage/ >
    </div>
  )
}

export default page