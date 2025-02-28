import OperationsBanner from "./components/operations-banner";
// import OperationsFeatureTop from "./components/operations-feature-top";
import OperationsGrid from "./components/operations-grid";
import OperationsInfo from "./components/operations-info";
import ProcessSection from "./components/process-section";

const OperationsPage = () => {
  return (
    <>
      <OperationsBanner />
      <OperationsInfo/>
      <OperationsGrid />
      <ProcessSection />
      {/* <OperationsFeatureTop /> */}
    </>
  );
}

export default OperationsPage;