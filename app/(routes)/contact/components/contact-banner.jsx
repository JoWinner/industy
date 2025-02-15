import Image from "next/image";

const ContactBanner = () => {
  return (
    <div className="w-full h-[350px] pt-16 bg-[#fc5e28]">
      <div className="aspect-square relative w-full  h-[350px] ">
        <Image
          src="/images/01.jpg"
          alt="/"
          fill
          className="aspect-square object-cover"
        />
      </div>
      <div className="bg-black/30 mt-16 absolute top-0 left-0 w-full h-[350px]" />
      <div className="absolute top-16 w-full h-[350px] flex flex-col justify-center items-center text-white">
        <div className=" max-w-[1100px]  m-auto absolute p-4">
          <h1 className="font-bold text-5xl drop-shadow-2xl">Don&apos;t hesitate to reach out to us.</h1>
          
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
