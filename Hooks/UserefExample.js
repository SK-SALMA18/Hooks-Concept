import { useRef } from "react";

function UserefExample(){
    const inputElement = useRef();
    const focusInput = () => {
      inputElement.current.focus();
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Form is Submitted ${inputElement}`);
    }
  return (
    <div>
    <h3 style={{color:"skyblue"}}>useRef - In useref the value that does not cause a re-render when updated.</h3>
    <form onSubmit={handleSubmit}> 
    <center style={{backgroundColor:"tomato"}}>
      <input type="text" placeholder="Enter Your Name" ref={inputElement}/><br/><br/>
      <input type="number" placeholder="Enter Your Age" ref={inputElement}/><br/><br/>
      <input type="submit"/>
      <button onClick={focusInput}>Focus Input</button>
    </center>
    </form>
    </div>
  );
}
export default UserefExample;