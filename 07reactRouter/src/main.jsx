import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componenets/Home/Home.jsx'
import About from './componenets/About/About.jsx'
import Contact from './componenets/Contact/Contact.jsx'
import User from './componenets/User/User.jsx'
import Github1, { githubInfoLoader } from './componenets/Github1/Github1.jsx'




/*const router =createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"",
        element:<Home />
      }
      ,
      {
        path:"about",
        element:<About />
      }
      ,
      {
        path:"contact",
        element:<Contact />
      }
    ]
    
  }
  // {
  //   path:"contact",
  //   element:<Contact />
  // }
])*/

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home></Home>} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* user / ke bad colon aata hai wo id database se lete hai jasi facebook me different users hote hain to sabki id alag hoti hai bs baki ui same hi hota */}
      <Route path="user/:userid" element={<User />} />
      <Route
      // loader is used to optimised the react app more then useEffect hook
       loader={githubInfoLoader}
       path="github" 
       element={<Github1 />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
