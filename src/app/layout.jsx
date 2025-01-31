import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true
});

export const metadata = {
  metadataBase: new URL('https://hiremod.io'),
  title: {
    default: "Hiremod - Intelligent Talent Platform",
    template: "%s | Hiremod"
  },
  description: "Transform your hiring process with smart automation, data-driven insights, and seamless candidate management. Hiremod helps you find better candidates 3x faster.",
  keywords: ["recruitment software", "AI recruitment", "hiring platform", "talent acquisition", "ATS", "applicant tracking system", "HR technology"],
  authors: [{ name: "Hiremod Team" }],
  creator: "Hiremod",
  publisher: "Hiremod",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Hiremod - Intelligent Talent Platform",
    description: "Transform your hiring process with smart automation, data-driven insights, and seamless candidate management.",
    url: 'https://hiremod.io',
    siteName: 'Hiremod',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiremode Platform Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hiremod - Intelligent Talent Platform",
    description: "Transform your hiring process with smart automation and data-driven insights.",
    images: ['/images/twitter-image.jpg'],
    creator: '@hiremod',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`min-h-screen font-sans ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
