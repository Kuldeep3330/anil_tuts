import { useEffect, useState } from "react";
import Signal from "./Signal";

export default function Traffic() {
  const lights = [
    { color: "green", duration: 3000 },
    { color: "yellow", duration: 1000 },
    { color: "red", duration: 2000 },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % lights.length);
    }, lights[active].duration);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div style={{
      background: "black",
      padding: 20,
      width: 80,
      borderRadius: 10
    }}>
      {lights.map((light, index) => (
        <Signal
          key={light.color}
          color={light.color}
          isActive={active === index}
        />
      ))}
    </div>
  );
}