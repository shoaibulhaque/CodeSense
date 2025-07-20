import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 group hover:scale-105 transition-transform duration-300">
      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-shadow duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Bug Detection",
      description:
        "Identify runtime errors, logic bugs, and edge cases before they reach production",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Security Analysis",
      description:
        "Detect vulnerabilities, injection risks, and security anti-patterns in your code",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Performance Insights",
      description:
        "Optimize algorithms, memory usage, and identify performance bottlenecks",
    },
  ];

  return (
    <div className="text-center mt-16 sm:mt-24 lg:mt-32 mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 px-4">
        Why developers choose CodeSense
      </h2>
      <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-16 px-4">
        Our AI doesn't just find bugs - it understands your code's context,
        architecture, and intent to provide meaningful insights that help you
        become a better developer.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
