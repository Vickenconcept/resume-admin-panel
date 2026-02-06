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

const siteUrl = new URL("https://resume.phanrise.com");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "OnPage CV - AI Resume Builder Chrome Extension",
    template: "%s | OnPage CV",
  },
  description:
    "OnPage CV is an AI resume builder Chrome extension that tailors your resume to any job description instantly.",
  applicationName: "OnPage CV",
  keywords: [
    "OnPage CV",
    "OnPageCV",
    "AI resume builder",
    "resume tailoring",
    "ATS resume",
    "Chrome extension",
    "resume optimization",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "OnPage CV",
    title: "OnPage CV - AI Resume Builder Chrome Extension",
    description:
      "Tailor your resume to any job description instantly with OnPage CV's AI-powered keyword optimization.",
  },
  twitter: {
    card: "summary",
    title: "OnPage CV - AI Resume Builder Chrome Extension",
    description:
      "AI-powered resume tailoring for faster, ATS-friendly applications. Install OnPage CV today.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
