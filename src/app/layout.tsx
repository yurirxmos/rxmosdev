import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { companyName, siteUrl } from "@/data/site-content";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyName} | Empresa de desenvolvimento de aplicativos e plataformas`,
    template: `%s | ${companyName}`,
  },
  description:
    "Empresa de desenvolvimento de aplicativos, plataformas web, sites, automação e IA para negócios que precisam lançar, validar e escalar produtos digitais.",
  keywords: [
    "empresa que faz aplicativos",
    "empresa de desenvolvimento de aplicativos",
    "desenvolvimento de plataformas web",
    "empresa de software sob medida",
    "criação de sites profissionais",
    "automação e IA para empresas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: companyName,
    title: "RXMOS | Empresa de desenvolvimento de aplicativos e plataformas",
    description:
      "Criamos aplicativos, plataformas web, sites e automações para empresas em todo o Brasil.",
    images: [
      {
        url: "/brand.png",
        width: 512,
        height: 512,
        alt: "Logo da RXMOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RXMOS | Empresa de desenvolvimento de aplicativos e plataformas",
    description:
      "Criamos aplicativos, plataformas web, sites e automações para empresas em todo o Brasil.",
    images: ["/brand.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/brand.png",
    shortcut: "/brand.png",
    apple: "/brand.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
