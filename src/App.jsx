import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import KpiCardsSection from "./components/KpiCardsSection";
import PregnancyRegistrationSection from "./components/PregnancyRegistrationSection";
import FilterSection from "./components/FilterSection";
import Risk from "./components/Risk";
import HealthInsightsSection from "./components/HealthInsightSection";
import PregnancyAnalyticsSection from "./components/PregnancyAnalyticsSection";
import DeliveriesAppointmentsSection from "./components/DeliveriesAppointmentsSection";
import VaccinationSection from "./components/VaccinationSection";
import MapVisualizationSection from "./components/MapVisualizationSection";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const mainContentMarginClass = isSidebarOpen ? "ml-[252px]" : "ml-[108px]";

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main
        className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${mainContentMarginClass}`}
      >
        <Header />

        <div className="px-4 md:px-6 py-4 space-y-6">
          <WelcomeSection />
          <FilterSection />
          <KpiCardsSection />
          <PregnancyRegistrationSection />
          <Risk />
          <HealthInsightsSection />
          <PregnancyAnalyticsSection />
          <DeliveriesAppointmentsSection />
          <VaccinationSection />
          <MapVisualizationSection/>
        </div>
      </main>
    </div>
  );
}

export default App;
