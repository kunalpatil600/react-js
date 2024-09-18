// This React app uses Redux to manage a counter and theme toggle.
//  The counterReducer handles increasing/decreasing the counter, and the themeReducer
//   toggles between light and dark modes. Both reducers are combined into a store,
//    and the Counter component dispatches actions to update the UI.
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT, TOGGLE_THEME } from '../Redux/action';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : 'black', color: theme === 'light' ? '#000' : '#fff', height:"100vh" ,}} className='col-12 text-center  pt-5'>
      <h1 className='' style={{marginTop:"13%"}}>COUNTER:{counter}</h1>
      <button onClick={() => dispatch({ type: INCREMENT, payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT, payload: 1 })} disabled={counter==0}>-</button>
      <h2>CURRENT THEME: {theme}</h2>
      <button onClick={() => dispatch({ type: TOGGLE_THEME })}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Counter;
