import { useState } from "react";

function MortgageCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEmi = () => {
    const P = parseFloat(amount);
    const annualRate = parseFloat(rate);
    const Y = parseFloat(years);

    if (!P || !annualRate || !Y) {
      setEmi(null);
      return;
    }

    const r = annualRate / 12 / 100; // monthly rate
    const n = Y * 12; // total months

    // EMI=P×r×Math.pow(1 + r, n)​/ Math.pow(1 + r, n)−1
    //r = Monthly interest rate = (annual rate / 12 / 100)
    // n = Total months = years × 12

    const emiValue =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    setEmi(emiValue.toFixed(2));
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Mortgage Calculator</h2>

      <div>
        <label>Loan Amount:</label>
        <br />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Annual Interest Rate (%):</label>
        <br />
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Loan Duration (Years):</label>
        <br />
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>

      <br />

      <button onClick={calculateEmi}>Calculate EMI</button>

      {emi && (
        <h3>
          Monthly EMI: ₹ {emi}
        </h3>
      )}
    </div>
  );
}

export default MortgageCalculator;
