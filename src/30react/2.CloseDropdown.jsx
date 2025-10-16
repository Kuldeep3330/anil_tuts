import { useEffect, useState } from "react"


function ClickOutsideDropdown(){
    const[isOpen, setIsOpen]=useState(false)
    const dropdownRef= useRef(null);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };
    
    useEffect(()=>{
        const handleClickOutside=(event)=>{
            console.log(dropdownRef);
            

        }

        document.addEventListener("mousedown", handleClickOutside);
    })
    return(
        <div style={{position: "relative", textAlign:"center", marginTop:"50px"}}>
            <button onClick={toggleDropdown}>Dropdown</button>
            {
                isOpen && (
                    <div
                        ref={dropdownRef}
                        style={{
                            position: "absolute",
                            top: "40px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#fff",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "10px",
                            width: "150px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
                        }}
                    >

                        <p>Dropdown Item 1</p>
                        <p>Dropdown Item 2</p>
                        <p>Dropdown Item 3</p>
                    </div>
                )
            }
        </div>
    )
}

export default ClickOutsideDropdown