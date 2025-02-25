import Image from "next/image";

const Trustees = () => {
  const trustees = [
    { src: "/images/alphonsa.png", width: "w-[180px]" },
    { src: "/images/esa.webp", width: "w-[180px]" },
    { src: "/images/cmacgm.webp", width: "w-[150px]" },
    { src: "/images/cosco.png", width: "w-[150px]" },
    { src: "/images/ecom.png", width: "w-[150px]" },
    { src: "/images/sfc.png", width: "w-[180px]" },
    { src: "/images/lavazza.png", width: "w-[150px]" },
    { src: "/images/engcoffee.png", width: "w-[150px]" },
    { src: "/images/costa.png", width: "w-[200px]" },
    { src: "/images/danone.png", width: "w-[200px]" },
  ];

  return (
    <section className="bg-[#ffffff] text-white py-8 md:py-12">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#4CAF50] mb-8 md:mb-12 text-center">
          Trusted by Top Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {trustees.map((trustee, index) => (
            <div
              key={index}
              className={`relative aspect-[3/2] ${trustee.width} min-h-[80px]`}
            >
              <Image
                src={trustee.src}
                alt="Trusted company logo"
                fill
                className="object-contain p-2 transform hover:-translate-x-2 duration-500 transition-transform"
                sizes="(max-width: 768px) 40vw, (max-width: 1200px) 25vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trustees;
