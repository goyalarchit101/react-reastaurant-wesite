import React, { useState } from "react";
import "./style.css";

const UseState = () => {
    const [initalValue, setInitalValue] = useState(0);
    return (
        <>
            <div className="center_div">
                <p>{initalValue}</p>
                <div className="button2" onClick={() => setInitalValue(initalValue + 1)} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className="button2" onClick={() => initalValue <= 0 ? setInitalValue(0) : setInitalValue(initalValue - 1)}>
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

export default UseState;