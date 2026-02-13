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
      //!dropdownRef.current.contains(event.target) Agar click dropdown ke andar nahi hua to close kar do.
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // close dropdown
      }
    };

    // Add listener to whole document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener when component unmounts
    //Component unmount hone par listener hata do.(Component unmount hone par listener hata do)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} style={{ textAlign: "center", marginTop: 50 }}>
      <button onClick={toggleDropdown}>Toggle Dropdown</button>

      {isOpen && (
        <div
          
          style={{
            border: "1px solid gray",
            width: 150,
            margin: "10px auto",
            padding: 10
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
