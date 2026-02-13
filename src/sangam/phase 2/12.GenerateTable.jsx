import { useState } from "react";

function GenerateTable() {
  const [rows, setRows] = useState("");
  const [cols, setCols] = useState("");

  const renderTable = () => {
    const r = parseInt(rows);
    const c = parseInt(cols);

    if (!r || !c) return null;

    let count = 1;

    return (
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <tbody>
          {Array.from({ length: r }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: c }).map((_, colIndex) => (
                <td key={colIndex}>{count++}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Generate Table</h2>

      <div>
        <label>Rows:</label>
        <br />
        <input
          type="number"
          value={rows}
          onChange={(e) => setRows(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Columns:</label>
        <br />
        <input
          type="number"
          value={cols}
          onChange={(e) => setCols(e.target.value)}
        />
      </div>

      <br />

      {renderTable()}
    </div>
  );
}

export default GenerateTable;
