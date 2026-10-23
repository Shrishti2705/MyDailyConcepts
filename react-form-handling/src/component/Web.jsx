import React, { useState } from 'react'

const Web = () => {
const[formData, setFormData]=useState({})
console.log(formData)



const handleSumit=(e)=>{
    let {name, value}=e.target
    setFormData({...formData, [name]:[value]})
  
}
  return (
    // <div className='flex flex-col w-60 border-2'>
    //     <input className='border-1 border-black' type="text" placeholder='name' onChange={(e)=>setFormData({...formData, name:e.target.value})}/>
    //     <input className='border-1 border-black' type="text" placeholder='email' onChange={(e)=>setFormData({...formData, email:e.target.value})} />
    //     <button className='bg-amber-300 text-black'>submit</button>
    // </div>



    <div className='flex flex-col w-60 border-2'>
        <input className='border-1 border-black' type="text" placeholder='name' name='name' onChange={handleSumit}/>
        <input className='border-1 border-black' type="text" placeholder='email' name='email'onChange={handleSumit} />
        <button className='bg-amber-300 text-black'>submit</button>
    </div>
  )
}

export default Web