import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
    const [initalValue, setInitalValue] = useState(0);
    useEffect(() => {
        document.title = `Chats(${initalValue})`;
    })

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
            </div>
        </>
    );
};

export default UseEffect;