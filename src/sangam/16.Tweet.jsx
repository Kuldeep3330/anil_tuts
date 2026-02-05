import { useState } from "react";

function Tweet({ name, handle, content, likes, retweets }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const toggleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "12px",
        borderRadius: "8px",
        width: "400px",
        margin: "20px auto",
        fontFamily: "Arial",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <img
          src="https://via.placeholder.com/50"
          alt="avatar"
          style={{ borderRadius: "50%" }}
        />

        <div>
          <strong>{name}</strong>{" "}
          <span style={{ color: "gray" }}>{handle}</span>
          <p style={{ margin: "6px 0" }}>{content}</p>
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
        <button onClick={toggleLike}>
          {liked ? "❤️ Liked" : "🤍 Like"} ({likeCount})
        </button>

        <span>🔁 Retweets: {retweets}</span>
      </div>
    </div>
  );
}

export default Tweet;

/**function App() {
  return (
    <div>
      <Tweet
        name="Rahul"
        handle="@rahul_dev"
        content="React interview prep chal rahi hai 💪"
        likes={12}
        retweets={3}
      />

      <Tweet
        name="Life of Shift"
        handle="@lifeofshift"
        content="Night shift struggles are real 😴"
        likes={45}
        retweets={10}
      />
    </div>
  );
}

export default App;
 */