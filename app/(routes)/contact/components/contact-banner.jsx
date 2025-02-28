import Image from "next/image";

const ContactBanner = () => {
  return (
    <div className="relative h-[40vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/support-01.png"
          alt="Contact Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full pt-20">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Don&apos;t hesitate to reach out
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;