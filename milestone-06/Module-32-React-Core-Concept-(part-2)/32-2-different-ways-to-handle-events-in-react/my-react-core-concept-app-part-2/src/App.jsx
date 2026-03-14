
import './App.css'

function App() {

  function handleClick () {
    alert("I am clicked");
  }

  const handleClicked3 = () => {
    alert ("clicked 3")
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert (newNum);
  }

  return (
    <>
      <h3>Get started</h3>
      {/* <button onClick="handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={ function handleClick () {
        alert("click me 2");
      }}>Click me 2</button>

      <button onClick={handleClicked3}>Click me 3</button>
      <button onClick={() => alert("clicked 4")}> click</button>
      <button onClick={() => handleAdd5(50)}>click add 5</button>
    </>
  )
}

export default App
