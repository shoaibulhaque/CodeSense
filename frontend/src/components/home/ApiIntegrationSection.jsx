import React from "react";

const ApiIntegrationSection = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 mt-16 sm:mt-24 lg:mt-32 border border-slate-700/50 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
            Simple API Integration
          </h3>
          <p className="text-slate-300 mb-6">
            Get started with CodeSense in minutes. Our REST API makes it easy to
            integrate intelligent code analysis into your development workflow.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-sm shadow-emerald-400/50"></div>
              <span className="text-slate-300">Real-time code analysis</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-sm shadow-emerald-400/50"></div>
              <span className="text-slate-300">
                Support for 20+ programming languages
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-sm shadow-emerald-400/50"></div>
              <span className="text-slate-300">
                Detailed security & performance insights
              </span>
            </div>
          </div>
        </div>
        <div className="bg-slate-900/70 backdrop-blur-sm rounded-lg p-4 border border-slate-700/30">
          <div className="text-sm text-slate-400 mb-2">GET Request</div>
          <pre className="text-xs sm:text-sm text-slate-300 overflow-x-auto">
            <code>{`curl -X GET "http://localhost:3000/api/ai/get-review" \\
  -G \\
  -d "prompt=Review this JavaScript function: 
      function add(a, b) { return a + b; }"`}</code>
          </pre>
          <div className="text-sm text-slate-400 mt-4 mb-2">Response</div>
          <pre className="text-xs sm:text-sm text-emerald-400 overflow-x-auto">
            <code>{`{
  "success": true,
  "response": "✅ Code looks good! Consider adding...",
  "timestamp": "2025-07-20T10:30:00.000Z"
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ApiIntegrationSection;
