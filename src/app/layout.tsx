import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fresc - Fresh produce, discounted",
  description: "Discover discounted fresh produce from local fruit shops near you. Save money and reduce food waste.",
  keywords: "fresh produce, discounts, local shops, food waste, Barcelona",
  openGraph: {
    title: "Fresc - Fresh produce, discounted",
    description: "Discover discounted fresh produce from local fruit shops near you.",
    type: "website",
    locale: "en",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ paddingTop: '52px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
