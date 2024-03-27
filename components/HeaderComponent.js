import React from "react";
import '../App.css';
function HeaderComponent(){
    const myStyle = {
        color: "white",
        backgroundColor:"aqua",
        textAlign:"center",
        padding:"45px"
      };
    return(
        <div className="head">
            <header>
                <h1>COUNTER PAGE</h1>
            </header>
        </div>
    )
}
export default HeaderComponent;