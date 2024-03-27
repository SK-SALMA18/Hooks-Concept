import {React,useState} from 'react';
import '../App.css';
const myStyle={
    textAlign:"center",
    color:'white'
    
}
function BodyComponent(){
    const initialcount =0
    const [count,setCount]=useState(initialcount);
    function IncrementCount(){
        setCount(function(Count){
            return (Count=Count+1);
        });
    }
    function DecrementCount(){
        setCount(function(Count){
            // return(prevCount=prevCount-1);
            if(Count>0){
                return(Count=Count-1);
            }
            else{
                return (Count=0);
            }
        });
    }
    return(
        <div>
            <h1 style={myStyle}>Welcome to Counter Page</h1>
        <div className="bodycomp">
               
                <button onClick={IncrementCount}>Increment</button><br/>
                <button onClick={()=>setCount(initialcount)}>Reset</button><br/>
                <p>{count}</p>
                <button onClick={DecrementCount}>Decrement</button>
                
        </div>
            <h1 style={myStyle}>This is My Counter Page Output</h1>
        </div>
    )
}
export default BodyComponent;