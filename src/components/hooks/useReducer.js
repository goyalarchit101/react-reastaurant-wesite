import React, { useState, useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
    if (action.type === "INCR") {
        state = state + 1;
    }
    else if (action.type === "DECR") {
        state = state - 1;
    }
    return state;
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, 10);
    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div className="button2" onClick={() => {
                    dispatch({ type: "INCR" })
                }} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className="button2" onClick={() => {
                    dispatch({ type: "DECR" })
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    );
};

export default UseReducer;