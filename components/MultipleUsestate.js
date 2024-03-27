import { useState } from "react";
function MultipleUsestate() {
    // const [name, setName] = useState("Salma");[arrays used here]
    // const [age, setAge] = useState("22");
    // now here we are using objects in state ...
    const [personal,setPersonal]=useState(
        {nam:"Salma",age:"21",profession:"Software developer"}
    )
      return (
      <div>
        <h3>My Name is {personal.nam}</h3>
        {/* <p>I am {personal.age} Years Old and</p>
        <h3>I am working as a {personal.profession} in Sazpin Software Private Limited Company...</h3> */}
      </div>
    )
  }
  export default MultipleUsestate;