import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/50 mt-32 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <svg
                className="w-5 h-5 text-white"
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
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              CodeSense
            </span>
          </Link>
          <p className="text-slate-400 text-center sm:text-right text-sm sm:text-base">
            © 2025 CodeSense. Powered by AI for better code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
