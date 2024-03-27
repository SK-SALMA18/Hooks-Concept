import { useState } from "react";
function Count(){
    const initialcount=0
    const[count,setCount]=useState(initialcount)
    return(
        <div>
            <h3>Count: {count}</h3>
            <button type="button" onClick={()=>setCount(initialcount)}>Reset</button> 
            <button type="button" onClick={()=>setCount(count+1)}>Increment</button>
            <button type="button" onClick={()=>{count>0 ? setCount(count-1):setCount(count)}}>Decerement</button>
        </div>
    )
    
}
export default Count;
