import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Web from './component/Web'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Web/>
   </>
  )
}

export default App
