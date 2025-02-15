import Image from "next/image";

const OperationsInfo = () => {
  return (
    <div className='max-w-[1400px] h-[500px] mx-auto mt-20 mb-20 pt-16 px-4 grid grid-cols-2 gap-4 text-left '>
      <div className=' relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold text-[#040e26]'>Fine Interior Rooms</h3>
        <p className='pt-4 text-gray-500'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?

        </p>
      </div>
      <div className=' col-span-1 gap-2'>
      <div className=" aspect-square relative w-full md:h-[300px] py-10">
          <Image
            className=" aspect-square object-cover transform hover:translate-y-2 duration-500 transition-transform shadow-xl "
            src="/images/02.jpg"
            alt="/"
            fill
          />
        </div>
        </div>
    </div>
  );
};

export default OperationsInfo;
