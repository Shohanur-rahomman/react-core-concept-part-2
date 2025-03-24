
import { Suspense } from 'react'
import './App.css'
import Batsmen from './Batsmen'
import Users from './Users'
import Friends from './Friends';
import Posts from './Posts';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

const friends = async() => {
  const friendsDetails = await fetch('https://jsonplaceholder.typicode.com/users');
  return friendsDetails.json()
}
  
const posts = async() => {
  const postsData = await fetch('https://jsonplaceholder.typicode.com/posts');
  return postsData.json();
}
  

function App() {

  const friendPromise = friends()
  const postePromise = posts()
 

  return (
    <>
      
      <h1>Vite + React</h1>
      <Suspense fallback={<h2>data coming soon</h2>}>
        <Posts postePromise={postePromise}></Posts>
      </Suspense>

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
