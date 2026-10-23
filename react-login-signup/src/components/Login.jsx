import React, { useState } from 'react'

export const Login = ({setToggle}) => {
 


  return (

    
   
        <form >
            <div className='flex flex-col w-120 bg-amber-50 gap-4 p-5 items-center'>
                <input type="email" name="email" placeholder='email' className='border-1 h-12 w-full' />
                <input type="password" name='password' placeholder='password' className='border-1 h-12  w-full'/>
                <button type='submit' className='bg-blue-700 text-white h-12 w-full cursor-pointer' >Login</button><span>Didn't have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>setToggle((prev)=>!prev)}>Register</span></span>
            </div>
            
        </form>
   
  )
}
