import { useState } from "react";

function ProgressBar() {
const [progress, setProgress] = useState(0);

const increase = () => {
setProgress((prev) => (prev < 100 ? prev + 10 : 100));
};

const decrease = () => {
setProgress((prev) => (prev > 0 ? prev - 10 : 0));
};

const reset = () => {
setProgress(0);
};

return (
<div style={{ textAlign: "center", marginTop: "50px" }}> <h2>Progress Bar</h2>

```
  {/* Progress Container */}
  <div
    style={{
      width: "300px",
      height: "30px",
      border: "1px solid black",
      margin: "20px auto",
      borderRadius: "5px",
      overflow: "hidden",
    }}
  >
    {/* Filled Progress */}
    <div
      style={{
        width: `${progress}%`,
        height: "100%",
        backgroundColor: "green",
        transition: "0.3s ease",
      }}
    ></div>
  </div>

  <h3>{progress}%</h3>

  <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={reset}>Reset</button>
  </div>
</div>
// ```

);
}

export default ProgressBar;
