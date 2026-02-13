import { useEffect, useState } from "react";

function Day1() {
    const [progress, setProgress]=useState(0)
    const[loading, setLoading]=useState(false)

    useEffect(()=>{
        let interval
        if(loading){
            interval=setInterval(()=>{
                setProgress(prev=>{
                    if(prev>=100){
                        clearInterval(interval)
                        setLoading(false)
                        return 100;
                    }
                    return prev+1
                })
            },50)
        }
        return () => clearInterval(interval);
    },[loading])

    const start=()=>{
        setProgress(0)
        setLoading(true)
    }

  return (
    <div style={{width:"500px", margin:"40px auto"}}>
        <h2>Auto Progess Bar</h2>

        <button onClick={start}>
            {loading?"Loading...":"start"}
        </button>

        <div
        style={{
            width:"300px",
            height:"30px",
            border:"2px solid red",
            borderRadius:"5px",
            margin:"20px auto"
        }}
        >
            {/*filled one */}
            <div
            style={{
                width:`${progress}%`,
                height:"100%",
                backgroundColor:"blue",
                transition:"0.05s ease"
            }}
            ></div>

        </div>
            <p>{progress}%</p>
    </div>
  );
}

export default Day1;
