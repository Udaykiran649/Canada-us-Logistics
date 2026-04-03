import CrossBorder from "../components/CrossBorder";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesOverview from "../components/ServicesOverview";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WelcomePage from "../components/WelcomePage";
import WhyChooseUs from "../components/WhyChooseUs";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header/>
      <HeroSection />
      <StatsSection />
      <WelcomePage/>
      <ServicesOverview />
      <CrossBorder/>
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;