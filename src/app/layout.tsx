import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Google Font optimized configurations
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Strict SEO Metadata according to best practices
export const metadata: Metadata = {
  title: "UniformHub | Pre-loved School Uniforms Made Easy & Safe",
  description:
    "Buy and sell pre-loved school uniforms with families at your kids' school. Faster than Facebook Marketplace, safer than Gumtree, free to list. Saving Aussie families $1,500+ a year.",
  keywords: [
    "school uniforms",
    "second hand uniforms",
    "pre-loved uniforms",
    "cheap school uniforms",
    "UniformHub",
    "Australia schools",
    "Aussie school parents",
    "buy sell uniforms",
  ],
  authors: [{ name: "UniformHub team" }],
  metadataBase: new URL("https://uniformhub.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UniformHub | Pre-loved School Uniforms Made Easy & Safe",
    description:
      "Buy and sell pre-loved school uniforms with families at your kids' school. Save 60-80% off retail, list in under 3 minutes, and exchange safely at school pickup.",
    url: "https://uniformhub.com.au",
    siteName: "UniformHub",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UniformHub — Pre-loved school uniforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UniformHub | Pre-loved School Uniforms Made Easy",
    description:
      "Buy and sell second-hand uniforms with families at your Australian school. Fast, safe, free to list.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${inter.variable} font-sans antialiased bg-brand-canvas text-brand-text min-h-screen p-3 md:p-4`}
      >
        <div className="flex min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-2rem)] flex-col gap-3 max-w-[1400px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
