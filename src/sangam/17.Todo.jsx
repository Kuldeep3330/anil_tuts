import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), task, done: false }]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      {todos.map(t => (
        <div key={t.id}>
          <span
            style={{ textDecoration: t.done ? "line-through" : "" }}
            onClick={() => toggleTodo(t.id)}
          >
            {t.task}
          </span>
          <button onClick={() => deleteTodo(t.id)}>X</button>
        </div>
      ))}
    </>
  );
}

export default Todo;
