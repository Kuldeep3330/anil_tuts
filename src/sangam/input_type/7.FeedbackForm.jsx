
/*  // server.js
import express from "express";

const app = express();
app.use(express.json());

app.post("/api/contact", (req, res) => {
  console.log(req.body); // form ka data
  res.status(200).json({ message: "Received successfully" });
});

app.listen(4000, () => console.log("Server running on 4000"));
 */
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // page reload hone se roke

    const data = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Form submitted successfully ✅");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (error) {
      console.log(error);
      setStatus("Server error ❌");
    }
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Message:</label>
          <br />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}

export default ContactForm;
