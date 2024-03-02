import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
// here we are setting the data in setUser
    const {setUser}=useContext(UserContext)


    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Log In</h2>

        <input type="text" 
        placeholder='username'
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}
        />

        <input type="password" placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}> Submit </button>
    </div>
  )
}

export default Login