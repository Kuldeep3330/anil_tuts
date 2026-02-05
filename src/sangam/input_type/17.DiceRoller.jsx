import { useState } from "react";

function DiceRoller() {
  const [dice, setDice] = useState(1);

  const rollDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    setDice(random);
  };

  return (
    <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Dice Roller 🎲</h2>

      <div
        style={{
          fontSize: "60px",
          margin: "20px",
          border: "2px solid #333",
          borderRadius: "8px",
          padding: "20px",
          display: "inline-block",
          width: "100px",
        }}
      >
        {dice}
      </div>

      <br />

      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default DiceRoller;
