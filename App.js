import React from "react";
import  ReactDOM  from "react-dom/client";
import UseEffect from "./components/UseEffect";
import UseEffectexample from "./components/UseEffectexample";
import CleanEffect from "./components/CleanEffect";
import Memo from "./components/Memo";



const Hooks=()=>{
    const style1={background:'white'};
    const style2 ={color:'black'};
    const style3={textAlign:'center'};
    return(
        <div>
            <h2 style={{...style1,...style2,...style3}}>Welcome to UseEffect Examples in Hooks Concept</h2>
            <UseEffect/>
            <UseEffectexample/>
            <CleanEffect/>
            <h2 style={{color:'red'}}>React Memo Concept</h2>
            <Memo/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hooks/>)