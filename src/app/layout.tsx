import Footer from "./_components/Footer";
import LenisScroll from "./_components/LenisScroll";
import Navbar from "./_components/Navbar";
import PageTransition from "./_components/PageTransition";
import "./globals.css";
import { Sora, Playfair_Display } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Your Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${playfair.variable}`}>
      <body>
        <LenisScroll />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
