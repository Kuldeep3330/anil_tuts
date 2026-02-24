import { useState } from "react";
import Input from "./Input";
import Display from "./Display";

function PArent(){
    const[text, setText]=useState("")

    return(
        <>
        <Input text={text} setText={setText}/>
        <Display text={text}/>
        </>
    )

}

export default PArent