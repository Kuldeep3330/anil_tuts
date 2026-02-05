import { useEffect, useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let interval;

    if (loading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    }

    return () => clearInterval(interval);
  }, [loading]);

  const startProgress = () => {
    setProgress(0);
    setLoading(true);
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Progress Bar</h2>

      <button onClick={startProgress} disabled={loading}>
        {loading ? "Loading..." : "Start"}
      </button>

      <div
        style={{
          marginTop: "20px",
          height: "25px",
          background: "#eee",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "dodgerblue",
            transition: "width 0.05s linear",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "12px",
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
