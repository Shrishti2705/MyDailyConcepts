import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UsersCard from './components/UsersCard'
import Form from './components/Form'

const App = () => {
  const[toggle, setToggle]=useState(true)
  const [users, setUsers]=useState([])
  console.log(users)
  return (
    <div  className='p-3 h-screen'>
      <Navbar setToggle={setToggle}/>
{toggle?(
      users.map((elem)=>{
        return <div className='flex flex-wrap'><UsersCard users={elem}/></div>
      })
):(
  <div className='flex items-center justify-center p-10 '><Form setUsers={setUsers} setToggle={setToggle}/></div>
)}
      </div>


      
     
   
  )
}

export default App