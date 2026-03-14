// import { useState } from 'react'
import './App.css'
// import ToDo from './ToDo'
import ToDo from "./ToDo";
// import Ghum from "./Ghum";
import Actor from './Actor.jsx';
import Singer from './Singer.jsx';
import Library from './Library.jsx';

function App() {
  // const time = 50;
  const actors = ["bappa raj", "Omar sany", "salman shah", "josim", "anwar"];
  const singers = [
    {id: 1, name: "Dr.Mahfuz", age: 68},
    {id: 2, name: "Tahsan", age: 45},
    {id:3, name: "shuvro deb", age: 57}
  ]

  const books = [
    {id: 1, name:"physics", price: 340},
    {id: 2, name:"Math", price: 240},
    {id: 3, name:"Biology", price: 450},
    {id: 4, name:"Chemistry", price: 300}
  ]
  

  return (
    <>
      <Library books={books}></Library>

      {
        actors.map(actor => <Actor actor = {actor}></Actor>)
      }
      {
        singers.map(singer => <Singer key = {singer.id} singer={singer}></Singer> )
      }
      {/* <Ghum HeadAche = {true} ghum= {"Ghumabo"}></Ghum>
      <Ghum HeadAche = {false} ghum= {"Ghumabo"}></Ghum> */}


      <h3>Alhamdulillah</h3>
      <button className='text'>hello</button>
      {/* <ToDo
        task="Learn React"
        isDone={true}>
      </ToDo>

      <ToDo
        task="Revise React"
        isDone={false}>
      </ToDo>

      <ToDo
        task="Js Learn"
        isDone={true}
        time={time}>
      </ToDo> */}
    </>
  )
}

export default App
