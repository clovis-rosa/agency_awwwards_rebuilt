import React, { useEffect } from 'react'
import gsap from 'gsap';
import './styles/App.scss'
import Header from './components/Header'
import Home from './pages/Home';


// Routers

function App() {

  useEffect(() => {
    // Calc the vh 50%
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // Prevent white text to flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } })


  }, [])

  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
