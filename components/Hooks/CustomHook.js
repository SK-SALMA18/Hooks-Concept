import React from "react";
import useFetch from "./useFetch";
function CustomHook(){
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    return (
      <div>
        <h3 style={{color:"olivedrab"}}>CustomHook - It start with "use". Example: useFetch...</h3>
        <center style={{backgroundColor:"goldenrod"}}>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
        </center>
      </div>
    );
  };
export default CustomHook;