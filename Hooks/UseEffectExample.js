import React,{useEffect,useState} from "react";
import '../../Index.css';
function UseeffectExample(){
    const[effect,setEffect]=useState("")
    console.log('rendering')
    useEffect(()=>{
        console.log('changing the button')
    },[effect])
    return(
        <div>
            <h3 style={{color:"plum"}}>useEffect - It Performs a side effects in components</h3>
            <center style={{backgroundColor:"indigo"}}>
                    <button onClick={()=>setEffect('Hi Welcome to React')}>Get-Start</button>
                    <button onClick={()=>setEffect('Learn React Hooks Concept')}>Learn</button>
                    <button onClick={()=>setEffect('Know More About React Hook')}>More</button>
                    <h3>{effect}</h3>
            </center>
        </div>
    )
}
export default UseeffectExample;