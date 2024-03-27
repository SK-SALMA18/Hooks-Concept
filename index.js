import React from "react";
import  ReactDOM  from "react-dom/client";
import UseState from "./components/UseState";
import UsestateUpdate from "./components/UsestateUpdate";
import MultipleUsestate from "./components/MultipleUsestate";
import UpdateMethod from "./components/UpdateMethod";
import Count from "./components/Count";
import FormUsestate from "./components/FormUsestate";
import ExampleUsestate from "./components/ExampleUsestate";
const App = () =>
{
    const style1={background:'palegreen'};
    const style2 ={color:'white'};
    const style3={textAlign:'center'};
    return(
        <div>
            <h3 style={{...style1,...style2,...style3}}>Hi Welcome to UseState Examples HOOKS Concept...</h3>
            <UseState/>
            <UsestateUpdate/>
            <MultipleUsestate/>
            <UpdateMethod/>
            <Count/>
            <FormUsestate/>
            <ExampleUsestate/>
        </div>
    )
}
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);