import React from 'react'

function Navbar({setToggle}) {
  return (
    <div className='p-5 rounded-2xl flex items-center justify-between bg-gray-800 h-20'>
        <div><img src="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png" alt="" className='w-15' /></div>
        <div className='flex gap-6'><a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a></div>
        <div><button className='bg-blue-500 rounded-2xl p-3 cursor-pointer' onClick={()=>setToggle((prev)=>!prev)}>Create Users</button></div>

    </div>
  )
}

export default Navbar