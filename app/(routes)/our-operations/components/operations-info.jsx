import Image from "next/image";

const OperationsInfo = () => {
  return (
    <div className="max-w-[1400px] h-[500px] lg:h-[300px] mx-auto mt-20 mb-10 px-4 grid grid-cols-2 gap-4 text-left ">
      <div className=" relative lg:col-span-1 col-span-2">
        <h1 className="section-title">Operational Excellence</h1>
        <p className="pt-4 text-gray-500">
          At Greenroots Trading, our operations are built on meticulous
          attention to detail and robust quality control systems. We implement
          advanced technological solutions for tracking and monitoring our
          supply chain, ensuring complete transparency from farm to
          manufacturer. Our experienced team coordinates with partners across
          multiple continents, managing complex logistics to deliver premium
          cash crops efficiently and reliably. We maintain strict compliance
          with international trade regulations while prioritizing sustainable
          and ethical trading practices.
        </p>
      </div>
      <div className=" col-span-1 gap-2">
        <div className=" aspect-square relative w-full md:h-[300px] py-10">
          <Image
            className=" aspect-square object-cover transform hover:translate-y-2 duration-500 transition-transform shadow-xl "
            src="/images/warehouse-03.jpg"
            alt="Greenroots operations"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default OperationsInfo;
