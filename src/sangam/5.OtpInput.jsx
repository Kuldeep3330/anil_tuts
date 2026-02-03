import { useState, useRef } from "react";

function OtpInput() {
    const [otp, setOtp] = useState(["", "", "", ""])
    const inputsRef = useRef([]);

    const handleOtpChange = (value, idx) => {
        const newOtp = [...otp]
        newOtp[idx] = value.slice(-1);
        setOtp(newOtp)

        if (value && idx < otp.length - 1) {
            inputsRef.current[idx + 1].focus();
        }
    }

    const handleKeyDown = (idx, e) => {
        console.log(e.key);
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
                    type="text"
                    maxLength={1}
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
                    autoFocus={idx === 0}
                />
            ))}
            <p style={{ marginTop: "20px" }}>OTP Entered: {otpValue}</p>
        </div>
    )
}

export default OtpInput