import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterContainer from "@/components/footer/FooterContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "6 Valley",
  description: "Simple e-Commerce Landing",
};

type Props = Readonly<{
  children: React.ReactNode;
  feature: React.ReactNode;
  products: React.ReactNode;
}>;

export default function RootLayout({ children, feature, products }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h2>Header</h2>
        {feature}
        {children}
        {products}
        <FooterContainer />
      </body>
    </html>
  );
}
