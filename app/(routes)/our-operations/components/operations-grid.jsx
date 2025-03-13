import Image from "next/image";
import { Shield, Leaf, Scale, Award, Users, BarChart } from "lucide-react";
import { Reveal } from "@/lib/Reveal";

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control measures ensure premium cash crops.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to environmentally responsible farming practices.",
  },
  {
    icon: Scale,
    title: "Fair Trade",
    description: "Ethical trading practices ensuring fair compensation for farmers.",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Internationally recognized certifications for quality standards.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Strong relationships with farmers and manufacturers worldwide.",
  },
  {
    icon: BarChart,
    title: "Market Analysis",
    description: "Continuous market monitoring for competitive pricing.",
  },
];

const OperationsGrid = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="section-title">Our Core Competencies</h2>
            <p className="section-subtitle">
              We maintain excellence through our comprehensive approach to cocoa trading.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index}>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationsGrid;