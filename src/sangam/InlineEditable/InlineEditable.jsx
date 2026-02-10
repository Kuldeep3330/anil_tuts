import { useState } from "react";

function SimpleEditableList() {

  const [items, setItems] = useState(["Hello", "World"]);
  const [editIndex, setEditIndex] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const startEdit = (index) => {
    setEditIndex(index);
    setTempValue(items[index]);
  };

  const saveEdit = () => {
    const updated = [...items];
    updated[editIndex] = tempValue;
    setItems(updated);
    setEditIndex(null);
  };

  return (
    <div style={{ textAlign: "center" }}>

      {items.map((item, index) => (
        editIndex === index ? (
          <input
            key={index}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onBlur={saveEdit}
          />
        ) : (
          <p key={index} onClick={() => startEdit(index)}>
            {item}
          </p>
        )
      ))}

    </div>
  );
}

export default SimpleEditableList;
