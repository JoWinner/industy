import Image from "next/image";

const Trustees = () => {
  return (
    <section className="bg-[#fc5e28] text-white">
      <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
        <h2 className="text-3xl font-bold">Trusted by Manufacturing Companies</h2>
        <div className="flex flex-wrap justify-center lg:justify-between">
       
        <div className="row-span-2 aspect-square relative w-20 h-20 ">
          <Image
            className=" aspect-square object-cover p-2 transform hover:-translate-x-2 duration-500 transition-transform  "
            src="/images/T01.png"
            alt="/"
            fill
          />
        </div>

           <div className="row-span-2 aspect-square relative w-20 h-20 ">
          <Image
            className=" aspect-square object-cover p-2 transform hover:-translate-x-2 duration-500 transition-transform  "
            src="/images/T02.png"
            alt="/"
            fill
          />
        </div>

        <div className="row-span-2 aspect-square relative w-20 h-20 ">
          <Image
            className=" aspect-square object-cover p-2 transform hover:-translate-x-2 duration-500 transition-transform  "
            src="/images/T03.png"
            alt="/"
            fill
          />
        </div>

        <div className="row-span-2 aspect-square relative w-20 h-20 ">
          <Image
            className=" aspect-square object-cover p-2 transform hover:-translate-x-2 duration-500 transition-transform  "
            src="/images/T04.png"
            alt="/"
            fill
          />
        </div>

        <div className="row-span-2 aspect-square relative w-20 h-20 ">
          <Image
            className=" aspect-square object-cover p-2 transform hover:-translate-x-2 duration-500 transition-transform  "
            src="/images/T05.jfif"
            alt="/"
            fill
          />
        </div>
        </div>
      </div>
    </section>
  );
};
export default Trustees;
