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
  title: "Hiremode - AI-Powered Recruitment Platform",
  description: "Transform your hiring process with AI-powered insights, intelligent screening, and seamless candidate management.",
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
