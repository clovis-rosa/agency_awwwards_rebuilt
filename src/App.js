import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import gsap from 'gsap'
import './styles/App.scss'

// Components
import Header from './components/Header'
import Navegation from './components/Navigation'

// Pages
import Home from './pages/Home'
import CaseStudies from './pages/CaseStudies'
import Approach from './pages/Aprroach'
import Services from './pages/Services'
import About from './pages/About'

// Routers
const routes = [
  { path: '/', name: 'Home', Components: Home },
  { path: '/case-studies', name: 'Case Studies', Components: CaseStudies },
  { path: '/aprroach', name: 'Aprroach', Components: Approach },
  { path: '/Services', name: 'Services', Components: Services },
  { path: '/about-us', name: 'About Us', Components: About },
]

// Set 1s delay for the check dimensions
function debounce(fn, ms) {
  let timer
  clearTimeout(timer)
  timer = setTimeout(() => {
    timer = null
    fn.apply(this, arguments)
  }, ms)
}

function App() {
  // Correct viewport swich screen due javascript not updating te viewport height
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  useEffect(() => {
    // Preventing flash from happening
    gsap.to('body', 0, { css: { visibility: 'visible' } })

    // Grab inner hitght of window for mobile reasons when dealing vh
    let vh = dimensions.height * 0.01
    // Set CSS variable vh
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const debouncedHandleResize = debounce(function HandleResize() {
      // Set the state of height and width
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

  return (
    <>
      <Header dimensions={dimensions} />
      <div className="App">
        {routes.map(({ path, Components }) => (
          <Route key={path} exact path={path}>
            <Components dimensions={dimensions} />
          </Route>
        ))}
      </div>
      <Navegation />
    </>
  )
}

export default App
