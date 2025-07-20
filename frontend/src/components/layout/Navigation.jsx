import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="px-4 sm:px-6 py-4 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded flex items-center justify-center shadow-lg shadow-emerald-500/25">
            <svg
              className="w-5 h-5 text-white drop-shadow-sm"
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`hover:text-emerald-300 transition-colors ${
              location.pathname === "/" ? "text-emerald-400" : "text-slate-300"
            }`}
          >
            Home
          </Link>
          <Link
            to="/review"
            className={`hover:text-emerald-300 transition-colors ${
              location.pathname === "/review"
                ? "text-emerald-400"
                : "text-slate-300"
            }`}
          >
            Code Review
          </Link>
          <Link
            to="/review"
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
          >
            Try Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-slate-700/50">
          <div className="flex flex-col space-y-4 pt-4">
            <Link
              to="/"
              className={`hover:text-emerald-300 transition-colors ${
                location.pathname === "/"
                  ? "text-emerald-400"
                  : "text-slate-300"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/review"
              className={`hover:text-emerald-300 transition-colors ${
                location.pathname === "/review"
                  ? "text-emerald-400"
                  : "text-slate-300"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Code Review
            </Link>
            <Link
              to="/review"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Try Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
