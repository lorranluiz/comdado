import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ProgressBar from "@/components/common/ProgressBar";
import BackgroundMusic from "@/components/common/BackgroundMusic";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "ComDado RPG - Domine a Arte de Narrar Histórias Épicas",
  description: "Transforme suas sessões de RPG em aventuras inesquecíveis. Aprenda a criar narrativas envolventes, personagens marcantes e campanhas que seus jogadores nunca esquecerão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cinzel.variable}`}>
      <body className={`min-h-screen flex flex-col ${inter.className}`}>
        <Header />
        <ProgressBar />
        <BackgroundMusic />
        <div className="mt-16 md:mt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
