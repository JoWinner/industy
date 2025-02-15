import Image from "next/image";

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <div className="aspect-square relative w-full h-screen">
      <Image
        src="/images/02.jpg"
        alt='/'
        fill
        className="aspect-square object-cover "

      /></div>
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
           Serving the World Sustainable Premium Quality Cocoa Beans
          </h1>
          
          <button className='bg-white text-[#040e26] font-bold text-lg px-4 py-2 mt-6'>Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
