import React from "react";
import  ReactDOM from "react-dom/client";
import UseContext from "./components/UseContext";
import UseContexts from "./components/UseContexts";

const Context=()=>{
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        textAlign:"center"
      };
    return(
        <div>
            <h2 style={{...myStyle}}> Hi Welcome to UseContext Examples in Hooks Concept...</h2>
            <UseContext/>
            <UseContexts/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Context/>)