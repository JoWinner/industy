import Image from "next/image";

const StoryBanner = () => {
  return (
    <div className="relative h-[40vh] w-full overflow-hidden">
      <div className="absolute h-full inset-0">
        <Image
          src="/images/logistics.png"
          alt="Story Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full pt-20">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Discover the journey of Greenroots Trading and our commitment to cash crop trading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryBanner;