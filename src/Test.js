import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './Action/index'
function Test(){
    const mycounter = useSelector(state => state.counter)
    const dispatch=useDispatch()
    
return(
    <div>
        <h1>{mycounter}</h1>
        <button onClick={()=>dispatch(increment())}>Increament</button>
        <button onClick={()=>dispatch(decrement())}>Decreament</button>
    </div>
)
}


export default Test;