import Hero from "./components/hero";
import Trustees from "./components/trustees";
import StatsSection from "./components/stats-section";
import FeaturesSection from "./components/features-section";
import LogisticsSection from "./components/logistics-section";
import Info from "./components/info";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Trustees/>
      <StatsSection/>
      <FeaturesSection/>
      <LogisticsSection/>
      <Info/>
    </>
  );
}

export default HomePage;