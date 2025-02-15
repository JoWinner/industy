import Image from "next/image";

import { Phone, Anchor, BadgeCheck } from "lucide-react";


const OperationsGrid = () => {
  return (
    <div name="support" className="w-full mt-36 mb-36">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <Image
          className="w-full h-full aspect-square object-cover mix-blend-overlay"
          src="/images/01.jpg"
          alt="/"
          fill
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            repudiandae veritatis ratione error tenetur, voluptates architecto
            possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo
            et cum vel?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white   shadow-2xl">
            <div className="p-8">
              <Phone className="w-16 h-16 p-4 bg-[#fc5e28] text-white   mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-8">
              
            </div>
          </div>
          <div className="bg-white   shadow-2xl">
            <div className="p-8">
              <BadgeCheck className="w-16 h-16 p-4 bg-[#fc5e28] text-white   mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-8">
              
            </div>
          </div>
          <div className="bg-white   shadow-2xl">
            <div className="p-8">
              <Anchor className="w-16 h-16 p-4 bg-[#fc5e28] text-white   mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-8">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsGrid;
