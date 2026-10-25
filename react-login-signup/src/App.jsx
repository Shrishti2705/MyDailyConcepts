import React, { useState } from 'react'
import { Login } from './components/Login'
// import Register from './components/Register'
import { Users } from './components/Users'
import HookForm from './components/HookForm'

export const App = () => {
  const[toggle, setToggle]=useState(false)
  const [users, setUsers]=useState([])
  return (
    <div className='bg-blue-900 h-screen flex justify-center items-center gap-5'>

      {/* <Register setToggle={setToggle} setUsers={setUsers}/>
    {users.map((elem)=><Users users={elem}/>)} */}
    <HookForm/>
    </div>
  )
}
