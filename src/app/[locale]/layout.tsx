


import type { Metadata } from "next";
import { Geist, Geist_Mono  } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import localFont from "next/font/local";

import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "../_components/HomeComp/Navbar/Navbar";
import Footer from "../_components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const expoArabic = localFont({
  src: [
    {
      path: "../../../public/fonts/ExpoArabic-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/ExpoArabic-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/ExpoArabic-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-expo-arabic",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons : "/dr.jpeg" ,
  title: "Dr. Mohamed Yasser",
  description: "Dr. Mohamed Yasser Dental Clinic",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  const messages = await getMessages();
  
  const direction = locale === "ar" ? "rtl" : "ltr";
  
  
  return (
    /* 
    <html
      lang={locale}
      dir={direction}
      className={${geistSans.variable} ${geistMono.variable} h-full antialiased max-w-full overflow-x-hidden}
    >
      */
    <html
    lang={locale}
    dir={direction}
    
      className={`${locale === "ar"? expoArabic.variable : geistSans.variable} ${geistMono.variable}   h-full antialiased max-w-full overflow-x-hidden`}
//    ${geistSans.variable} ${geistMono.variable} h-full antialiased max-w-full overflow-x-hidden`}
    >
      <body className="min-h-full  flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          {/* <DentalChatWidget /> */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}