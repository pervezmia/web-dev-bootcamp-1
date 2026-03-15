
import './App.css'
import Counter from './Counter';
import Important from './Important';
import Count from './Count';
import Batsman from './Batsman';
import Bollar from './Bollar';
import Users from './User';
import { Suspense } from 'react';
import Friends from './Friends';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())


const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends();
  
  function handleClick () {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("clicked 3")
  } 
  const handleAdds = (num) => {
    const newNum = num + 5;
    alert(newNum);

  }
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h3>Friends are coming for treats...</h3>}>
        <Friends friendsPromise= {friendsPromise}></Friends>
      </Suspense>
      <Bollar></Bollar>
      <Batsman></Batsman>
      <Count></Count>
      <Important></Important>
      <h2>Vite + React</h2>
      <Counter></Counter>
      {/* <button onClick="handleClick()">click me</button> */}
      <div className='container'>
        <button className='primary-btn' onClick={handleClick}>click me</button>
      </div>
      <button onClick={function handleClick2(){
        alert("clicked me 2 uuuu")
      }}>click me 2</button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={()=> alert("clicked 4")}>Clicked me 4</button>
      {/* <button onClick={handleAdds(10)}>Clicked me 5</button> */}
      <button onClick={()=>handleAdds(5)}>clicked me 5</button>
      
    </>
  )
}

export default App
