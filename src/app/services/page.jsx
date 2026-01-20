import Services from '@/components/services/Services';
import React from 'react'

export const metadata = {
  metadataBase: new URL("https://nextconnecthub.com"),
  title: "Services | NextConnectHub",
  description:
    "At NextConnectHub we build  high-performance websites, manage SEO to boost search rankings and help you grow successfull business online",
  keywords:
    "Web Development, SEO Services, SEO Agency, Next.js, MERN Stack, React.js, Business Growth, UI/UX Design, AI Chatbot, Payment Integration, Free Maintenance, Custom Solutions, WebSocket Support",
  openGraph: {
    title: "Services | NextConnectHub",
    description:
      "At NextConnectHub we build  high-performance websites, manage SEO to boost search rankings and help you grow successfull business online",
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
    title: "Services | NextConnectHub",
    description:
      "At NextConnectHub we build  high-performance websites, manage SEO to boost search rankings and help you grow successfull business online",
    images: ["https://nextconnecthub.com/imagelogo.png"],
    card: "summary_large_image",
    creator: "Karan Dalakoti",
  },
};


const page = () => {
  
  return (
    <div>
        <Services/> 
    </div>
  )
}

export default page