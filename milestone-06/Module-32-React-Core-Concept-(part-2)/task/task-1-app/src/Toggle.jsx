import { useState } from "react"

export default function toggle () {
    //state declare
    const [show, setShow] = useState (false);

    const handleToggle = () => {
        setShow(!show);
    }
    

    return(
        <div>
            <h2>{show ? "Hello, React Learner" : ""}</h2>
            <button onClick={handleToggle}>Toggle</button>
        </div>
    )
}