import { useState, createContext, useContext } from "react";
const UserContext = createContext();
function UsecontextExample() {
  const [user, setUser] = useState("Salma Shaik");
  return (
    <div>
        <h3 style={{color:"tomato"}}>useContext - It manages the state globally and here we can use nested components to declare states.
        we will need to pass the state as "props" through each nested component. This is called "prop drilling".</h3>
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component1 />
    </UserContext.Provider>
    </div>
  );
}
function Component1() {
  return (
    <div>
      <h3>Component 1</h3>
      <Component2 />
    </div>
  );
}

function Component2() {
  return (
    <div>
      <h3>Component 2</h3>
      <Component3 />
    </div>
  );
}

function Component3() {
  return (
    <div>
      <h3>Component 3</h3>
      <Component4 />
    </div>
  );
}

function Component4() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Component 4</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
}
export default UsecontextExample;
