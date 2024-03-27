import React from "react";
import  ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";


const Task=()=>{
    return(
        <div>
            <HeaderComponent/>
            <BodyComponent/>
            <FooterComponent/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Task/>)