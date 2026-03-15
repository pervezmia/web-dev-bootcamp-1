export default function important () {
    const btn1 = () => alert("clicked me 1")
    function addHandle (num) {
        const newNum = num + 10
        alert(newNum)
    }
    return(
        <>
        <button onClick={btn1}>Btn-1</button>

        <button onClick={() => addHandle(5)}>Btn-2</button>
        
        </>
    )
}