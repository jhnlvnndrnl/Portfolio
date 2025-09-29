import React from "react";


const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites using the latest technologies. Ensuring fast load times, SEO optimization, and cross-browser compatibility."
  },
  {
    title: "UI/UX Design",
    description: "Conducting qualitative and quantitative research to understand users. Designing intuitive interfaces that improve usability and engagement."
  },
  {
    title: "Graphic Design",
    description: "Designing creative visuals for branding, marketing, and social media. Making logos, posters, and digital content that capture attention."
  }
];

export default function Services() {
  return (
    <div className="bg-[#010101] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-5 text-center text-[#003A6B]">My Services</h2>
        <p className="text-gray-400 max-w-[600px] sm:font-bold mb-15 text-center mx-auto">Ideas and goals are realized in a one-of-a-kind web project aimed at engaging and inspiring audiences.</p>
        <div className="space-y-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-2 divide-y divide-gray-600">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 px-6 transition-colors duration-300 hover:bg-[#003A6B] cursor-pointer"
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#003A6B] md:text-left transition-colors duration-300 group-hover:text-gray-200">
                      0{index + 1} {service.title}
                    </h3>
                    <p className="text-gray-300 max-w-full md:max-w-[450px] md:text-left transition-colors duration-300 group-hover:text-gray-100 ">
                      {service.description}
                    </p>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

