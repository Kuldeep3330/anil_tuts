import { useState } from "react"

function TempConvertor(){
    const[celcius, setCelcius] = useState()
    const[fahrenheit, setFahrenheit]=useState()

    const celciusToFahrenheit=(value)=>(value*9)/5+32;
    const fahrenheitToCelsius = (value) => ((value - 32) * 5) / 9;

    const handleCelsiusToFahrenheit=(value)=>{
        setCelcius(value);
        if(value===""){
            setFahrenheit("")
            return;
        }
        setFahrenheit(celciusToFahrenheit(value).toFixed(2));
    }

    const handleFahrenheitToCelsius=(value)=>{
        setFahrenheit(value)
        if(value===""){
            setCelcius("")
            return;
        }else{
            setCelcius(fahrenheitToCelsius(value).toFixed(2));
        }
    }
    
    return(
        <div style={{textAlign: "center", marginTop:"50px"}}>
            <h2>temperature convertor</h2>
            <div style={{display:"flex", flexDirection:"column", width:"200px"}}>
                Celcius: <input type="number" value={celcius} onChange={(e) => handleCelsiusToFahrenheit(e.target.value)} placeholder="0" />
            Fahrenheit: <input type="number" value={fahrenheit} onChange={(e) => handleFahrenheitToCelsius(e.target.value)} placeholder="32" />
            </div>
        </div>
    )
}

export default TempConvertor