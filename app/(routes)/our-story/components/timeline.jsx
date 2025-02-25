import { Reveal } from "@/lib/Reveal"

const timelineEvents = [
  {
    year: "2015",
    title: "Company Foundation",
    description: "Greenroots Trading Company Ltd was established with a vision to revolutionize Cash crop trading.",
  },
  {
    year: "2017",
    title: "International Expansion",
    description: "Expanded operations to multiple countries, building strong partnerships with global farmers.",
  },
  {
    year: "2019",
    title: "Sustainability Initiative",
    description: "Launched comprehensive sustainability program focusing on environmental and social responsibility.",
  },
  {
    year: "2021",
    title: "Quality Certification",
    description: "Achieved international quality certifications, setting new standards in the industry.",
  },
  {
    year: "2023",
    title: "Digital Innovation",
    description: "Implemented advanced digital solutions for better supply chain management and transparency.",
  },
]

const Timeline = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center text-center mb-16">
          <Reveal>
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">Milestones that shaped our growth and success</p>
          </Reveal>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20" />

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <Reveal key={index}>
                <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="w-1/2 px-4">
                    <div
                      className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                    >
                      <span className="text-primary font-bold text-xl mb-2 block">{event.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-primary bg-white z-10" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

