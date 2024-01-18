import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { useState } from "react";
import { incrementData, decrementData } from "./redux/userSlice"

function User() {

    var [value, setValue] = useState(0)
    const value2 = useSelector(state => state.users.users)
    const dispatch = useDispatch()



    function increment(){
        setValue(value + 1)
        dispatch(incrementData(value2))
    }

    function decrement(){
        setValue(value - 1)
        dispatch(decrementData(value2))

    }
 
    return (
      <div>
      <h3>Counter Page</h3>
      <div>
        <Counter 
        value={value}
        setValue={setValue}
        increment={increment}
        decrement={decrement}
        />
      </div>

      </div>
    );
  }
  
  export default User;