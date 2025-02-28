import Image from "next/image";
import Link from "next/link"

const Info = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh] gap-2">
        <div className="row-span-3 aspect-square relative w-full h-full ">
          <Image
            className=" aspect-square object-cover transform hover:translate-y-2 duration-500 transition-transform shadow-xl "
            src="/images/cocoa-1.png"
            alt="/"
            fill
          />
        </div>
        <div className="row-span-2 aspect-square relative w-full h-full ">
          <Image
            className=" aspect-square object-cover p-2 transform hover:-translate-x-2 duration-500 transition-transform  "
            src="/images/cocoa.png"
            alt="/"
            fill
          />
        </div>
        <div className="row-span-2 aspect-square relative w-full h-full p-2">
          <Image
            className=" aspect-square object-cover transform hover:translate-y-2 duration-500 transition-transform shadow-xl "
            src="/images/soy.jpg"
            alt="/"
            fill
          />
        </div>
        <div className="row-span-3 aspect-square relative w-full h-full">
          <Image
            className=" aspect-square object-cover p-2 transform hover:-translate-y-2 duration-500 transition-transform"
            src="/images/cashew.jpg"
            alt="/"
            fill
          />
        </div>
        <div className="row-span-2 aspect-square relative w-full h-full">
          <Image
            className=" aspect-square object-cover p-2 transform hover:-translate-x-2 duration-500 transition-transform"
            src="/images/coffee.png"
            alt="/"
            fill
          />
        </div>
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center text-left">
        <h3 className="section-title">
          We Supply Cocoa, Cashew, Coffee, Soybeans
        </h3>

        <p className="pb-6 text-lg text-gray-500 font-medium">
          We are here to help Manufacturing Companies around the world access
          supplies of premium quality cash crops. Our cash crops are well researched
          and tested sustainably, and as global bean suppliers, we ensure all
          our supplies are traceable and ethically sourced. With this approach,
          it means our cash crop is ready for manufacturing and products due
          diligence legislation across consumer markets in Europe and North
          America.
        </p>
        <div className="flex flex-row gap-4 items-center">
          <Link href="/our-operations">
          <button className="btn-primary">
            Operations
          </button>
          </Link>
          <Link href="/tracking">
          <button className="bg-[#040e26] p-3 text-white hover:bg-slate-800  font-medium">
            Tracking
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
