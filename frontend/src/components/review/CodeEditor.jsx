import React from "react";

const CodeEditor = ({
  code,
  setCode,
  language,
  setLanguage,
  onAnalyze,
  isAnalyzing,
}) => {
  const languages = [
    { value: "javascript", label: "JavaScript", icon: "🟨" },
    { value: "python", label: "Python", icon: "🐍" },
    { value: "java", label: "Java", icon: "☕" },
    { value: "cpp", label: "C++", icon: "⚡" },
    { value: "go", label: "Go", icon: "🐹" },
    { value: "rust", label: "Rust", icon: "🦀" },
    { value: "typescript", label: "TypeScript", icon: "🔷" },
    { value: "php", label: "PHP", icon: "🐘" },
  ];

  return (
    <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-700/50 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Code Editor
          </h2>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm shadow-red-500/50"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm shadow-yellow-500/50"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm shadow-green-500/50"></div>
          </div>
        </div>

        {/* Language Selector */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-slate-700/80 text-slate-200 px-4 py-2 rounded-lg border border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all text-sm sm:text-base"
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.icon} {lang.label}
            </option>
          ))}
        </select>
      </div>

      {/* Code Textarea */}
      <div className="relative bg-slate-900/70 backdrop-blur-sm rounded-xl border border-slate-700/30 overflow-hidden">
        {/* Line numbers */}
        <div className="absolute top-0 left-0 bg-slate-800/50 border-r border-slate-700/30 text-slate-500 text-sm font-mono leading-relaxed pointer-events-none z-10 min-w-[3rem] text-right pr-3 py-6">
          {code.split("\n").map((_, index) => (
            <div key={index} className="h-5 px-1">
              {index + 1}
            </div>
          ))}
        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-96 bg-transparent text-slate-300 text-sm font-mono pl-16 pr-6 py-6 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400/50 leading-relaxed"
          placeholder={`// Paste your ${language} code here for AI-powered analysis
// CodeSense will check for bugs, security issues, performance problems, and best practices

function example() {
  console.log("Your code here...");
}`}
          spellCheck="false"
          style={{ lineHeight: "1.25rem" }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4">
        <div className="flex items-center space-x-4 order-2 sm:order-1">
          <span className="text-slate-400 text-sm">
            {code.length} characters, {code.split("\n").length} lines
          </span>
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 order-1 sm:order-2">
          <button
            onClick={() => setCode("")}
            className="px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg transition-all duration-300 border border-slate-600/30 text-center"
          >
            Clear
          </button>
          <button
            onClick={onAnalyze}
            disabled={!code.trim() || isAnalyzing}
            className="px-6 sm:px-8 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isAnalyzing ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
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
                <span>Analyze Code</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
