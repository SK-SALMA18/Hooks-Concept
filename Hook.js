import React from "react";
import  ReactDOM from "react-dom/client";
import UsestateExample from "./components/Hooks/UsestateExample";
import UseeffectExample from "./components/Hooks/UseEffectExample";
import UserefExample from "./components/Hooks/UserefExample";
import UsereducerExample from "./components/Hooks/UsereducerExample";
import UsecallbackExample from "./components/Hooks/UsecallbackExample";
import UsememoExample from "./components/Hooks/UsememoExample";
import UsecontextExample from "./components/Hooks/UsecontexExample";
import CustomHook from "./components/Hooks/CustomHook";

const Examples=()=>{
    const style={
        color:"purple",
        textAlign:"center",
    }
    const style1={
        color:"seagreen",
        textAlign:"center",
    }
    return(
        <div>
            <h1 style={{...style}}>useState Example</h1>
            <UsestateExample/>
            <h1 style={{...style1}}>useEffect Example</h1>
            <UseeffectExample/>
            <h1 style={{...style}}>useContex Example</h1>
            <UsecontextExample/>
            <h1 style={{...style1}}>useRef Example</h1>
            <UserefExample/>
            <h1 style={{...style}}>useReducer Example</h1>
            <UsereducerExample/>
            <h1 style={{...style1}}>useCallback Example</h1>
            <UsecallbackExample/>
            <h1 style={{...style}}>useMemo Example</h1>
            <UsememoExample/>
            <h1 style={{...style1}}>Custom Hook Example</h1>
            <CustomHook/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Examples/>);