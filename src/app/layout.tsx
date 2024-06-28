import type { Metadata } from "next";
import { Inter, Mulish } from "next/font/google";
import "./globals.css";
import FooterContainer from "@/components/footer/FooterContainer";
import NavbarContaner from "@/components/navbar/NavbarContaner";

const inter = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "6 Valley",
  description: "Simple e-Commerce Landing",
};

type Props = Readonly<{
  children: React.ReactNode;
  feature: React.ReactNode;
  products: React.ReactNode;
  recommended: React.ReactNode;
}>;

export default function RootLayout({ children, feature, products, recommended }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarContaner />
        {feature}
        {children}
        {recommended}
        {products}
        <FooterContainer />
      </body>
    </html>
  );
}
