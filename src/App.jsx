import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import CoreFeatures from './components/CoreFeatures';
import WorkflowSection from './components/WorkflowSection';
import ProductExperienceShowcase from './components/ProductExperienceShowcase';
import PricingOffer from './components/PricingOffer';
import FAQAccordion from './components/FAQAccordion';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import WalkthroughModal from './components/WalkthroughModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const handleOpenOrder = () => setIsOrderOpen(true);
  const handleCloseOrder = () => setIsOrderOpen(false);

  const handleOpenTour = () => setIsTourOpen(true);
  const handleCloseTour = () => setIsTourOpen(false);

  return (
    <div className="min-h-screen bg-[#050914] text-[#F8FAFC] flex flex-col font-alexandria selection:bg-[#10B981]/30 selection:text-[#10B981]">
      
      {/* SECTION 01 — PREMIUM NAVBAR */}
      <Navbar onOpenOrder={handleOpenOrder} />

      {/* MAIN CONVERSION SECTIONS */}
      <main className="flex-grow">
        
        {/* SECTION 02 — HERO SECTION */}
        <HeroSection 
          onOpenOrder={handleOpenOrder} 
          onOpenTour={handleOpenTour} 
        />

        {/* SECTION 03 — THE PROBLEM */}
        <ProblemSection />

        {/* SECTION 04 — EIGHT CORE FEATURES */}
        <CoreFeatures onOpenOrder={handleOpenOrder} />

        {/* SECTION 05 — HOW IT WORKS */}
        <WorkflowSection onOpenOrder={handleOpenOrder} />

        {/* SECTION 06 — PRODUCT EXPERIENCE SHOWCASE */}
        <ProductExperienceShowcase onOpenOrder={handleOpenOrder} />

        {/* SECTION 07 — COMMERCIAL OFFER */}
        <PricingOffer onOpenOrder={handleOpenOrder} />

        {/* SECTION 08 — FAQ SECTION */}
        <FAQAccordion />

        {/* SECTION 09 — FINAL CONVERSION SECTION */}
        <FinalCTA onOpenOrder={handleOpenOrder} />

      </main>

      {/* SECTION 10 — FOOTER */}
      <Footer onOpenOrder={handleOpenOrder} />

      {/* FLOATING WHATSAPP & PHONE WIDGET */}
      <FloatingWhatsApp />

      {/* FLOATING SCROLL TO TOP BUTTON */}
      <ScrollToTop />

      {/* INTERACTIVE MODALS */}
      <OrderModal 
        isOpen={isOrderOpen} 
        onClose={handleCloseOrder} 
      />

      <WalkthroughModal 
        isOpen={isTourOpen} 
        onClose={handleCloseTour} 
        onOpenOrder={handleOpenOrder} 
      />

    </div>
  );
}
