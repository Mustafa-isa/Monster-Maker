import React from 'react'
import { Routes ,Route ,useLocation } from 'react-router-dom'
import Home from './pages/home/Home'
import Start from './pages/start/Start'
import { AnimatePresence } from 'framer-motion'
function App() {
  const location = useLocation()
  return (

    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </AnimatePresence>
)
  
  
  
  
}

export default App