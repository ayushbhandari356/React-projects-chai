import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [color,setColor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      
      <div className="fixed flex flex-wrap justify-center gap-3 bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-3 rounded-full ">
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"red"}}>Red</button>
        </div>
        <div className="flex flex-wrap justify-center shadow-lg bg-white px-5 py-3 rounded-full ">
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"blue"}}>Blue</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-3 rounded-full ">
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"green"}}>Green</button>
        </div>

      </div>
    
    
    
    </div> 
  )
}

export default App
