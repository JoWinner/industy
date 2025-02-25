import { Reveal } from "@/lib/Reveal";
import Image from "next/image";

const processes = [
  {
    title: "Sourcing",
    description: "We carefully select cocoa beans from sustainable farms, ensuring quality from the source.",
    image: "/images/sourcing.webp"
  },
  {
    title: "Quality Control",
    description: "Rigorous testing and inspection processes guarantee premium quality beans.",
    image: "/images/control.png"
  },
  {
    title: "Processing",
    description: "State-of-the-art facilities process beans while maintaining their premium characteristics.",
    image: "/images/coffee-02.jpg"
  },
  {
    title: "Distribution",
    description: "Efficient logistics ensure timely delivery to manufacturers worldwide.",
    image: "/images/warehouse-02.jpeg"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              From farm to manufacturer, we ensure quality at every step
            </p>
          </Reveal>
        </div>

        <div className="space-y-20">
          {processes.map((process, index) => (
            <Reveal key={index}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                <div className={`space-y-6 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <h3 className="text-3xl font-bold text-gray-900">{process.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{process.description}</p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      Quality assurance at every step
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      Sustainable practices
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      Expert supervision
                    </li>
                  </ul>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={process.image}
                    alt={process.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;