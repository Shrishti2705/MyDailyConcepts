import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount]=useState(0)
    console.log("counter is rendering")
  return (
    <div><h1>Counter is : {count}</h1>
    <button onClick={()=>{
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
    }}>increament</button>
    </div>
    
  )
}

export default Counter