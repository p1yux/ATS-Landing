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
  metadataBase: new URL('https://hiremode.com'),
  title: {
    default: "Hiremode - Intelligent Talent Platform",
    template: "%s | Hiremode"
  },
  description: "Transform your hiring process with smart automation, data-driven insights, and seamless candidate management. Hiremode helps you find better candidates 3x faster.",
  keywords: ["recruitment software", "AI recruitment", "hiring platform", "talent acquisition", "ATS", "applicant tracking system", "HR technology"],
  authors: [{ name: "Hiremode Team" }],
  creator: "Hiremode",
  publisher: "Hiremode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Hiremode - Intelligent Talent Platform",
    description: "Transform your hiring process with smart automation, data-driven insights, and seamless candidate management.",
    url: 'https://hiremode.com',
    siteName: 'Hiremode',
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
    title: "Hiremode - Intelligent Talent Platform",
    description: "Transform your hiring process with smart automation and data-driven insights.",
    images: ['/images/twitter-image.jpg'],
    creator: '@hiremode',
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
