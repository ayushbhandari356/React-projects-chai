import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  
  
  const addvalue=()=>{
    if(counter<20){
      console.log("clicked",counter)
      counter=counter+1
      setCounter(counter)
    }
  }
  const removevalue=()=>{
    if(counter>0){
      counter=counter-1
      setCounter(counter)
    }
  }
  return (
    <>
     <h1>chai or react 2nd project with vite </h1>
     <h2>counter value:{counter}</h2>
     <button onClick={addvalue}>Add Value {counter}</button>
     <br />
     <button onClick={removevalue}>Remove Value {counter} </button>
   </>
  )
}

export default App

