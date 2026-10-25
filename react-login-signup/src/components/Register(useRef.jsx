import React, { useRef, useState } from 'react'

const Register = ({setToggle, setUsers}) => {
//   const[formDATA, setFormData]=useState({
//     "name":"shrihti",
//     "email":"s@sgmail.com",
//     "password":"123",
//     "img":""
//   })
//  console.log(formDATA)
  


const formRef=useRef({})

const [data, setData]=useState({})
console.log(data)



  //   const handlechange=(e)=>{
  //   const {name, value}=e.target
  //   setFormData({...formDATA, [name]:value})
   
  // }

  const handleSumit=(e)=>{
    e.preventDefault()
    // setUsers((prev)=>[...prev, formDATA])
    let obj={
      pname: formRef.current.username.value,
      email:formRef.current.email.value,
      pass:formRef.current.password.value,
      img:formRef.current.img.value,
    }
    console.log(obj)

    setData(obj)
  }
  return (
   <>
        {/* // <form onSubmit={handleSumit}>
        //     <div className='flex flex-col w-120 bg-amber-50 gap-4 p-5 items-center'>
        //         <input type="text" name="name" placeholder='name' className='border-1 h-12 w-full' onChange={handlechange} value={formDATA.name}/>
        //         <input type="email" name="email" placeholder='email' className='border-1 h-12 w-full' onChange={handlechange} value={formDATA.email}/>
        //         <input type="password" name='password' placeholder='password' className='border-1 h-12  w-full' onChange={handlechange} value={formDATA.password}/>
        //         <input type="url" name="img" placeholder='image' onChange={handlechange} value={formDATA.img}/>
        //         <button  type="submit"className='bg-blue-700 text-white h-12 w-full cursor-pointer'>Register</button><span>already have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>setToggle((prev)=>!prev)}>Login</span></span>
        //     </div>
            
        // </form> */}
   





          <form onSubmit={handleSumit}>
            <div className='flex flex-col w-120 bg-amber-50 gap-4 p-5 items-center'>
                <input type="text" name="name" placeholder='name' className='border-1 h-12 w-full' ref={(e)=>(formRef.current.username=e)}/>
                <input type="email" name="email" placeholder='email' className='border-1 h-12 w-full' ref={(e)=>(formRef.current.email=e)}/>
                <input type="password" name='password' placeholder='password' className='border-1 h-12  w-full' ref={(e)=>(formRef.current.password=e)}/>
                <input type="url" name="img" placeholder='image' ref={(e)=>(formRef.current.img=e)}/>
                <button  type="submit"className='bg-blue-700 text-white h-12 w-full cursor-pointer'>Register</button><span>already have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>setToggle((prev)=>!prev)}>Login</span></span>
            </div>


            
        </form>


                <div>
                  <h1>{data.pname}</h1>
                </div>
     </>  
  )
}


export default Register