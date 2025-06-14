import React from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import MissionVision from './components/MissionVision';
import ValuesSection from './components/ValuesSection';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import ClientsSection from './components/ClientsSection';
import CTASection from './components/CTASection';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import AIChatBot from './components/AIChatBot';
import ProjectGenerator from './components/ProjectGenerator';
import TechMap from './components/TechMap';
import DevMemes from './components/DevMemes';
import ThemeToggle from './components/ThemeToggle';
import InteractiveDemo from './components/InteractiveDemo';
import LeadMagnet from './components/LeadMagnet';
import PowerBuilderDemo from './components/PowerBuilderDemo';
import PortfolioSection from './components/PortfolioSection';
import PriceComparison from './components/PriceComparison';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import SifenIntegration from './components/SifenIntegration';
import './styles.css';
import ObjectivesSection from './components/ObjectivesSection';
import RevenueSources from './components/RevenueSources';
import AnalisisFODA from './components/AnalisisFODA';
import PlanNegocios from './components/PlanNegocios';
import MarketingYVentas from './components/MarketingYVentas';
import FormalizacionLegal from './components/FormalizacionLegal';
import EstudioDeMercado from './components/EstudioDeMercado';
import EquipoTrabajo from './components/EquipoTrabajo';
import PlanFinanciero from './components/PlanFinanciero';
import PlanLanzamiento from './components/PlanLanzamiento';
import EstrategiaEscalabilidad from './components/EstrategiaEscalabilidad';
const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <HeroSection />
      <MissionVision />
        
        <ValuesSection />
      <ObjectivesSection />
      <RevenueSources />
      <EstudioDeMercado />
      <AnalisisFODA />
    <PlanNegocios />
    <MarketingYVentas />
    <FormalizacionLegal />
    <EquipoTrabajo />
    <PlanFinanciero />
    <PlanLanzamiento />
    <EstrategiaEscalabilidad />
  
      <PriceComparison />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <LeadMagnet />
      </div>

      <PortfolioSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <InteractiveDemo />
        <ProjectGenerator />
      </div>

      <SifenIntegration />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <PowerBuilderDemo />
      </div>

    
      <TechStack />
      <TechMap />
      <Testimonials />
      <ClientsSection />
      <DevMemes />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <ContactInfo />
        </div>
        <div className="lg:col-span-2">
          <LocationMap />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ContactForm />
      </div>

      <CTASection />
      <WhatsAppButton />
      <AIChatBot />
    </div>
  );
};

export default App;

// DONE