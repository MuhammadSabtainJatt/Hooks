import React from 'react'
import { Route, Routes } from 'react-router-dom'

// pages
import Home from './Pages/Home/index'
import About from './Pages/About/index'
import Contact from './Pages/Contact/index'

// components
import Header from './Components/Header/index'
import Footer from './Components/Footer/Index'

export default function Index() {
  return (
     <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    <Footer />
    </>
  )
}
