import React, { useReducer } from 'react';
import reducer from './Usereducer';

const initialValue = 0
export default function Statemanage() {
    const [count, Dispatch] = useReducer(reducer, initialValue)
    return (
        <div className="counter-container">
            <button className="btn" onClick={()=>Dispatch({ type: "INCREMENT" })}>+</button>
            <span id="count">{count}</span>
            <button className="btn" onClick={()=>Dispatch({ type: "DECREMENT" })}>-</button>
        </div>

    );
}
