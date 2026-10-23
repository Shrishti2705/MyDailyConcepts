import React, { useState } from 'react'

const Register = ({setToggle, setUsers}) => {
  const[formDATA, setFormData]=useState({
    "name":"shrihti",
    "email":"s@sgmail.com",
    "password":"123",
    "img":""
  })
 console.log(formDATA)
  

    const handlechange=(e)=>{
    const {name, value}=e.target
    setFormData({...formDATA, [name]:value})
   
  }

  const handleSumit=(e)=>{
    e.preventDefault()
    setUsers((prev)=>[...prev, formDATA])
  }
  return (
   
        <form onSubmit={handleSumit}>
            <div className='flex flex-col w-120 bg-amber-50 gap-4 p-5 items-center'>
                <input type="text" name="name" placeholder='name' className='border-1 h-12 w-full' onChange={handlechange} value={formDATA.name}/>
                <input type="email" name="email" placeholder='email' className='border-1 h-12 w-full' onChange={handlechange} value={formDATA.email}/>
                <input type="password" name='password' placeholder='password' className='border-1 h-12  w-full' onChange={handlechange} value={formDATA.password}/>
                <input type="url" name="img" placeholder='image' onChange={handlechange} value={formDATA.img}/>
                <button  type="submit"className='bg-blue-700 text-white h-12 w-full cursor-pointer'>Register</button><span>already have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>setToggle((prev)=>!prev)}>Login</span></span>
            </div>
            
        </form>
   
  )
}


export default Register