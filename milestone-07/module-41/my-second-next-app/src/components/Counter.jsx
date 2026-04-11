"use client"



import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);


    // console.log("Counter value in counter component", count);

    return (
        <div>
            <h3 className='text-5xl'>Counter: {count}</h3>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    );
};

export default Counter;