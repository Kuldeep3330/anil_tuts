import { useEffect, useState } from "react";

function ShoppingList() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [list, setList] = useState([]);

  // API call
  useEffect(() => {
    if (input.length < 2) {
      setSuggestions([]);
      return;
    }

    fetch(`https://dummyjson.com/products/search?q=${input}`)
      .then(res => res.json())
      .then(data => {
        const titles = data.products.map(p => p.title);
        setSuggestions(titles);
      });
  }, [input]);

  const addItem = (item) => {
    const newItem={ id: Date.now(), name: item, done: false }
    setList([...list, newItem]);
    setInput("");
    setSuggestions([]);
  };

  const toggleDone = (id) => {
    const updated=list.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    setList(updated);
  };

  const deleteItem = (id) => {
    const filtered=list.filter(item => item.id !== id)
    setList(filtered);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 30 }}>
      <h2>Shopping List</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type item..."
        style={{ padding: 8, fontSize: 16 }}
      />

      {/* Suggestions */}
      {suggestions.map((item, i) => (
        <div
          key={i}
          onClick={() => addItem(item)}
          style={{ cursor: "pointer", background: "#eee", margin: 5 }}
        >
          {item}
        </div>
      ))}

      {/* Final list */}
      {list.map(item => (
        <div key={item.id} style={{ marginTop: 10 }}>
          <span
            onClick={() => toggleDone(item.id)}
            style={{
              textDecoration: item.done ? "line-through" : "",
              cursor: "pointer"
            }}
          >
            {item.name}
          </span>

          <button onClick={() => deleteItem(item.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingList;
