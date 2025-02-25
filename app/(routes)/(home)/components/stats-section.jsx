import { Reveal } from "@/lib/Reveal";
import { Globe2, Ship, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Globe2,
    number: "30+",
    label: "Countries Served",
    description: "Global reach across major consuming markets"
  },
  {
    icon: Ship,
    number: "1000+",
    label: "Annual Shipments",
    description: "Reliable delivery of premium commodities worldwide"
  },
  {
    icon: Users,
    number: "2000+",
    label: "Partner Farmers",
    description: "Supporting sustainable farming communities"
  },
  {
    icon: Award,
    number: "15+",
    label: "Quality Certifications",
    description: "Meeting international expert standards from around the world."
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-[#040e26] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center flex items-center justify-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering excellence in cocoa, coffee, cashew, soybean trading and logistics across the globe
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Reveal key={index}>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#4CAF50] rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-[#4CAF50]">{stat.number}</h3>
                <p className="text-xl font-semibold mb-2">{stat.label}</p>
                <p className="text-gray-400">{stat.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;