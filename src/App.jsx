import React from 'react';
import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodoList([...todoList, { id: Date.now(), title: newTodo }]);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
