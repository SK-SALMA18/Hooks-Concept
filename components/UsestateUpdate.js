import {useState} from  "react";
function UsestateUpdate(){
    const[color,setColor]=useState("red")
    return(
        <div>
            <h3>My Favorite color is: {color}</h3>
            <button onClick={()=>setColor("pink")}>Click</button>
            {/* <button onClick={()=>setColor("Yellow")}>Click</button>
            <button onClick={()=>setColor("White")}>Click</button>
            <button onClick={()=>setColor("Black")}>Click</button>
            <button onClick={()=>setColor("Blue")}>Click</button>
            <button onClick={()=>setColor("violet")}>Click</button>
            <button onClick={()=>setColor("Gold")}>Click</button>
            <button onClick={()=>setColor("Pink")}>Click</button> */}

        </div>
    )
}
export default UsestateUpdate;