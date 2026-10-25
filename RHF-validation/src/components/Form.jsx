import React from 'react'
import { useForm } from 'react-hook-form';
const Form = ({setUsers, setToggle}) => {

    const {register, reset, handleSubmit, formState:{errors}}=useForm({mode:"onChange"})
    
    const formsubmit=(data)=>{
        setUsers((prev)=>[...prev, data])
reset()
setToggle((prev)=>!prev)
    }

  return (
    <div className=' flex flex-col items-center w-100 gap-4 bg-gray-700 p-10'>
        <h1 className='text-2xl'>User Information</h1>
        <form className='flex flex-col items-center justify-center gap-6' onSubmit={handleSubmit(formsubmit)}>


<input type="text" name="" placeholder='name' className='w-80 outline-none border border-amber-50 h-10 p-3' 
{...register("name",{
    required: "name must be required",

})}/>
{errors.name && (<p className='text-red flex justify-baseline'>{errors.name.message}</p>)}


<input type="email" placeholder='email' className='w-80 outline-none border border-amber-50 h-10 p-3'
 {...register("email",{
    required:"email must be required",
 })}/>
 {errors.email &&(<p className='text-red flex justify-baseline'>{errors.email.message}</p>)}


<input type="number" placeholder='number' className='w-80 outline-none border border-amber-50 h-10 p-3'
{...register("number",{
    required:"number must be required",
    minLength:{
        value:10,
        message:"min 10 numbers required"
    },
    maxLength:{
        value:10,
        message:"max 10 numbers required"
    }

})}/>
{errors.number && (<p className='text-red flex justify-baseline'>{errors.number.message}</p>)}



<input type="url" placeholder='image' className='w-80 outline-none border border-amber-50 h-10 p-3' 
{...register("image",{
    required:"url must be required"
})}/>
{errors.image && (<p className='text-red-600 flex justify-baseline'>{errors.image.message}</p>)}

<button className='bg-blue-700 w-80 h-10 rounded-xl cursor-pointer '>Create User</button>
        </form>
    </div>
  )
}

export default Form