import React, { useState } from 'react';
import { incAC, asyncInc } from '../redux/rootReducer';


const Counter = ({state, dispatch}) => {

    let count = state.count;

    const foo = (op) => {
        dispatch(incAC(op))
    }
    const fooThunk = () => {
        asyncInc()(dispatch)
    }
  
    return <div>
        <h2>Coustom Redux</h2>
        <p>Count: {count}</p>
        <div>
            <button onClick={ () => {foo('INC')} }>Inc</button>
            <button onClick={ () => {foo('DEC')} }>Dec</button>
            <button onClick={ () => {fooThunk()} }>Async</button>
        </div>
    </div>
}



export default Counter;