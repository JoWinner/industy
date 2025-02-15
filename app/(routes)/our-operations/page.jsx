import OperationsInfo from "./components/operations-info"
import OperationsBanner from "./components/operations-banner"
import OperationsGrid from "./components/operations-grid"
import OperationsFeatureTop from "./components/operations-feature-top"


const OperationsPage = () => {
  return (
    <>
      <OperationsBanner />
      <OperationsInfo />
      <OperationsFeatureTop/>
      <OperationsGrid/>
    </>
  )
}

export default OperationsPage