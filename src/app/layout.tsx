import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import FooterContainer from "@/components/footer/FooterContainer";
import NavbarContaner from "@/components/navbar/NavbarContaner";

const inter = Mulish({ subsets: ["latin"] }); // font

export const metadata: Metadata = {
  title: "6 Valley",
  description: "Simple e-Commerce Landing",
};

type Props = Readonly<{
  children: React.ReactNode;
  products: React.ReactNode;
  recommended: React.ReactNode;
}>;

export default function RootLayout({ children, products, recommended }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarContaner />
        {children}
        {recommended}
        {products}
        <FooterContainer />
      </body>
    </html>
  );
}
