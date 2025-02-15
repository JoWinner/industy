import StoryInfo from "./components/story-info"
import StoryBanner from "./components/story-banner"
import ImageSlider from "./components/image-slider"
import BottomStoryInfo from "./components/story-info-bottom"

const OurStoryPage = () => {
  return (
    <>
      <StoryBanner />
      <StoryInfo />
      <BottomStoryInfo/>
     <ImageSlider/> 
    </>
  )
}

export default OurStoryPage