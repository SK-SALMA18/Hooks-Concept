import React ,{useReducer} from "react";

function UsereducerExample(){
    const initialState ={count:0};
    function reducer(state,action){
        switch (action.type){
            case 'increment':
                return {count: state.count+1};
            case 'decrement':
                return {count:state.count-1};
            case 'reset':
                return {count:state.count=0};
            default:
                throw new Error();
        }
    }
    const[state,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            <h3 style={{color:"darkgoldenrod"}}>useReducer - It is similar to the useState Hook and It allows for custom state logic.</h3>
            <center style={{backgroundColor:"thistle"}}>
                <p>Count:{state.count}</p>
                <button onClick={()=>dispatch({type: 'increment'})}>Increment</button>
                <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
                <button onClick={()=>dispatch({type: 'decrement'})}>Decrement</button>
            </center>
        </div>
    )
}
export default UsereducerExample;