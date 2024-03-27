import { useState } from "react";
function UseState() {
    const[color,setColor]=useState("Red")
    return(
        <div>
            <h2>My Favorite Color is {color}</h2>
        </div>
    )
}
export default UseState;