import { useState,useEffect } from "react";
function UseEffectexample() {
    const[count,setCount]=useState(0)
    const[calculation,setCalculation]=useState(0)
    useEffect(()=>{
        setCalculation(()=>count*2);
    },[count])
    return(
        <div>
            <h3>Count: {count}</h3>
            <button type="button" onClick={()=>setCount((c)=>c+1)}>Click +</button>
            <h4>Calculate Value is:{calculation}</h4>
        </div>
    )
}
export default UseEffectexample;