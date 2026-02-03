import { useState } from "react";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    { title: "What is React?", content: "React is a JavaScript library for building UI." },
    { title: "What is MERN?", content: "MERN = MongoDB, Express, React, Node.js" },
    { title: "What is Node.js?", content: "Node.js allows running JS on the server." }
  ];

  const handleClick = (index) => {
    // If the same item is clicked again, close it
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Accordion Example</h2>

      {items.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ccc", marginBottom: "10px" }}>
          
          {/* Title */}
          <div
            onClick={() => handleClick(index)}
            style={{
              padding: "10px",
              background: "#f5f5f5",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {item.title}
          </div>

          {/* Content */}
          {openIndex === index && (
            <div style={{ padding: "10px", background: "#fff" }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
