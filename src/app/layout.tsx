import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FruitCanvas from "@/components/FruitCanvas";

export const metadata: Metadata = {
  title: "Fresc — Fresh produce, discounted daily",
  description: "Discover discounted fresh produce from local fruit shops near you. Save money, eat fresh, and reduce food waste in your neighborhood.",
  keywords: "fresh produce, discounts, local shops, food waste, Barcelona, fruit, vegetables",
  openGraph: {
    title: "Fresc — Fresh produce, discounted daily",
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
        <FruitCanvas />
        <Header />
        <main style={{ paddingTop: '64px', position: 'relative', zIndex: 2 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
