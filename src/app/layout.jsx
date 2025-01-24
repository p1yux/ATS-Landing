import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Hiremode - AI-Powered Recruitment Platform",
  description: "Transform your hiring process with AI-powered insights, intelligent screening, and seamless candidate management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
      <body className={`min-h-screen font-sans ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
