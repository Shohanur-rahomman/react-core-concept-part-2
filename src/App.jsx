
import { Suspense } from 'react'
import './App.css'
import Batsmen from './Batsmen'
import Users from './Users'
import Friends from './Friends';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

const friends = async() => {
  const friendsDetails = await fetch('https://jsonplaceholder.typicode.com/users');
  return friendsDetails.json()
  }
  

function App() {

  const friendPromise = friends()
 

  return (
    <>
      
      <h1>Vite + React</h1>

      <Suspense fallback={<h2>friends coming soon</h2>}>
        <Friends friendPromise={friendPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h2>data loading</h2>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Batsmen></Batsmen>
      
    </>
  )
}

export default App
