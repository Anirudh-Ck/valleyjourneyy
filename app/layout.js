"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { metadata } from "./metaData";





// export const metadata = {
//   title: "Valley Journey",
//   description: "Generated by create next app",
// };



export default function RootLayout({ children }) {

  return (
    <html lang="en">
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </head>
    <body>

      <Header />
      <main>{children}</main>
      <Footer />
      

    </body>
  </html>
  );
}
