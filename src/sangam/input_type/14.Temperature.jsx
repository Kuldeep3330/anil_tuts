import { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);

    if (value === "") {
      setFahrenheit("");
      return;
    }

    const f = (parseFloat(value) * 9) / 5 + 32;
    setFahrenheit(f.toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);

    if (value === "") {
      setCelsius("");
      return;
    }

    const c = ((parseFloat(value) - 32) * 5) / 9;
    setCelsius(c.toFixed(2));
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Temperature Converter</h2>

      <div>
        <label>Celsius (°C):</label>
        <br />
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>

      <br />

      <div>
        <label>Fahrenheit (°F):</label>
        <br />
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
}

export default TemperatureConverter;
