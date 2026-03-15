import { useState } from "react"

export default function Count () {

    const [c,setc] = useState(0);
    const styleOfCount = {
        border: '1px solid red' , 
        padding: '10px',
        marginBottom: "10px"
    }

    const handleAdd = () => {
        const newC = c + 1;
        setc(newC);
    }
    
    return (
        <div style = {styleOfCount} >
            <p>Count: {c}</p>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}