import { useEffect, useState } from "react";

function ProgressBars() {
  const [bars, setBars] = useState([]);

  const addBar = () => {
    setBars((prev) => [...prev, 0]); // naya bar 0% se start
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prevBars) =>
        prevBars.map((value) =>
          value < 100 ? value + 1 : 100
        )
      );
    }, 50); // speed control

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "400px", backgroundColor:"yellow", margin: "50px auto" }}>
      <h2>Progress Bars</h2>
      <button onClick={addBar}>Add Progress Bar</button>

      <div style={{ marginTop: "20px" }}>
        {bars.map((value, index) => (
          <div
            key={index}
            style={{
              background: "#eee",
              borderRadius: "5px",
              marginBottom: "10px",
              height: "20px",   
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${value}%`,
                background: "pink",
                transition: "width 0.05s linear",
              }}
            ></div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBars;
