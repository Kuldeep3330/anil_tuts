import { useState } from "react";

export default function FileExplorer({ folderData }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (folderData.type === "folder") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        {folderData.type === "folder"
          ? isOpen
            ? "📂"
            : "📁"
          : "📄"}{" "}
        {folderData.name}
      </div>

      {isOpen &&
        folderData.children?.map((child) => (
          <FileExplorer
            key={child.name}
            folderData={child}
          />
        ))}
    </div>
  );
}