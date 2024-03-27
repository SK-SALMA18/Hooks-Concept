import { useState } from "react";
function UseContext(){
    const [user, setUser] = useState("Salma Shaik");

  return (
    <div>
      <h2>{`Hello ${user}!`}</h2>
      <Component1 user={user} />
    </div>
  );
}

function Component1({ user }) {
  return (
    <div>
      <h4>Component 1</h4>
      <Component2 user={user} />
    </div>
  );
}

function Component2({ user }) {
  return (
    <div>
      <h4>Component 2</h4>
      <Component3 user={user} />
    </div>
  );
}

function Component3({ user }) {
  return (
    <div>
      <h4>Component 3</h4>
      <Component4 user={user} />
    </div>
  );
}

function Component4({ user }) {
  return (
    <div>
      <h4>Component 4</h4>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
}
export default UseContext;