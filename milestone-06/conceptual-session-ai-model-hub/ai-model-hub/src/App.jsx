
import { useState } from 'react'
import './App.css'
import Models from './components/Models'

function App() {
  
  //lifting method 1
  const [named, setNamed]= useState("Alhamdulillah");
  const [age, setAge] = useState(20);
  
  //lifting method 2
  const handleAge = (age) => {
    console.log(age);
  }

  

  return (
    <>
      <div>{age}</div>
      <h3 className=''>{named}</h3>
      <button className="btn btn-info" onClick={()=> setNamed("Subhan-Allah")}>click me</button>
      <div>{age}</div>
      <Models handleAge = {handleAge} age= {age} setAge= {setAge}></Models>
    </>
  )
}

export default App
