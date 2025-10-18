import React, { useState, useRef, useEffect } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // will point to the dropdown container

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    // Function to handle clicks outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // close dropdown
      }
    };

    // Add listener to whole document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: "relative", textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggleDropdown}>Toggle Dropdown</button>

      {isOpen && (
        <div
          
          style={{
            position: "absolute",
            left: "50%",             
            transform: "translateX(-50%)",           
            border: "1px solid #ccc",
            padding: "10px",
            width: "150px",
          }}
        >
          <p>Dropdown Item 1</p>
          <p>Dropdown Item 2</p>
          <p>Dropdown Item 3</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
