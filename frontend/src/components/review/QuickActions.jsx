import React from "react";

const QuickActions = ({ onLoadExample, onExportResults, hasResults }) => {
  const examples = [
    {
      name: "JavaScript Function",
      language: "javascript",
      code: `function calculateSum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Usage
let result = calculateSum([1, 2, 3, 4, 5]);
console.log(result);`,
    },
    {
      name: "Python Class",
      language: "python",
      code: `class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.is_active = True
    
    def activate(self):
        self.is_active = True
        
    def deactivate(self):
        self.is_active = False
        
    def get_info(self):
        return f"{self.name} ({self.email})"

# Usage
user = User("John Doe", "john@example.com")
print(user.get_info())`,
    },
    {
      name: "React Component",
      language: "javascript",
      code: `import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.completed ? '✓' : '○'} {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`,
    },
  ];

  return (
    <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-700/30">
      <h3 className="text-lg font-semibold text-slate-200 mb-4">
        Quick Actions
      </h3>

      {/* Example Code Snippets */}
      <div className="space-y-3 mb-6">
        <h4 className="text-sm font-medium text-slate-300">
          Try Example Code:
        </h4>
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => onLoadExample(example)}
            className="w-full text-left bg-slate-700/30 hover:bg-slate-700/50 rounded-lg p-3 transition-all border border-slate-600/20 hover:border-emerald-500/40 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-200 group-hover:text-emerald-300">
                {example.name}
              </span>
              <span className="text-xs text-slate-400 bg-slate-600/50 px-2 py-1 rounded">
                {example.language}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 truncate">
              {example.code.split("\n")[0]}...
            </p>
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={onExportResults}
          disabled={!hasResults}
          className="w-full flex items-center justify-center space-x-2 bg-slate-700/30 hover:bg-slate-700/50 disabled:bg-slate-700/20 text-slate-200 disabled:text-slate-500 py-3 rounded-lg transition-all disabled:cursor-not-allowed border border-slate-600/20 hover:border-slate-500/40"
        >
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
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <span>Export as PDF</span>
        </button>

        <button className="w-full flex items-center justify-center space-x-2 bg-slate-700/30 hover:bg-slate-700/50 text-slate-200 py-3 rounded-lg transition-all border border-slate-600/20 hover:border-slate-500/40">
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
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
            />
          </svg>
          <span>Share Analysis</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
