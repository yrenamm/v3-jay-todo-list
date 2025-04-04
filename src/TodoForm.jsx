import React from 'react';

function TodoForm() {
  return (
    <form>
      <label htmlFor="todoTitle">Todo</label>
      <input id="todoTitle" type="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
