import Image from "next/image";

const BottomStoryInfo = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-[#040e26] mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid grid-cols-2 gap-4 text-left '>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold text-white'>At the heart of Green-Hive Trading Company Ltd.</h3>
        <p className='pt-4 text-lg text-gray-300'>
          Green-Hive Trading Company Ltd a subsidiary of the Cocoa Supplier has earned the reputation,
          trust and respect of our clients within the global cocoa economy for having a great operation structure,
          people and for providing excellent service to our clients through the sale and delivery of quality cocoa beans.
          Aside from this, as sustainable cocoa importers, we bring along passion,
          pride and an excellent service ethos to our operations.

        </p>
      </div>
      <div className=' col-span-1 gap-2'>
      <div className=" aspect-square relative w-full h-full py-10">
          <Image
            className=" aspect-square object-cover transform hover:translate-y-2 duration-500 transition-transform shadow-xl "
            src="/images/info4.jpg"
            alt="/"
            fill
          />
        </div>
        </div>
    </div>
  );
};

export default BottomStoryInfo;
