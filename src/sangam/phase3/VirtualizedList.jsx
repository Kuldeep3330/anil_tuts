import { useState } from "react";

export default function VirtualizedList({ list, height, width, itemHeight }) {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = Math.ceil(height / itemHeight);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    setStartIndex(Math.floor(scrollTop / itemHeight));
  };

  const visibleItems = list.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <div
      onScroll={handleScroll}
      style={{
        height,
        width,
        overflowY: "auto",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          height: list.length * itemHeight,
          position: "relative",
        }}
      >
        {visibleItems.map((item, index) => (
          <div
            key={startIndex + index}
            style={{
              position: "absolute",
              top: (startIndex + index) * itemHeight,
              height: itemHeight,
              width: "100%",
              background: "coral",
              borderBottom: "1px solid white",
              textAlign: "center",
              lineHeight: itemHeight + "px",
              color: "white",
            }}
          >
            Item {item}
          </div>
        ))}
      </div>
    </div>
  );
}