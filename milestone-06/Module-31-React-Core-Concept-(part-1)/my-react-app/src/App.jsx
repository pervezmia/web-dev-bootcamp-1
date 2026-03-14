import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './todo'

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <ToDo info = "Okay" isDone = {true}></ToDo>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <Person></Person>
      <Person></Person>
      <Person></Person>
      <Sports></Sports> */}
      {/* <Pet></Pet> */}
      {/* <Developer name="Mojumder"></Developer>
      <Developer expert="javaScript"></Developer> */}
      {/* <Sport name="Pervez" expert="Football" favorite="Swimming"></Sport>
      <Sport name="Ahmed" expert="Cricket" favorite="Ha Du Du"></Sport>
      <Sport name="Mia" expert="Marathon" favorite="WWE"></Sport>
      <Player name="musfiq" runs= "4000"></Player>
      <Player name="Mahmudullah" runs= "6000"></Player>
      <Salami named="Pervez" amount="2000" event='Eid Ul Fitor'></Salami>
      <Salami named="Sohag" event='Graduation'></Salami>
      <Salami named="Ahmed" amount="1000" event='Achieve Skill'></Salami> */}
      


      
    </>
  )
}
const {named, amount, event} = {named: 'Pervez', amount: '2000', event: "Eid Ul Fitor"}
function Salami ({named, amount = 2000, event}) {
  // console.log(named);
  
  return(
    <div className='student'>
        <h1 >Salami for {event}</h1>
        <p>name: {named}</p>
        <h3>Amount: {amount}</h3>
    </div>
  )
}


const {name, runs}= {name: 'musfiq', runs: '4000'}
function Player ({name, runs}) {
  
  
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

// const {name, tech} = {name: "Pervez", tech: 'JS'}

function Sport (props) {
  return (
  <div style={{
    color: "white",
    background: "black",
    padding: '20px',
    border: '4px solid blue',
    borderRadius: "20px",
    fontSize: "bold",
    marginBottom: "20px"

  }}>

    <p>I am {props.name}</p>
    <h1>I expert in {props.expert}</h1>
    <h3>My favorite game {props.favorite}</h3>
  </div>
    
  )
}


// function Person() {
//   const age = 18;
//   const name = "Pervez";
//   return (
//     <>
//       <ul>
//         <li>mango</li>
//         <li>jackfruits</li>
//         <li>lichi</li>
//       </ul>
//       <Sports></Sports>
//       <p> I am a Person {age}</p>
//       <h3>Lorem ipsum dolor sit amet.</h3>
//     </>
//   )

// }

// function Sports() {
//   const cssStyle = {
//     color: 'red',
//     fontSize: "32px",
//     border: '8px solid violet',
//     borderRadius: "20px",
//     padding: '20px',
//     background: 'white'
//   }
//   return (
//     <>
//       <p style={cssStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sequi sint nemo optio ullam perferendis temporibus, praesentium velit eaque, sunt, aperiam quos obcaecati?</p>
//     </>
//   )
// }

// function Pet () {
//   return (
//     <>
//       <p className='style-of-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis voluptatum quia. Illo, veritatis, voluptas, fuga exercitationem maxime dolorum enim eos quis eligendi eum et vel veniam cum! Sed iure, officiis quisquam ex accusantium laboriosam eveniet totam quidem velit beatae rem excepturi cumque, nemo suscipit praesentium. Libero architecto similique impedit nulla officiis sunt quas atque officia provident! Ipsum mollitia, distinctio nostrum voluptas, impedit tempora voluptate quaerat aperiam expedita sequi quia ullam accusamus alias quos eaque vel nulla cupiditate repellat tempore consectetur provident delectus! Maiores vel aliquid commodi provident dicta hic consectetur, sunt placeat adipisci vero, veniam nam molestias id facilis, beatae deserunt delectus architecto. Earum omnis consequatur vero illo deleniti odio temporibus perferendis facere? Aperiam cumque adipisci et voluptatem consectetur asperiores velit facere vel? Ad a omnis ea officiis consequuntur saepe. Voluptatum esse nemo, reiciendis corporis deleniti quos nisi at quod non aliquid adipisci impedit aspernatur debitis error soluta nulla delectus explicabo, ipsam nobis. Pariatur ab ex vitae repellendus maiores natus asperiores nemo illo delectus, nam consectetur neque eius corrupti? Eius cumque labore suscipit aut ratione. Ipsa minus enim eveniet reiciendis odio error laborum doloremque mollitia. Iste quidem dolores rerum aperiam ducimus dolore beatae animi? Dolore corporis quas cupiditate ullam vero cumque, expedita, quia nam ipsam fuga cum sapiente aliquam provident, aliquid accusantium laborum soluta? Tenetur molestias at aliquam qui atque accusamus ipsa iusto illo debitis, doloribus, molestiae nam perferendis. Consectetur eveniet, sit fuga veniam ipsum nesciunt neque itaque voluptate amet asperiores. Voluptatibus dignissimos aspernatur quasi ex aliquam quia id exercitationem, explicabo ducimus necessitatibus obcaecati fugiat atque assumenda veritatis repellendus laudantium! Amet, veniam molestias. Provident eligendi autem nobis animi! Aliquam nam facere accusamus recusandae voluptas ex nihil. Illo, libero ullam consectetur consequuntur nihil eveniet, repellendus a distinctio doloribus, necessitatibus quidem at maxime beatae dolor voluptas commodi quis eum eius enim ad ex non voluptatem soluta. Neque odio labore consequuntur debitis dolorum minus minima laudantium obcaecati possimus harum perferendis mollitia, quasi earum sed, tempora reprehenderit unde accusantium pariatur illum quis totam repellendus? Molestiae, culpa dolores eum modi quia dolorum dolor aut eligendi voluptatum laboriosam minima debitis facere inventore quibusdam corrupti accusamus quisquam voluptatibus adipisci iusto numquam quo! Repellendus, nesciunt explicabo ipsum facilis iusto magnam. Quisquam sunt magnam fugiat modi similique repellendus dolore. Fugit, laudantium aut, nisi fuga blanditiis eveniet quas recusandae neque deleniti perferendis dolor inventore enim magni id ipsam perspiciatis dolorum. Debitis ratione aliquam culpa quia quam, cumque asperiores nemo.</p>
//     </>
//   )
// }

// function Developer(props) {
//   console.log(props);

//   const personStyle = {
//     color: "red",
//     textAlign: "right"
//   }
//   return(
//     <div style={personStyle}>
//       <h3>I expart in {props.expert}</h3>
//       <p>I am {props.name}</p>
//     </div>
//   )
  
 
// }

export default App
