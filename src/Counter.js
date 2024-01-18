import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementData, decrementData } from "./redux/userSlice"


function Counter({value, setValue, increment, decrement}) {
    const value2 = useSelector(state => state.users.users)
    const dispatch = useDispatch()

 
    return (
      <div>
      <h3>Counter</h3>
      <p>Hai</p>
      <div>
        <p>{value}</p>
        <p>{value2}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      </div>
    );
  }
  
  export default Counter;