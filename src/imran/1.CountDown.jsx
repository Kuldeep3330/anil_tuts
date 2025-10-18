import { useEffect, useState } from "react";


function CountdownTimer(){
    const [minutes, setMinutes] = useState(1); // initial minutes
    const [seconds, setSeconds] = useState(0); // initial seconds
    const[isRunning, setIsRunning]=useState(false)

    useEffect(()=>{
        let timerId
        if (isRunning){
        timerId= setInterval(()=>{
            setSeconds((prevSec)=>{
                if(prevSec>0){
                    return prevSec-1;
                }else if(minutes>0){
                    setMinutes((prevMin)=>prevMin-1)
                    setSeconds(59);
                    return seconds;
                }else{
                    setIsRunning(false);
                    return 0;
                }
            })

        },1000)
    }

        return ()=>clearInterval(timerId)

    },[isRunning,seconds, minutes])

    const handleStart=()=>{
        if(minutes===0 && seconds===0) return;
        setIsRunning(true)}

    const handleStop=()=>{
        setIsRunning(false)
    }

    const handleReset=()=>{
        setIsRunning(false)
        setMinutes(1)
        setSeconds(0)
    }
    const handleMinuteChange = (e) => {
        setMinutes(Number(e.target.value));
    };

    const handleSecondChange = (e) => {
        const value = Number(e.target.value);
        setSeconds(value >= 60 ? 59 : value); // limit seconds to 59
    };


    return(<>
    <div style={{textAlign:"center", marginTop:"50px"}}>
        <h2>Countdown timer</h2>
        <div style={{ marginBottom: "15px" }}>
        <input
          type="number"
          value={minutes}
          onChange={handleMinuteChange}
          disabled={isRunning}
          style={{ width: "60px", padding: "5px", marginRight: "8px" }}
        />
        <span>min</span>

        <input
          type="number"
          value={seconds}
          onChange={handleSecondChange}
          disabled={isRunning}
          style={{ width: "60px", padding: "5px", marginLeft: "8px" }}
        />
        <span>sec</span>
         </div>
        <button onClick={handleStart} disabled={isRunning || (minutes === 0 && seconds === 0)}>start</button>
        <button onClick={handleStop} disabled={!isRunning}>stop</button>
        <button onClick={handleReset}>reset</button>
    </div>
    </>)
}

export default CountdownTimer