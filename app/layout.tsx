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
    default: "OnPage CV – Tailor Your Resume on Any Job Page | Chrome Extension",
    template: "%s | OnPage CV",
  },
  description:
    "OnPage CV lets you tailor and optimize your resume instantly on the job page — no tab switching. AI-powered resume builder & cover letter generator for LinkedIn, Indeed & more.",
  applicationName: "OnPage CV",
  keywords: [
    "OnPage CV",
    "OnPageCV",
    "resume tailor chrome extension",
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
    title: "OnPage CV – Tailor Your Resume on Any Job Page | Chrome Extension",
    description:
      "OnPage CV lets you tailor and optimize your resume instantly on the job page — no tab switching.",
  },
  twitter: {
    card: "summary",
    title: "OnPage CV – Tailor Your Resume on Any Job Page | Chrome Extension",
    description:
      "AI-powered resume builder for faster, ATS-friendly applications. Install OnPage CV today.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "OnPage CV",
    operatingSystem: "Chrome",
    applicationCategory: "BrowserExtension",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Tailor your resume directly on any job page. No tab switching. AI-powered resume optimization for faster applications.",
    url: "https://resume.phanrise.com",
    downloadUrl:
      "https://chromewebstore.google.com/detail/onpage-cv/biglceojgmidchjmifhennljloohamni",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // JSON-LD for Google rich results
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
