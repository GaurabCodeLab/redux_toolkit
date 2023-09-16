import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByValue } from './features/counterSlice';

function App() {
const data = useSelector((state)=>state.show.value);
const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>hello parent component</h1>
      <h1>Data From Store : {data}</h1>
      <button onClick={()=>dispatch(increment())} >Increment By One</button>
      <button onClick={()=>dispatch(decrement())} >Decrement By One</button>
      <button onClick={()=>dispatch(incrementByValue(10))} >Increment By Value</button>
    </div>
  );
}

export default App;
