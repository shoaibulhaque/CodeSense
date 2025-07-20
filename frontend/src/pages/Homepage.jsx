import React from "react";
import HeroSection from "../components/home/HeroSection";
import LiveDemo from "../components/home/LiveDemo";
import FeaturesSection from "../components/home/FeaturesSection";
import TestimonialSection from "../components/home/TestimonialSection";
import ApiIntegrationSection from "../components/home/ApiIntegrationSection";

const Homepage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20 relative z-10">
      <HeroSection />
      <LiveDemo />
      <FeaturesSection />
      <TestimonialSection />
      <ApiIntegrationSection />
    </div>
  );
};

export default Homepage;
