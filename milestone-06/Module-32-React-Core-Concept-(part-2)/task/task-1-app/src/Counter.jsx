import { useState } from "react"

export default function Counter () {
    //State declare
    const [count, setState] = useState(0);

    function handleAdd () {
        return setState(count + 1);
    }

    function handleSub () {
        return setState (count - 1);
    }

    function handleReset () {
        return setState (0);
    }
    
    
    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Subtract</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}