import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Cinzel } from 'next/font/google';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
      href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Karla:ital,wght@0,200..800;1,200..800&family=Lora:ital,wght@0,400..700;1,400..700&family=Nova+Mono&display=swap"
      rel="stylesheet"
      crossOrigin="anonymous"
    />
      {/* <!------------------------- font-awesome -------------------------> */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  crossOrigin="anonymous"
  />

    
    <link rel="preconnect" href="https://fonts.googleapis.com"  crossOrigin="anonymous" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
