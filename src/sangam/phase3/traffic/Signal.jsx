export default function Signal({ color, isActive }) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        margin: "10px auto",
        backgroundColor: isActive ? color : "grey",
        transition: "background-color 0.3s",
      }}
    />
  );
}