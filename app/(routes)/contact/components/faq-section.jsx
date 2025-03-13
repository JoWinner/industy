"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Reveal } from "@/lib/Reveal";

const faqs = [
  {
    question: "What types of cash crops do you supply?",
    answer: "We supply premium quality cash crops including Forastero, Criollo, and Trinitario varieties. All our beans are sourced from sustainable farms and undergo strict quality control."
  },
  {
    question: "What are your minimum order quantities?",
    answer: "Our minimum order quantities vary depending on the type of cash crop and your specific requirements. Please contact us anytime team for detailed information."
  },
  {
    question: "Do you provide samples before bulk orders?",
    answer: "Yes, we provide samples to qualified buyers. This allows you to assess the quality of our cash crops before placing larger orders."
  },
  {
    question: "What certifications do your cash crops have?",
    answer: "Our cash crops are certified by various international standards including Fair Trade, Organic, and Rainforest Alliance. We can provide specific certification details upon request."
  },
  {
    question: "What are your shipping terms?",
    answer: "We offer flexible shipping terms including FOB, CIF, and CFR. The specific terms can be discussed based on your requirements and destination."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our products and services
            </p>
          </Reveal>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index}>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;