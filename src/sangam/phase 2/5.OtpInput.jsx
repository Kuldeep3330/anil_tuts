import { useState, useRef } from "react";

function OtpInput() {
    const [otp, setOtp] = useState(["", "", "", ""])
    const inputsRef = useRef([]);

    const handleOtpChange = (value, idx) => {
        const newOtp = [...otp]//array copy
        newOtp[idx] = value.slice(-1);//agar user multiple values dega to sirf last value lo
        setOtp(newOtp)

        {/*
            Condition ka matlab:
                Agar user ne kuch type kiya
                Aur ye last input nahi hai
             */}
        if (value && idx < otp.length - 1) { //auto focus next input
            inputsRef.current[idx + 1].focus();
        }
    }
    //Backspace logic
    const handleKeyDown = (idx, e) => {
        console.log(e.key);
    {/**Condition samjho:
            Backspace dabaya
            Current box empty hai
            Pehla box nahi hai
         */}
        if (e.key === "Backspace" && !otp[idx] && idx > 0) {
            inputsRef.current[idx - 1].focus();
        }
    }

    const otpValue = otp.join("");
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Enter OTP</h2>
            {otp.map((digit, idx) => (
                <input
                    key={idx}
                    type="text" //Jab type="number" use karte hain tab: backspace / arrows ka behaviour messy ho jata hai isliye OTP ke liye text hi better hota hai
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, idx)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    ref={(el) => (inputsRef.current[idx] = el)}
                    style={{
                        width: "40px",
                        height: "40px",
                        textAlign: "center",
                        fontSize: "18px",
                        margin: "5px",
                    }}
                />
            ))}
            <p style={{ marginTop: "20px" }}>OTP Entered: {otpValue}</p>
        </div>
    )
}

export default OtpInput