import { useState,useEffect } from "react";
function CleanEffect(){
    const[count,setCount]=useState(0)
    useEffect(()=>{
        let timer=setTimeout(()=>{
            setCount(count=>count+1);
        },1000)
        return ()=>clearTimeout(timer)
    },[]);
    return(
        <div>
            <h3>The Counter value is rendering {count}!..</h3>
        </div>
    )
}
export default CleanEffect;