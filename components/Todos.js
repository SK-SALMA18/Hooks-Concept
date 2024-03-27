import { React,memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, memo) => {
        return <p key={memo}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);
// import { memo,React } from "react";

// const Todos = ({ todo, addTodo }) => {
//   console.log("child render");
//   return (
//     <div>
//       <h2>My Todos</h2>
//       {todo.map((todo, CallbackExample) => {
//         return <p key={CallbackExample}>{todo}</p>;
//       })}
//       <button onClick={addTodo}>Add Todo</button>
//     </div>
//   );
// };

// export default memo(Todos);