import { useEffect, useRef, useState } from "react";

function InlineEditableInput() {
  const [items, setItems] = useState([
    { id: 1, text: "Hello" },
    { id: 2, text: "world" },
  ]);

  const [currentEditedID, setCurrentEditedID] = useState(null);
  const [currentEditedValue, setCurrentEditedValue] = useState("");
  const inputRef = useRef(null);

  // Focus on input when editing starts
  useEffect(() => {
    if (currentEditedID !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentEditedID]);

  // Start editing
  const handleEdit = (id, text) => {
    setCurrentEditedID(id);
    setCurrentEditedValue(text);
  };

  // Save edited text
  const saveChanges = () => {
    if (currentEditedID !== null) {
      setItems(
        items.map((item) =>
          item.id === currentEditedID
            ? { ...item, text: currentEditedValue }
            : item
        )
      );
      setCurrentEditedID(null);
    }
  };

  // Handle key events inside input
  const handleKeyDown = (event) => {
    if (event.key === "Enter") saveChanges(); // save on Enter
    if (event.key === "Escape") setCurrentEditedID(null); // cancel on Esc
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Inline Editable Input</h2>

      <div style={{ width: "300px", margin: "20px auto" }}>
        {items.map((item) =>
          currentEditedID === item.id ? (
            <input
              key={item.id}
              ref={inputRef}
              value={currentEditedValue}
              onChange={(e) => setCurrentEditedValue(e.target.value)}
              onBlur={saveChanges}
              onKeyDown={handleKeyDown}
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "16px",
              }}
            />
          ) : (
            <div
              key={item.id}
              onClick={() => handleEdit(item.id, item.text)}
              style={{
                backgroundColor: "#e0e0e0",
                padding: "10px",
                marginBottom: "10px",
                textAlign: "left",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              {item.text}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default InlineEditableInput;
