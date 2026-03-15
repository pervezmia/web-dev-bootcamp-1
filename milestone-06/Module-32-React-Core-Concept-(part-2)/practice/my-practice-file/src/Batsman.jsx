import { useState } from "react"

export default function Batsman () {
    const styleOfCard = {
        border: "1px solid blue",
        padding: "20px",
        marginBottom: '10px'
    }
    const [runs, setRuns]= useState(0);
    const [six, setSix] = useState(0);

    const handleSingle = ()  =>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleFour = () => {
        const undatedRuns = runs + 4;
        setRuns(undatedRuns);
    }
    const handleSix = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns);
        const updatedSix = six + 1;
        setSix(updatedSix);
    }
    return (
        <div style={styleOfCard}>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {six}</small></p>
            {
                runs > 50 && "Your score is 50"
                
            }

            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}