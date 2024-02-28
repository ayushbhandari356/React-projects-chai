import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github1() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ayushbhandari356')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <>
    <div className='text-center m-4 bg-violet-500 text-white p-4 text-4xl'>Github followers : {data.followers}
    <img src={data.avatar_url} alt="git pictures" className="text-center" width={300} />

     </div>
    </>
  )
}




export default Github1

export const githubInfoLoader = async () =>{
    const response=await fetch('https://api.github.com/users/ayushbhandari356')
    return response.json()
}
