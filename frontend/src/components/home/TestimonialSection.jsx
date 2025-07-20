import React from "react";

const TestimonialSection = () => {
  return (
    <div className="text-center mt-16 sm:mt-24 lg:mt-32 mb-16 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <img
          className="w-16 h-16 rounded-full"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Alex Chen"
        />
        <div className="text-center sm:text-left">
          <div className="font-semibold">Alex Chen</div>
          <div className="text-slate-400">Senior Developer, TechCorp</div>
        </div>
      </div>
      <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200 max-w-4xl mx-auto leading-relaxed">
        "CodeSense caught security vulnerabilities in our authentication system
        that our team missed. It's like having a senior developer reviewing
        every line of code."
      </blockquote>
    </div>
  );
};

export default TestimonialSection;
