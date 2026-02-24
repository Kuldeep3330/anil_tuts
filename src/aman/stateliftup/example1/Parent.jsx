/**
 react me direct child->parent data flow possible nhi hota
 react ka data flow top-> down (unidirectional) hota hai
 to child se parent me data bhejne je liye ek trick use karte hai
 ///Parent function pass karta hai child ko(as prop)

 */

import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("");

  const handleData = (value) => {
    setMessage(value); // child se aaya data state me store
  };

  return (
    <div>
      <h2>Message from Child: {message}</h2>
      <Child onSend={handleData} />
    </div>
  );
}

export default Parent;
/**
 * "Child se parent communication React me directly possible nahi hota. Isliye parent ek callback function child ko props ke through deta hai. Jab child us function ko call karta hai, tab parent ka state update hota hai."
 */
