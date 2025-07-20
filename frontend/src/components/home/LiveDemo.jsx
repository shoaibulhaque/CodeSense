import React, { useState } from "react";

const LiveDemo = () => {
  const [codeInput, setCodeInput] = useState(`function calculateSum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}`);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-16 sm:mt-24 lg:mt-32">
      {/* Code Input */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-4 sm:p-6 relative border border-slate-700/50 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-200">Your Code</h3>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm shadow-red-500/50"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm shadow-yellow-500/50"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm shadow-green-500/50"></div>
          </div>
        </div>
        <textarea
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          className="w-full h-48 sm:h-64 bg-slate-900/70 backdrop-blur-sm text-slate-300 text-sm font-mono p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400/50 border border-slate-700/30"
          placeholder="Paste your code here for AI review..."
        />
        <button className="mt-4 w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-emerald-500/25">
          Analyze Code
        </button>
      </div>

      {/* AI Analysis Results */}
      <div className="bg-white/95 backdrop-blur-xl rounded-xl p-4 sm:p-6 shadow-2xl border border-white/20">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          CodeSense Analysis
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-red-600 font-medium">🔴 Critical</span>
              <span className="text-sm text-red-500">Performance Issue</span>
            </div>
            <p className="text-sm text-slate-700">
              Use <code className="bg-red-100 px-1 rounded">const</code> or{" "}
              <code className="bg-red-100 px-1 rounded">let</code> instead of{" "}
              <code className="bg-red-100 px-1 rounded">var</code> for better
              scoping
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 rounded-r">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-orange-600 font-medium">🟡 Medium</span>
              <span className="text-sm text-orange-500">Best Practice</span>
            </div>
            <p className="text-sm text-slate-700">
              Consider using{" "}
              <code className="bg-orange-100 px-1 rounded">reduce()</code> for
              more functional approach
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-blue-600 font-medium">💡 Suggestion</span>
              <span className="text-sm text-blue-500">Documentation</span>
            </div>
            <p className="text-sm text-slate-700">
              Add JSDoc comments to improve code documentation
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-green-600 font-medium">✅ Good</span>
              <span className="text-sm text-green-500">Structure</span>
            </div>
            <p className="text-sm text-slate-700">
              Function logic is clear and follows single responsibility
              principle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
