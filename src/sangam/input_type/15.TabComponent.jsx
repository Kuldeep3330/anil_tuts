import { useState } from "react";

function Tabs() {
  const tabs = [
    { label: "Home", content: "This is Home tab content 🏠" },
    { label: "Profile", content: "This is Profile tab content 👤" },
    { label: "Settings", content: "This is Settings tab content ⚙️" },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Tabs Component</h2>

      {/* Tab Headers */}
      <div style={{ display: "flex", borderBottom: "2px solid #ddd" }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              padding: "10px 16px",
              border: "none",
              cursor: "pointer",
              background: activeTab === index ? "#007bff" : "transparent",
              color: activeTab === index ? "white" : "black",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ padding: "16px", border: "1px solid #ddd" }}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default Tabs;
