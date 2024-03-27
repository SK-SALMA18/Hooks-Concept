//Upadting Objects and Arrays in state by using the perviousState in Js Spreading Operator..
import { useState } from "react";
function UpdateMethod(){
    const[personal,setPersonal]=useState({
        name:"Salma",age:"22",profession:"Software Developer"});
    const UpdateDetails=()=>{
        setPersonal(perviousState=>{
            return{...perviousState,name:"Lakshmi",age:'22',profession:"Software Trainee"}
        })
    }
          return (
          <div>
            <h3>My Name is {personal.name}</h3>
            <p>I am {personal.age} Years Old and</p>
            <h3>I am working as a {personal.profession} in Sazpin Software Private Limited Company...</h3>
            <button type="button" onClick={UpdateDetails}>Click</button>
          </div>
        )
      }
export default UpdateMethod;