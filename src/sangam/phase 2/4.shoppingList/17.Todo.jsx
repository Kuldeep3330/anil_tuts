import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: task,
      done: false
    };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const toggleTodo = (id) => {
    const updated = todos.map(todo =>
      todo.id === id
        ? { ...todo, done: !todo.done }
        : todo
    );

    setTodos(updated);
  };

  const deleteTodo = (id) => {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
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
