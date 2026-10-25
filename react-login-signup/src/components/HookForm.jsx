import React from 'react'
import { useForm } from 'react-hook-form';
const HookForm = () => {

 const {register,handleSubmit, reset, formState:{error}}=useForm();


  return (
    <div>HookForm

          <form onSubmit={handleSubmit((data)=>console.log(data))}>
            <div className='flex flex-col w-120 bg-amber-50 gap-4 p-5 items-center'>
                <input type="text" name="name" placeholder='name' className='border-1 h-12 w-full'{...register("username")} />
                <input type="email" name="email" placeholder='email' className='border-1 h-12 w-full'{...register("email")}/>
                <input type="password" name='password' placeholder='password' className='border-1 h-12  w-full'{...register("password")} />
                <input type="url" name="img" placeholder='image' {...register("img")}/>
                <button  type="submit"className='bg-blue-700 text-white h-12 w-full cursor-pointer'>Register</button><span>already have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>setToggle((prev)=>!prev)}>Login</span></span>
            </div>


            
        </form>
    </div>
  )
}

export default HookForm