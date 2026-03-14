import { useState, useEffect } from "react";

const generateCards = () => {
  const arr = [];
  for (let i = 1; i <= 8; i++) {
    arr.push(i);
    arr.push(i);
  }

  // Proper shuffle
  return arr.sort(() => Math.random() - 0.5);
};

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [opened, setOpened] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    setCards(generateCards());
  }, []);

  const handleClick = (index) => {
    if (
      opened.length === 2 ||
      opened.includes(index) ||
      matched.includes(index)
    ) {
      return;
    }

    setOpened((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (opened.length === 2) {
      const [first, second] = opened;

      if (cards[first] === cards[second]) {
        setMatched((prev) => [...prev, first, second]);
      }

      setTimeout(() => {
        setOpened([]);
      }, 800);
    }
  }, [opened, cards]);

  const isWinner = matched.length === cards.length;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Memory Game</h1>

      {isWinner && <h2>🎉 You Won!</h2>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 80px)",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {cards.map((num, index) => {
          const isOpen =
            opened.includes(index) || matched.includes(index);

          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              style={{
                height: "80px",
                width: "80px",
                background: "#ddd",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              {isOpen ? num : "?"}
            </div>
          );
        })}
      </div>
    </div>
  );
}