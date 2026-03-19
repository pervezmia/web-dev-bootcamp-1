import { useState } from "react"

export default function Counters () {

    //State declare  
    const [count, setState] = useState(0)

    function addOne () {
        return setState(count + 1)
    }

    function subOne () {
        return setState(count -1)
    }

    function reset () {
        return setState (0)
    }
    return(
        <div>
            <h3>Counts {count}</h3>
            <button onClick={addOne}>Add</button>
            <button onClick={subOne}>Sub</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}