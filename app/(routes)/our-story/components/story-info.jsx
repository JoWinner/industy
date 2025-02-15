import Image from "next/image";

const StoryInfo = () => {
  return (
    <div className='max-w-[1400px]  mx-auto my-20 pt-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 gap-4 grid-rows-4 md:grid-rows-6 h-[50vh] md:h-[80vh]'>
       
      <div className="row-span-4 md:row-span-5 aspect-square relative w-full h-full ">
          <Image
            className=" aspect-square object-cover transform hover:translate-y-2 duration-500 transition-transform shadow-xl "
            src="/images/info5.jpg"
            alt="/"
            fill
          />
        </div>
        <div className="row-span-3 md:row-span-4 aspect-square relative w-full h-full mt-7">
          <Image
            className=" aspect-square object-cover transform hover:-translate-y-2 duration-500 transition-transform shadow-xl "
            src="/images/info3.jpg"
            alt="/"
            fill
          />
        </div>
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center px-4 bg-[#040e26]'>
        
        <p className='text-2xl py-6 uppercase font-semibold text-[#fc5e28]'>
          About Green-Hive Trading Company Ltd.
        </p>
        <p className='pb-6 text-lg text-gray-300'>
        Green-Hive Trading Company Ltd exists to facilitate and improve cocoa trade transactions between the Green-Hive Trading Company Ltd and its clients across the world. We do this by creating a conducive platform through which our clients interface with us. Our uniqueness is the excellent supply of premium quality cocoa beans which makes us stand tall in the global cocoa economy. We are committed to creating value through excellent cocoa trade systems.
        </p>
        
      </div>
    </div>
  );
};

export default StoryInfo;
