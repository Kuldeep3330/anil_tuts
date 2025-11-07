import React, { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is a component?",
      answer:
        "A component is a reusable piece of UI that can have its own logic and styling.",
    },
    {
      question: "What is useState?",
      answer:
        "useState is a React Hook that lets you add state to functional components.",
    },
  ];

  const toggleFAQ = (index) => {
    // if same index clicked, close it; else open new one
    console.log(index);
    
    setOpenIndex(openIndex === index ? null : index);
  };
  console.log(openIndex);

  return (
    <div style={{ width: "400px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}> FAQ Section</h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "6px",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <div
            onClick={() => toggleFAQ(index)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <h4 style={{ margin: 0 }}>{faq.question}</h4>
            <span>{openIndex === index ? "-" : "+"}</span>
          </div>

          {openIndex === index && (
            <p style={{ marginTop: "10px", color: "#555" }}>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
