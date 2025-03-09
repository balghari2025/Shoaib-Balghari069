import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
  return (
    <>
      <div className=' bg-white dark:bg-[#061231] dark:text-white'>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
