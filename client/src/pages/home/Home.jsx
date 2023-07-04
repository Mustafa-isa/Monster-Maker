import React from 'react'
import './home.css'
import Header from '../../component/header/Header'
import Hero from '../../component/Hero/Hero'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
function Home() {
  return (
  
  <motion.div className="main" 
  initial={{
    x:"-100%"
  }}
  animate={{
    x:0
  }}
  transition={{
  duration:0.3
  }}
  exit={{
    y:"-100vh"
  }}
  >

<Header/>
<Hero/>
<div className="gradient"></div>
<Link className='glow-on-hover' to='/start'>
  Start

</Link>
  </motion.div>

  
  )
}

export default Home