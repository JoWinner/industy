import Image from "next/image";

const StoryBanner = () => {
  return (
    <div className="w-full h-[200px] pt-16 bg-[#fc5e28]">
      <div className="aspect-square relative w-full  h-[150px] ">
        <Image
          src="/images/02.jpg"
          alt="/"
          fill
          className="aspect-square object-cover"
        />
      </div>
      <div className="bg-black/30 mt-16 absolute top-0 left-0 w-full h-[150px]" />
      <div className="absolute top-16 w-full h-[150px] flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <h1 className="font-bold text-5xl drop-shadow-2xl">
             Know About
          </h1>
          <p className="max-w-[600px] p-3 text-gray-200 text-lg font-bold backdrop-blur-sm bg-black/50">
            Green-Hive Trading Company Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryBanner;
