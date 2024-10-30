import React from 'react'
import { motion } from 'framer-motion'

const MotionText = () => {
  return (
    <motion.h1
    initial={{y:-10}}
    animate={{y:0}}
    transition={{
        duration:"3",
        delay:"2"
    }}>
        This Is Framer Motion With H1 With It
    </motion.h1>
      
  )
}

export default MotionText
