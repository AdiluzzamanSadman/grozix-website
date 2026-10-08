/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesExplorer } from './components/ServicesExplorer';
import { AiGeoShowcase } from './components/AiGeoShowcase';
import { PaidMediaSection } from './components/PaidMediaSection';
import { IndustriesFocus } from './components/IndustriesFocus';
import { ComplianceTrust } from './components/ComplianceTrust';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServicesHub } from './components/ServicesHub';
import { ServiceSubpage } from './components/ServiceSubpage';
import { AuditCalculatorModal } from './components/AuditCalculatorModal';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'subpage' | 'all-services'>('home');
  const [activeSubpageSlug, setActiveSubpageSlug] = useState<string>('technical-seo');
  const [auditModalOpen, setAuditModalOpen] = useState<boolean>(false);
  const [auditInitialService, setAuditInitialService] = useState<string | undefined>(undefined);

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute, activeSubpageSlug]);

  const handleOpenAuditModal = (serviceName?: string) => {
    setAuditInitialService(serviceName);
    setAuditModalOpen(true);
  };

  const handleNavigateHome = () => {
    setCurrentRoute('home');
  };

  const handleNavigateSubpage = (slug: string) => {
    if (slug === 'all-services') {
      setCurrentRoute('all-services');
    } else {
      setActiveSubpageSlug(slug);
      setCurrentRoute('subpage');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#13617e] selection:text-white">
      {/* Global Header Navigation */}
      <Navbar
        onOpenAuditModal={() => handleOpenAuditModal()}
        onNavigateHome={handleNavigateHome}
        onNavigateSubpage={handleNavigateSubpage}
        currentRoute={currentRoute}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <>
            <Hero onOpenAuditModal={() => handleOpenAuditModal()} />
            <ServicesExplorer
              onSelectService={(serviceTitle) => handleOpenAuditModal(serviceTitle)}
              onNavigateSubpage={handleNavigateSubpage}
            />
            <AiGeoShowcase onOpenAuditModal={() => handleOpenAuditModal('Generative Engine Optimization (GEO)')} />
            <PaidMediaSection onOpenAuditModal={(service) => handleOpenAuditModal(service)} />
            <IndustriesFocus onOpenAuditModal={(industry) => handleOpenAuditModal(industry)} />
            <ComplianceTrust />
            <ContactSection />
          </>
        )}

        {currentRoute === 'all-services' && (
          <ServicesHub
            onNavigateSubpage={handleNavigateSubpage}
            onNavigateHome={handleNavigateHome}
            onOpenAuditModal={() => handleOpenAuditModal()}
          />
        )}

        {currentRoute === 'subpage' && (
          <ServiceSubpage
            slug={activeSubpageSlug}
            onNavigateHome={handleNavigateHome}
            onNavigateSubpage={handleNavigateSubpage}
            onOpenAuditModal={(service) => handleOpenAuditModal(service)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onOpenAuditModal={() => handleOpenAuditModal()}
        onNavigateSubpage={handleNavigateSubpage}
        onNavigateHome={handleNavigateHome}
      />

      {/* Interactive 48-Hour Growth Audit Dialog */}
      <AuditCalculatorModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        initialService={auditInitialService}
      />
    </div>
  );
}
