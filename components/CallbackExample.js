import React,{useState,useCallback} from "react";
import Todos from "./Todos";
function CallbackExample() {
    const[count,setCount]=useState(0)
    const[todo,setTodo]=useState([])
    // const addtodo=()=>{
    //     setTodo((t) => [...t, "New Todo"]);
    // }
    const addtodo = useCallback(() => {
        setTodo((t) => [...t, "New Todo"]);
      }, [todo]);
    return(
        <div>
             <Todos todo={todo} addTodo={addtodo}/>
            <hr />
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
export default CallbackExample;