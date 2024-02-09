import React from 'react';

export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 transition-colors duration-200 ease-in-out">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="h-4 w-4 text-blue-500 focus:ring-blue-400 rounded"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span className={completed ? "line-through text-gray-500" : "text-gray-700"}>{title}</span>
      </label>
      <button
        className="text-red-500 hover:text-red-700 focus:outline-none"
        onClick={() => deleteTodo(id)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1h3a1 1 0 0 1 0 2h-.428l-1.003 11.034A2 2 0 0 1 14.574 20H5.426a2 2 0 0 1-1.995-1.966L3.428 7H3a1 1 0 0 1 0-2h3V5zm7 2H8v1h4V7zm-5 3a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm5 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </li>
  );
}
