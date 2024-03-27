// import React , {useState} from "react";
// function UsestateExample(){
//     const initialcount=0
//     const[count,setCount]=useState(initialcount)
//     return(
//         <div className="container">
//             <h3 style={{color:"brown"}}>useState - It tracks the state in functional component..</h3>
//             <center>
//                     <button onClick={()=>setCount(count+1)}>Increment</button>
//                     <button onClick={()=>setCount(initialcount)}>Reset</button>
//                     <button onClick={()=>{count>0 ? setCount(count-1):setCount(count)}}>Decrement</button>
//                     <h2>{count}</h2>
//             </center>
//         </div>
//     )
// }
// export default UsestateExample;



import React,{useState} from "react";
function UsestateExample(){
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  return (
    <form onSubmit={handleSubmit}>
      <center style={{backgroundColor:"pink"}}>
            <label>NAME:
            <input type="text" placeholder="Username" value={inputs.username} onChange={handleChange}/>
            </label><br/><br/>
            <label>AGE:
            <input type="number" placeholder="Age" value={inputs.age} onChange={handleChange}/>
              </label><br/><br/>
              <label>ADDRESS: <textarea value={inputs.textarea} onChange={handleChange} /></label><br/><br/>
              <label>COURSE:
              <select value={inputs.selects} onChange={handleChange}>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JAVASCRIPT</option>
                    <option value="node js">NODE.JS</option>
                    <option value="react js">REACT.JS</option>
                </select>
              </label><br/><br/>
            <input type="submit"/>
        </center>
    </form>
  )
}
export default UsestateExample;