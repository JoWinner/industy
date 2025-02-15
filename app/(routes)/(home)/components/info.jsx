import Image from "next/image";

const Info = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh] gap-2">
        <div className="row-span-3 aspect-square relative w-full h-full ">
          <Image
            className=" aspect-square object-cover transform hover:translate-y-2 duration-500 transition-transform shadow-xl "
            src="/images/info1.jpg"
            alt="/"
            fill
          />
        </div>
        <div className="row-span-2 aspect-square relative w-full h-full ">
          <Image
            className=" aspect-square object-cover p-2 transform hover:-translate-x-2 duration-500 transition-transform  "
            src="/images/info2.jpg"
            alt="/"
            fill
          />
        </div>
        <div className="row-span-2 aspect-square relative w-full h-full p-2">
          <Image
            className=" aspect-square object-cover transform hover:translate-y-2 duration-500 transition-transform shadow-xl "
            src="/images/info3.jpg"
            alt="/"
            fill
          />
        </div>
        <div className="row-span-3 aspect-square relative w-full h-full">
          <Image
            className=" aspect-square object-cover p-2 transform hover:-translate-y-2 duration-500 transition-transform"
            src="/images/info4.jpg"
            alt="/"
            fill
          />
        </div>
        <div className="row-span-2 aspect-square relative w-full h-full">
          <Image
            className=" aspect-square object-cover p-2 transform hover:-translate-x-2 duration-500 transition-transform"
            src="/images/info5.jpg"
            alt="/"
            fill
          />
        </div>
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center text-left">
        <h3 className="text-5xl text-[#040e26] md:text-6xl font-bold">Global Cocoa Beans Suppliers </h3>
        <p className="text-xl uppercase font-semibold text-[#fc5e28] py-3">
          Welcome to the Green Hive Trading Company Ltd.
        </p>
        <p className="pb-6 text-lg text-gray-500 font-medium">
          We are here to help Manufacturing Companies around the world access supplies of premium quality cocoa beans.
          Our Cocoa is well researched and tested sustainably, and as global bean suppliers,
          we ensure all our supplies are traceable and enthically sourced.
          With this approach, it means our cocoa is ready for manufacturing and products due diligence legislation across consumer markets in Europe and North America.
        </p>
        <div>
          <button className="bg-[#fc5e28] p-3 text-[#040e26] mr-4 hover:shadow-xl transition-all duration-500 font-medium">
            Operations
          </button>
          <button className="bg-[#040e26] p-3 text-white  hover:shadow-xl transition-all duration-500 font-medium">
            Book us now?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
