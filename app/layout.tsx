import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navigation from "./components/navigation/navigation";
import { Footer } from "./components/navigation/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ direction: "rtl" }}>
        <Navigation />
        <div className="pt-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
