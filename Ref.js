import React from "react";
import  ReactDOM from "react-dom/client";
import UseRef from "./components/UseRef";
import UseExample from "./components/UseExample";
import UseReducer from "./components/UseReducer";
import ExampleRef from "./components/ExampleRef";
import CallbackExample from "./components/CallbackExample";
import UseMemoExample from "./components/UseMemoExample";
import CustomExample from "./components/CustomExample";

const Hooks=()=>{
    const myStyle = {
        color: "white",
        backgroundColor: "skyblue",
        textAlign:"center"
      };
      const myStyles = {
        color: "black",
        backgroundColor: "green",
        textAlign:"center"
      };
    return(
        <div>
            <h2 style={{...myStyle}}> Hi Welcome to useRef Examples in Hooks Concept...</h2>
            <UseRef/>
            <UseExample/>
            <ExampleRef/>
            <h2 style={{...myStyles}}> Hi Welcome to useReducer Examples in Hooks Concept...</h2>
            <UseReducer/>
            <h2 style={{...myStyles}}> Hi Welcome to useCallback Examples in Hooks Concept...</h2>
            <CallbackExample/>
            <h2 style={{...myStyles}}> Hi Welcome to useMemo Examples in Hooks Concept...</h2>
            <UseMemoExample/>
            <h2 style={{...myStyles}}> Hi Welcome to CustomHook Examples in Hooks Concept...</h2>
            <CustomExample/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hooks/>)