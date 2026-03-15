import { useState } from "react"

export default function Bollar () {
    const divStyle = {
        border: "2px solid violet",
        padding: '20px',
        marginBottom: '10px'
    }
    const [balls, setBalls] = useState(0);
    const [over, setOver] = useState(0);
    const [noBalls, setNoBalls] = useState(0);

    const handleBallAdd = () => {
        const updatedBalls = balls + 1;
        if(updatedBalls <= 6){
            setBalls(updatedBalls);
        } else {
            setBalls(0);
            handleOver()
        }
    }
    const handleOver = () => {
        const updatedOver = over + 1;
        if(updatedOver <= 10 ){
            setOver(updatedOver);
        } else {
            setOver(0);
        }
    }
    const handleNoBalls = () => {
        const updatedNoBalls = noBalls + 1;
        setNoBalls(updatedNoBalls);
        
    }
    return (
        <div style={divStyle}>
            {
                noBalls > 0 && "NO balls that is bad performance"
            }
            <h1>Over: {over}</h1>
            <h3>Balls: {balls}</h3>
            <h3>No Balls: {noBalls}</h3>
            
            <button onClick={handleBallAdd}>Add Ball</button>
            <button onClick={handleNoBalls}>Add No Ball</button>
            {/* <button onClick={handleOver}>Add Over</button> */}


        </div>
    )
}