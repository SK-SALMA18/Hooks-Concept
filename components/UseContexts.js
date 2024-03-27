import { useState, createContext, useContext } from "react";
const UserContext = createContext();
function UseContexts() {
  const [user, setUser] = useState("Salma Sk");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <div>
      <h4>Component 2</h4>
      <Component3 />
    </div>
  );
}

function Component3() {
  return (
    <div>
      <h4>Component 3</h4>
      <Component4 />
    </div>
  );
}

function Component4() {
  return (
    <div>
      <h4>Component 4</h4>
      <Component5 />
    </div>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <div>
      <h4>Component 5</h4>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
}
export default UseContexts;

