"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/app/widget/Header";
import localFont from "next/font/local"


const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" bg-neutral-900">
      <body
        className={`mt-20 ml-70 bg-neutral-900 ${pretendard.variable} font-pretendards`}
      >
        <Header variant="newpost"/>
        {children}
      </body>
    </html>
  );
}
