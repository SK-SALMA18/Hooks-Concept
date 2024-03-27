import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'Salma', age: 18 };

 function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    }); 
  }

  return (
    <div>
      <input value={state.name} onChange={handleInputChange} /><br/><br/>
      <button onClick={handleButtonClick}>Increment</button>
      <p>Hello, {state.name}  are you {state.age} years old.</p>
    </div>
  );
}
export default UseReducer;