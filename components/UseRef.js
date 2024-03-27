import {React,useRef} from "react";

function UseRef(){
    const ref=useRef(0);
    function handleClick()
    {
        ref.current=ref.current+1;
        alert(' Hi Your Count value is  ' + ref.current + ' times... ');
    }
    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
export default UseRef;