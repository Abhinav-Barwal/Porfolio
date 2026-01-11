import type { Metadata } from "next";
import "./globals.css";
import "@/styles/global.scss"
import {Montserrat} from "next/font/google";
import Header from "@/components/layout/Header";
import AOSWrapper from "./AOSWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./BootstrapClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Abhinav Barwal Portfolio",
  icons: {
    icon: "/icons/icon.svg",
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet"/>
      </head>
      <body className={montserrat.className}>
        <AOSWrapper>
        <BootstrapClient />
        <Header/>
        {children}
        </AOSWrapper>
      </body>
    </html>
  );
}
