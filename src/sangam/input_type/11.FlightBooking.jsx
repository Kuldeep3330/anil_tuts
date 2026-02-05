import { useState } from "react";

function FlightBooker() {
  const [tripType, setTripType] = useState("oneway");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = () => {
    if (!fromDate) {
      setMessage("Please select departure date ❌");
      return;
    }

    if (tripType === "return") {
      if (!toDate) {
        setMessage("Please select return date ❌");
        return;
      }

      if (new Date(toDate) < new Date(fromDate)) {
        setMessage("Return date cannot be before departure date ❌");
        return;
      }
    }

    setMessage("Flight booked successfully ✈️");
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Flight Booker</h2>

      <div>
        <label>Trip Type:</label>
        <br />
        <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
          <option value="oneway">One-way</option>
          <option value="return">Return</option>
        </select>
      </div>

      <br />

      <div>
        <label>Departure Date:</label>
        <br />
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>

      <br />

      {tripType === "return" && (
        <div>
          <label>Return Date:</label>
          <br />
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
      )}

      <br />

      <button onClick={handleBooking}>Book Flight</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default FlightBooker;
