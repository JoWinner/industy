import { Reveal } from "@/lib/Reveal";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Premium quality commodities from sustainable sources",
  "State-of-the-art storage and preservation facilities",
  "Rigorous quality control and testing procedures",
  "Complete supply chain transparency",
  "Ethical trading practices and fair pricing",
  "24/7 customer support and consultation"
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] overflow-hidden shadow-xl">
              <Image
                src="/images/ship.png"
                alt="ship"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

          <Reveal>
            <div className="space-y-8">
              <h2 className="section-title">Why Choose GreenRoots Trading?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine decades of experience in cash crop trading with modern logistics solutions to deliver exceptional service to our clients worldwide.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;