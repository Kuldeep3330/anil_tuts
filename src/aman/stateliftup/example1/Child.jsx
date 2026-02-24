function Child({onSend}){
    return (
        <button onClick={()=>onSend("hello Parent")}>Send data</button>
    )
}

export default Child