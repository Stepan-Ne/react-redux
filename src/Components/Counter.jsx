import React, { useState } from 'react';
import store from '../redux/store';
import { incAC } from '../redux/rootReducer';


const Counter = ({state, dispatch}) => {

    let count = state.count;

    const foo = (op) => {
        dispatch(incAC(op))
        
    }
    store.subscribe(() => console.log(store.getState()))
    return <div>
        <h2>Coustom Redux</h2>
        <p>Count: {count}</p>
        <div>
            <button onClick={ () => {foo('INC')} }>Inc</button>
            <button onClick={ () => {foo('DEC')} }>Dec</button>
            <button onClick={ () => {} }>Async</button>
        </div>
    </div>
}



export default Counter;