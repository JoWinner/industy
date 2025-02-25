import { Target, Heart, Shield, Users } from 'lucide-react';
import { Reveal } from "@/lib/Reveal";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide the highest quality cocoa beans while promoting sustainable farming practices and supporting local communities."
  },
  {
    icon: Heart,
    title: "Our Vision",
    description: "To become the world's leading sustainable cocoa trading company, setting industry standards for quality and ethical practices."
  },
  {
    icon: Shield,
    title: "Our Values",
    description: "Integrity, sustainability, quality, and commitment to our partners and communities guide every decision we make."
  },
  {
    icon: Users,
    title: "Our People",
    description: "A diverse team of experts passionate about cocoa, sustainability, and creating positive impact in the industry."
  }
];

const ValuesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center text-center mb-16">
          <Reveal>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide us in delivering excellence
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Reveal key={index}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;