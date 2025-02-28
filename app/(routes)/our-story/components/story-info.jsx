import Image from "next/image";
import { Reveal } from "@/lib/Reveal";

const StoryInfo = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Reveal>
              <h2 className="section-title">About Greenroots Trading</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Greenroots Trading exists to facilitate and improve cash crop trade transactions between our company and clients across the world. We create a conducive platform through which our clients interface with us.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our uniqueness lies in the excellent supply of premium quality cocoa beans, cashew, coffee and soybeans, making us stand tall in the global cash crop trading economy. We are committed to creating value through excellent trade systems.
              </p>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-[300px] transform hover:translate-y-2 duration-500 shadow-xl">
                <Image
                  src="/images/clients.png"
                  alt="Cocoa beans"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[200px] transform hover:-translate-y-2 duration-500 shadow-xl">
                <Image
                  src="/images/greenroots.png"
                  alt="Cocoa processing"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-[200px] transform hover:translate-y-2 duration-500 shadow-xl">
                <Image
                  src="/images/ship.png"
                  alt="Cocoa farming"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[300px] transform hover:-translate-y-2 duration-500 shadow-xl">
                <Image
                  src="/images/cashew-02.png"
                  alt="Quality control"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryInfo;