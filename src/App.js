import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementCustom } from './redux/features/counter/counterSlice';
import { useEffect } from 'react';
import { getCountry } from './redux/features/country/countrySlice';

function App() {

  const dispatch = useDispatch();


  const {counter} = useSelector(state => state.counter);
  const {country, loading} = useSelector(state => state.country);

  console.log(counter)
  console.log(country)

  useEffect(() => {
   dispatch(getCountry())
  }, [dispatch])
 
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementCustom(4))}>+4 olaraq artir</button>
    </div>
  );
}

export default App;
