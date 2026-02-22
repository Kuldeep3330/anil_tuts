import { useState, useEffect } from "react";

function CountdownTimer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const format = (sec) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
    // return `${h}:${m}:${s}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>{format(time)}</h2>

      <input
        type="number"
        placeholder="Seconds"
        onChange={(e) => setTime(parseInt(e.target.value) || 0)}
      />

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={() => { setRunning(false); setTime(0); }}>Reset</button>
    </div>
  );
}

export default CountdownTimer;
