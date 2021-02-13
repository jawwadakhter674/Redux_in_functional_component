
import React from 'react';
import {useSelector , useDispatch} from 'react-redux'
import {increment,decrement} from './Action/index'
import Test from './Test'

function App() {
const counter = useSelector(state => state.counter)
const logged = useSelector(state => state.logged)
const dispatch =useDispatch();
  return (

<div>

  Counter : {counter}<br/>
<button onClick={()=>dispatch(increment())}>Increase</button>
  Counter : {counter}<br/>
<button onClick={()=>dispatch(decrement())}>Decrease</button>


{logged ? <h1>Logged Inn</h1>:<h1>LoggedOut</h1>}
<br/>
<br/>
<br/>
<br/>
<br/>
<Test />


</div>

  );
}

export default App;

