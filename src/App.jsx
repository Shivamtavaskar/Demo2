import React, { useState, useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
//import crypto from 'crypto'; // Add this import statement

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITMES");
    return localValue ? JSON.parse(localValue) : [];
  });

  useEffect(() => {
    localStorage.setItem("ITMES", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: title, completed: false },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className='text-3xl font-bold text-center mt-8 text-blue-500'>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
