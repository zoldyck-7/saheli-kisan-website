
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import ActivitiesSection from "@/components/ActivitiesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      <Header />
      <HeroSection />
      <AboutSection />
      <VisionMission />
      <ActivitiesSection />
      <GallerySection />
      <ContactSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
