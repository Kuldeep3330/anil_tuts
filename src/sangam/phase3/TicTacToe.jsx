import { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = (board) => {
    const winningPatterns = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const winner = checkWinner(board);

  return (
    <div>
      <h2>
        {winner
          ? `Winner: ${winner}`
          : `Turn: ${isXTurn ? "X" : "O"}`}
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        gap: "5px"
      }}>
        {board.map((value, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "100px",
              height: "100px",
              background: "#eee",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "30px",
              cursor: "pointer"
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

// import { useState } from "react";

// export default function TicTacToe() {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [isXTurn, setIsXTurn] = useState(true);

//   // 🏆 Winner Check Function
//   const checkWinner = (board) => {
//     const winningPatterns = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (let pattern of winningPatterns) {
//       const [a, b, c] = pattern;

//       if (
//         board[a] &&
//         board[a] === board[b] &&
//         board[a] === board[c]
//       ) {
//         return board[a]; // X ya O return karega
//       }
//     }

//     return null;
//   };

//   const winner = checkWinner(board);
//   const isDraw = !winner && board.every((cell) => cell !== null);

//   // 🎯 Click Handler
//   const handleClick = (index) => {
//     if (board[index] || winner) return;

//     const newBoard = [...board];
//     newBoard[index] = isXTurn ? "X" : "O";

//     setBoard(newBoard);
//     setIsXTurn(!isXTurn);
//   };

//   // 🔄 Reset Game
//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setIsXTurn(true);
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>
//         {winner
//           ? `🏆 Winner: ${winner}`
//           : isDraw
//           ? "🤝 It's a Draw!"
//           : `Turn: ${isXTurn ? "X" : "O"}`}
//       </h2>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 100px)",
//           gap: "5px",
//           justifyContent: "center",
//           margin: "20px auto",
//         }}
//       >
//         {board.map((value, index) => (
//           <div
//             key={index}
//             onClick={() => handleClick(index)}
//             style={{
//               width: "100px",
//               height: "100px",
//               background: "#eee",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               fontSize: "30px",
//               cursor: winner ? "not-allowed" : "pointer",
//             }}
//           >
//             {value}
//           </div>
//         ))}
//       </div>

//       <button onClick={resetGame}>🔄 Reset Game</button>
//     </div>
//   );
// }