
import Stats from "./components/stats"
import Hero from "./components/hero"
import Info from "./components/info"
import Trustees from "./components/trustees"

const HomePage = () => {
  return (
    <>
      <Hero />
      <Trustees/>
      <Stats/>
      <Info/>
    </>
  )
}

export default HomePage