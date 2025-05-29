import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pluvia+",
  description: "Solução portátil e sustentável para captar e purificar água atmosférica em regiões afetadas por calor extremo e escassez hídrica.",
  keywords: [
    "Pluvia+",
    "coletor atmosférico",
    "purificação de água",
    "sustentabilidade",
    "escassez hídrica",
    "inovação ambiental",
    "tecnologia sustentável",
    "água do ar",
    "tratamento de água portátil",
    "resiliência climática"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
