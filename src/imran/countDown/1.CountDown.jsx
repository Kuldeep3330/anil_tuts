import { useEffect, useState } from "react";
import './CountDown.css'


function CountdownTimer() {
    const [isStart, setIsStart] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerId, setTimerId] = useState(0);

    const handleStart = () => {
        if (hours < 0 || minutes < 0 || seconds <= 0) {
            alert("Invalid Input");
            return;
        } else {
            setIsStart(true);
        }
    }

    const handleResume = () => {
        setIsPaused(false);
        runTimer(seconds, minutes, hours);
    }
    const handlePause = () => {
        setIsPaused(true);
        clearInterval(timerId);
    }

    const handleReset = () => {
        setIsStart(false);
        resetTimer();
    }

    const resetTimer = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(timerId);
    }

    const handleInput = (e) => {
        console.log(e.target.id, e.target.value);
        const value = parseInt(e.target.value);
        const id = e.target.id;
        if (id === 'hours') {
            setHours(value);
        } else if (id === 'minutes') {
            setMinutes(value);
        } else {
            setSeconds(value);
        }
    }


    const runTimer = (sec, min, hr, tid) => {
        if (sec > 0) {
            setSeconds((s) => s - 1);
        } else if (sec === 0 && min > 0) {
            setMinutes((m) => m - 1);
            setSeconds(59);
        } else if (min === 0) {
            setHours((h) => h - 1);
            setMinutes(59);
            setSeconds(59);
        }

        if (sec === 0 && min === 0 && hr === 0) {
            // resetTimer();
            handleReset();
            alert('Timer is finished');
            clearInterval(tid);
            return
        }
    }

    useEffect(() => {
        let tid;
        if (isStart) {
            tid = setInterval(() => {
                runTimer(seconds, minutes, hourse, tid);
            }, 1000)
            setTimerId(tid);
        }

        return () => {
            clearInterval(tid);
        }
    }, [isStart, hours, minutes, seconds])
    console.log(hours, minutes, seconds)

    return (
        <div className="App">
            <h1>Countdown Timer</h1>
            {
                !isStart && (
                    <div className='input-container'>
                        <div className='input-box'>
                            <input
                                onChange={handleInput}
                                id="hours" placeholder='HH' />
                            <input
                                onChange={handleInput}
                                id="minutes" placeholder='MM' />
                            <input
                                onChange={handleInput}
                                id="seconds" placeholder='SS' />
                        </div>
                        <button
                            onClick={handleStart}
                            className='timer-button'>Start</button>
                    </div>
                )
            }

            {
                isStart &&
                (
                    <div className='show-contaienr'>
                        <div className='timer-box'>
                            <div>{hourse < 10 ? `0${hourse}` : hourse}</div>
                            <span>:</span>
                            <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
                            <span>:</span>
                            <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
                        </div>

                        <div className='action-box'>
                            {
                                !isPaused && <button
                                    onClick={handlePause}
                                    className='timer-button'>Pause</button>
                            }
                            {
                                isPaused && <button
                                    onClick={handleResume}
                                    className='timer-button'>Resume</button>
                            }
                            <button className='timer-button'
                                onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                )

            }

        </div>
    );

}

export default CountdownTimer