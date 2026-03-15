import { useState } from "react"

export default function Counter () {

    const [count, setCount]= useState(0);

    const handleAdd = () => {
        console.log("Add btn clicked");
        // setCount(5);
        const newCount = count + 1;
        setCount(newCount);
    }

    const counterStyle = {
        border: "3px solid red",
        padding: '10px',
        borderRadius: '20px',
        marginBottom: '10px',
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}