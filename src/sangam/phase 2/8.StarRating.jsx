import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Star Rating</h2>

      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleClick(star)}
            style={{
              fontSize: 30,
              cursor: "pointer",
              color: star <= rating ? "gold" : "gray"
            }}
          >
            ★
          </span>
        ))}
      </div>

      <p style={{ marginTop: 10 }}>
        Rating: <b>{rating}</b>
      </p>
    </div>
  );
}

export default StarRating;
