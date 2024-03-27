import { useState,useEffect } from "react";
function UseEffect(){
    const[count,setCount]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1)
        },1000);
    },[]);
    return(
        <div>
            <h3>The Counter value is rendering {count}!..</h3>
        </div>
    )
}
export default UseEffect;