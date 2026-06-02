import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "ITSM 365 — Тренажёр менеджеров по продажам",
  description: "Практикуйте навыки B2B продаж с AI-клиентами в реалистичных сценариях. Отработка встреч, работа с возражениями, переговоры — всё в одном тренажёре от экосистемы ITSM 365.",
  keywords: ["тренажёр продаж", "B2B продажи", "ITSM 365", "обучение менеджеров", "AI клиенты", "сценарии продаж"],
  authors: [{ name: "ITSM 365" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "ITSM 365 — Тренажёр менеджеров по продажам",
    description: "Практикуйте навыки B2B продаж с AI-клиентами в реалистичных сценариях",
    type: "website",
    url: "https://salestrainer-itsm.netlify.app",
    siteName: "ITSM 365 Sales Trainer",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITSM 365 — Тренажёр менеджеров по продажам",
    description: "Практикуйте навыки B2B продаж с AI-клиентами в реалистичных сценариях",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
