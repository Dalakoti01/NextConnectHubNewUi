import ContactForm from '@/components/contact/ContactForm';
import HeroGet from '@/components/contact/HeroGet';
import LeftMain from '@/components/contact/LeftMain';
import React from 'react'


export const metadata = {
  metadataBase: new URL("https://nextconnecthub.com"),
  title: "Get In Touch | NextConnectHub",
  description:
    "Ready to start your project?Contact NextConnectHub for high-performance websites and proven SEO strategies that help your brand rise in search results.",
  keywords:
    "AI Chatbot, Quality First , Timely Delivery, Clear Communication, Healthcare Portal ,Innovation Hub,Doubts Related Web Development",
  openGraph: {
    title: "Get In Touch | NextConnectHub",
    description:
      "Ready to start your project?Contact NextConnectHub for high-performance websites and proven SEO strategies that help your brand rise in search results.",
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
    title: "Get In Touch | NextConnectHub",
    description:
      "Ready to start your project?Contact NextConnectHub for high-performance websites and proven SEO strategies that help your brand rise in search results.",
    images: ["https://nextconnecthub.com/imagelogo.png"],
    card: "summary_large_image",
    creator: "Karan Dalakoti",
  },
};

const page = () => {
  return (
    <div className='w-full'>
      <HeroGet/>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-12 lg:px-20'>
        <div className='py-20'>
<LeftMain/>

        </div >
        <div className='w-full'>
<ContactForm className= {`bg-white  rounded-lg`}/>

        </div>
      </div>
    </div>
  )
}

export default page