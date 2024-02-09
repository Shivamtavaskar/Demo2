import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="my-4">
      <ul className='bg-white shadow overflow-hidden rounded-md divide-y divide-gray-200'>
        {todos.length === 0 && (
          <li className="px-4 py-3 text-sm text-gray-500">No todos</li>
        )}
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}
