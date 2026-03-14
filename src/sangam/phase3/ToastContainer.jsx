import { useState } from "react";

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  const handleAdd = (message, type) => {
    const id = Date.now();

    const newToast = { id, message, type };
    setToasts((prev) => [...prev, newToast]);

    // Auto remove after 3 sec
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  const handleClose = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const getBackgroundColor = (type) => {
    switch (type) {
      case "success":
        return "#46af46";
      case "error":
        return "#df5239";
      case "warning":
        return "#fca200";
      case "info":
        return "#5899fe";
      default:
        return "#333";
    }
  };

  return (
    <div>
      {/* Toast Container */}
      <div
        style={{
          position: "fixed",
          top: "0.5rem",
          right: "0.5rem",
          zIndex: 1000,
        }}
      >
        {toasts.map(({ id, message, type }) => (
          <div
            key={id}
            style={{
              backgroundColor: getBackgroundColor(type),
              width: "12rem",
              padding: "1rem",
              color: "white",
              borderRadius: "0.5rem",
              position: "relative",
              margin: "0.5rem",
              animation: "slide 0.3s ease-in-out",
            }}
          >
            {message}
            <span
              onClick={() => handleClose(id)}
              style={{
                position: "absolute",
                right: "1rem",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ×
            </span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ padding: "2rem" }}>
        <button onClick={() => handleAdd("Success", "success")}>
          Success
        </button>
        <button
          onClick={() => handleAdd("Error", "error")}
          style={{ marginLeft: "1rem" }}
        >
          Error
        </button>
      </div>
    </div>
  );
}