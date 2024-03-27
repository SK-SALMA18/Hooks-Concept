import { useState } from "react";
import Todos from "./Todos";
const UsecallbackExample = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodo((t) => [...t, "New Todo"]);
  };

  return (
    <div>
    <h3 style={{color:"purple"}}>useCallback - It returns a memoized callback function...</h3>
    <center style={{backgroundColor:"silver"}}>
      <Todos todos={todo} addTodo={addTodo} />
      <hr />
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
      </div>
      </center>
    </div>
  );
};
export default UsecallbackExample;