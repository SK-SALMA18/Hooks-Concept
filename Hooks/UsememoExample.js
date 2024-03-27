import { useState } from "react";
function UsememoExample(){
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = expensiveCalculation(count);
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = () => {
      setTodos((t) => [...t, "New Todo"]);
    };
    return (
      <div>
        <h3 style={{color:"yellowgreen"}}>useMemo - It returns a memoized value...</h3>
        <div>
        <center style={{backgroundColor:"springgreen"}}>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
          </center>
        </div>
        <hr />
        <div>
        <center style={{backgroundColor:"springgreen"}}>
          <p>Count: {count}</p>
          <button onClick={increment}>+</button>
          <h2>Expensive Calculation</h2>
          <p>value: {calculation}</p>
        </center>
        </div>
      </div>
    );
  };
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i <=0; i++) {
      num += 1;
    }
    return num;
  };
export default UsememoExample;