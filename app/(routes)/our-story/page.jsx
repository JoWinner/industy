import StoryBanner from "./components/story-banner";
import StoryInfo from "./components/story-info";
import BottomStoryInfo from "./components/story-info-bottom";
import ValuesSection from "./components/values-section";
import Timeline from "./components/timeline";
import ImageSlider from "./components/image-slider";

const OurStoryPage = () => {
  return (
    <>
      <StoryBanner />
      <StoryInfo />
      <ValuesSection />
      <BottomStoryInfo/>
      <Timeline />
      <ImageSlider />
    </>
  );
}

export default OurStoryPage;