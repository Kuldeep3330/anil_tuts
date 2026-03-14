import { useRef, useState } from "react";

//kanban board
export default function DragAndDrop({ initialState }) {
  const [data, setData] = useState(initialState);
  const dragItem = useRef(null);
  const dragContainer = useRef(null);

  const handleDragStart = (e, item, container) => {
    dragItem.current = item;
    dragContainer.current = container;
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetContainer) => {
    e.preventDefault();

    const item = dragItem.current;
    const sourceContainer = dragContainer.current;

    // Same container me drop ignore
    if (sourceContainer === targetContainer) return;

    setData((prev) => {
      return {
        ...prev,
        [sourceContainer]: prev[sourceContainer].filter(
          (i) => i !== item
        ),
        [targetContainer]: [...prev[targetContainer], item],
      };
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {Object.keys(data).map((container) => (
        <div
          key={container}
          onDrop={(e) => handleDrop(e, container)}
          onDragOver={handleDragOver}
          style={{
            background: "#f0f0f0",
            padding: "1rem",
            width: 250,
            minHeight: 300,
          }}
        >
          <h2>{container}</h2>

          {data[container].map((item, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) =>
                handleDragStart(e, item, container)
              }
              onDragEnd={handleDragEnd}
              style={{
                userSelect: "none",
                padding: 16,
                marginBottom: 8,
                backgroundColor: "white",
                cursor: "move",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}