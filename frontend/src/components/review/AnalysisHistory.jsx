import React from "react";

const AnalysisHistory = ({ history, onSelectHistory }) => {
  if (!history || history.length === 0) {
    return (
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-700/30">
        <h3 className="text-lg font-semibold text-slate-200 mb-4">
          Analysis History
        </h3>
        <div className="text-center py-6 sm:py-8">
          <div className="w-12 sm:w-16 h-12 sm:h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 sm:w-8 h-6 sm:h-8 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-slate-400 text-sm sm:text-base">
            No previous analyses
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-700/30">
      <h3 className="text-lg font-semibold text-slate-200 mb-4">
        Analysis History
      </h3>
      <div className="space-y-3 max-h-48 sm:max-h-64 overflow-y-auto">
        {history.map((item, index) => (
          <div
            key={index}
            onClick={() => onSelectHistory(item)}
            className="bg-slate-700/30 hover:bg-slate-700/50 rounded-lg p-3 cursor-pointer transition-all border border-slate-600/20 hover:border-slate-500/40"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-200">
                {item.language} • {item.timestamp}
              </span>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.score >= 80
                      ? "bg-emerald-400"
                      : item.score >= 60
                      ? "bg-yellow-400"
                      : "bg-red-400"
                  }`}
                ></div>
                <span className="text-xs text-slate-300">{item.score}/100</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 truncate">
              {item.codePreview}
            </p>
            <div className="flex items-center space-x-4 mt-2 text-xs text-slate-400">
              <span>{item.issuesCount} issues</span>
              <span>{item.linesCount} lines</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalysisHistory;
