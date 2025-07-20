import React from "react";
import ReactMarkdown from "react-markdown";

const AnalysisResults = ({ results, isAnalyzing, hasAnalyzed }) => {
  if (isAnalyzing) {
    return (
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-8 shadow-2xl border border-white/20">
        <div className="flex items-center justify-center space-x-3 py-8 sm:py-12">
          <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
          <span className="text-slate-600 text-base sm:text-lg font-medium">
            CodeSense AI is analyzing your code...
          </span>
        </div>
        <div className="text-center text-slate-500 text-sm mt-4">
          Please wait while our AI reviews your code for bugs, security issues,
          and best practices
        </div>
      </div>
    );
  }

  if (!hasAnalyzed) {
    return (
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border border-slate-700/30 text-center">
        <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 sm:w-10 h-8 sm:h-10 text-emerald-400"
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
        <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-2">
          Ready to analyze
        </h3>
        <p className="text-slate-400 text-sm sm:text-base">
          Paste your code and click "Analyze Code" to get AI-powered feedback
        </p>
      </div>
    );
  }

  // Handle error states
  if (results?.error) {
    return (
      <div className="bg-red-50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-red-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-red-800">
            Analysis Failed
          </h3>
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-100 rounded-r-lg">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-red-600 font-medium">🔴 Error</span>
              <span className="text-sm text-red-500">Connection Issue</span>
            </div>
            <p className="text-sm text-red-700 mb-2">{results.message}</p>
            {results.issues?.[0]?.suggestion && (
              <div className="text-sm bg-red-200 p-2 rounded mt-2">
                <strong>Solution:</strong> {results.issues[0].suggestion}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical":
        return "red";
      case "high":
        return "orange";
      case "medium":
        return "yellow";
      case "low":
        return "blue";
      case "info":
        return "green";
      default:
        return "gray";
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case "critical":
        return "🔴";
      case "high":
        return "🟠";
      case "medium":
        return "🟡";
      case "low":
        return "🔵";
      case "info":
        return "✅";
      default:
        return "📄";
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
          Analysis Results
        </h3>
        <div className="flex items-center space-x-2 text-sm text-slate-600">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span>Analysis complete</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
        <div className="bg-slate-50 rounded-lg p-3 text-center">
          <div className="text-xl sm:text-2xl font-bold text-red-600">
            {results.summary?.critical || 0}
          </div>
          <div className="text-xs sm:text-sm text-slate-600">Critical</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3 text-center">
          <div className="text-xl sm:text-2xl font-bold text-orange-600">
            {results.summary?.high || 0}
          </div>
          <div className="text-xs sm:text-sm text-slate-600">High</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3 text-center">
          <div className="text-xl sm:text-2xl font-bold text-yellow-600">
            {results.summary?.medium || 0}
          </div>
          <div className="text-xs sm:text-sm text-slate-600">Medium</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3 text-center">
          <div className="text-xl sm:text-2xl font-bold text-emerald-600">
            {results.summary?.info || 0}
          </div>
          <div className="text-xs sm:text-sm text-slate-600">Good</div>
        </div>
      </div>

      {/* Issues List */}
      <div className="space-y-4 max-h-80 sm:max-h-96 overflow-y-auto">
        {results.issues?.map((issue, index) => {
          const color = getSeverityColor(issue.severity);

          // Special handling for main AI review
          if (issue.isMainReview) {
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-4 border border-slate-200"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <span className="font-semibold text-slate-800">
                    🤖 CodeSense AI Analysis
                  </span>
                  <span className="text-sm px-2 py-1 rounded text-emerald-700 bg-emerald-200">
                    {issue.category}
                  </span>
                </div>
                <div className="prose prose-sm max-w-none text-slate-700">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                    {issue.description}
                  </pre>
                </div>
              </div>
            );
          }

          return (
            <div
              key={index}
              className={`border-l-4 border-${color}-500 pl-4 py-3 bg-${color}-50 rounded-r-lg hover:bg-${color}-100 transition-colors`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-medium text-slate-800">
                  {getSeverityIcon(issue.severity)} {issue.title}
                </span>
                <span
                  className={`text-sm px-2 py-1 rounded text-${color}-700 bg-${color}-200`}
                >
                  {issue.category}
                </span>
                {issue.line && (
                  <span className="text-sm text-slate-500">
                    Line {issue.line}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-700 mb-2">{issue.description}</p>
              {issue.suggestion && (
                <div className="text-sm bg-slate-100 p-2 rounded">
                  <strong>Suggestion:</strong> {issue.suggestion}
                </div>
              )}
              {issue.codeSnippet && (
                <div className="mt-2">
                  <code className="text-xs bg-slate-800 text-slate-200 p-2 rounded block overflow-x-auto">
                    {issue.codeSnippet}
                  </code>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Overall Score */}
      {results.score && (
        <div className="mt-6 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-slate-800">
              Code Quality Score
            </span>
            <div className="flex items-center space-x-3">
              <div className="w-24 bg-slate-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-1000 ${
                    results.score >= 80
                      ? "bg-emerald-500"
                      : results.score >= 60
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${results.score}%` }}
                ></div>
              </div>
              <span className="text-2xl font-bold text-slate-800">
                {results.score}/100
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisResults;
