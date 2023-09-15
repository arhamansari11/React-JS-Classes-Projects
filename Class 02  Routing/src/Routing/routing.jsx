import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Contact from "../Components/contact"
import Home from "../Components/home"
import Footer from "../Components/footer"
import About from "../Components/about"
import Error from "../Components/error"



const Routing = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  )
}

export default Routing