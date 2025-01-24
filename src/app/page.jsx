import HeroSection from "@/components/custom/Landing/HeroSection";
import NavBar from "@/components/custom/Navigation/NavBar";
import Midsection from "@/components/custom/Landing/Midsection";
import Testimonials from "@/components/custom/Landing/Testimonials";
import Footer from "@/components/custom/Navigation/Footer";
import ChatBotWrapper from "@/components/custom/Chatbot/ChatBotWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavBar />
      <HeroSection />
      <Midsection />
      <Testimonials />
      <Footer />
      <ChatBotWrapper />
      {/* Other sections */}
    </main>
  );
}
