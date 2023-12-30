import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script async defer
          src={`${process.env.NEXT_PUBLIC_UMAMI_HOST}/script.js`}
          data-website-id={`${process.env.NEXT_PUBLIC_UMAMI_ID}`}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
