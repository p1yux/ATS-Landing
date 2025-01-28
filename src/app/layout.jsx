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
  title: "Hiremode - Intelligent Talent Platform",
  description: "Transform your hiring process with smart automation, data-driven insights, and seamless candidate management.",
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
