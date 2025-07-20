import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        <div className="text-white mb-2">The most popular</div>
        <div className="bg-gradient-to-r from-emerald-400 via-cyan-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent mb-2 relative">
          AI code reviewer
        </div>
        <div className="text-white">for modern developers</div>
      </h1>

      <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
        CodeSense analyzes your code for{" "}
        <code className="text-emerald-400 font-mono">bugs</code>,{" "}
        <code className="text-emerald-400 font-mono">security issues</code>,{" "}
        <code className="text-emerald-400 font-mono">performance</code>, and{" "}
        <code className="text-emerald-400 font-mono">best practices</code> using
        advanced AI to help you write better, safer code.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4">
        <Link
          to="/review"
          className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 text-center"
        >
          Start Free Review
        </Link>
        <button className="w-full sm:w-auto border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm text-slate-300 hover:text-white hover:border-slate-500/50 hover:bg-slate-700/50 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
          View Demo
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
