import { Reveal } from "@/lib/Reveal";
import { Ship, Truck, Plane, Package } from "lucide-react";
import Image from "next/image";

const LogisticsSection = () => {
  const services = [
    {
      icon: Ship,
      title: "Sea Freight",
      description: "International shipping via major sea routes with temperature-controlled containers."
    },
    {
      icon: Truck,
      title: "Ground Transport",
      description: "Efficient inland transportation with specialized vehicles for secure and timely delivery."
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "Express delivery options for urgent shipments with complete cargo security."
    },
    {
      icon: Package,
      title: "Warehousing",
      description: "State-of-the-art storage facilities with climate control for maintaining cocoa quality."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center text-center mb-16">
          <Reveal>
            <h2 className="section-title">Global Logistics Solutions</h2>
            <p className="section-subtitle">
              Reliable and efficient shipping services worldwide
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 py-6 gap-8 mb-16">
          {services.map((service, index) => (
            <Reveal key={index}>
              <div className="bg-white px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <h3 className="section-title">End-to-End Supply Chain Solutions</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our integrated logistics network ensures seamless delivery of your shipments. With real-time tracking and dedicated support, we provide complete visibility and control over your cargo.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">Real-time shipment tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">Temperature-controlled storage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">Customs clearance assistance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">24/7 customer support</span>
                </li>
              </ul>
            </div>
          </Reveal>
            <div className="relative h-[400px] overflow-hidden shadow-xl">
              <Image
                src="/images/tech.png"
                alt="Logistics operations"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;