import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://nextconnecthub.com"),

  title: "Next Connect Hub",
  description:
    "Modern Web Solutions for Your Business. Nextconnecthub brings to you realistic, competitive, and cutting-edge web solution-based services to your business. We Also Provide SEO that really works and ranks your website to the top of search engine",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
      type: "image/x-icon",
      sizes: "any",
    },
  ],

  keywords:
    "Web Development,SEO Friendly,SEO Agency, NextJs,MERN Stack,ReactJs,Grow Business,UODDM",
  openGraph: {
    title: "Next Connect Hub",
    description:
      "Modern Web Solutions for Your Business. Nextconnecthub brings to you realistic, competitive, and cutting-edge web solution-based services to your business. We Also Provide SEO that really works and ranks your website to the top of search engine",
    images: [
      {
        url: "/imagelogo.png",
        width: 1200,
        height: 630,
        alt: "Next Connect Hub Logo",
      },
    ],
    url: "https://nextconnecthub.com",
  },
  twitter: {
    title: "Next Connect Hub",
    description:
      "Modern Web Solutions for Your Business. Nextconnecthub brings to you realistic, competitive, and cutting-edge web solution-based services to your business. We Also Provide SEO that really works and ranks your website to the top of search engine",
    images: ["/imagelogo.png"],
    card: "summary_large_image",
    creator: "Karan Dalakoti",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
