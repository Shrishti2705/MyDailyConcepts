import React from 'react'

const UsersCard = ({users}) => {
  return (
    <div className='p-3 flex'>
        <div className='border border-amber-50 h-fit flex flex-col gap-2 p-3'>
            <img src={users.image} className='w-40' alt="" />
        
            <p>Name:{users.name}</p>  
           <p>  Email:{users.email}</p>
             <p>contact:{users.number}</p>
             <div className='flex justify-center gap-2'><button  className='bg-green-500 p-2 rounded-xl cursor-pointer'>Update</button>
             <button className='bg-red-500 p-3 rounded-xl cursor-pointer '>Delete</button></div>
        </div>
    </div>
  )
}

export default UsersCard