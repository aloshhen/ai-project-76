import React from 'react'
import { motion } from 'framer-motion'
import { Truck } from 'lucide-react'

function Hero() {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: , y:  }}
      animate={{ opacity: , y:  }}
      transition={{ duration: ., ease: 'easeInOut' }}
    >
      <Truck className="w- h- mb-" />
      <h className="text-xl font-bold tracking-tight">Effortless Logistics</h>
      <p className="text-xl">Streamline your supply chain with our expert logistics services.</p>
      <div className="flex justify-center">
        <button className="mr-">Get Started</button>
        <button className="secondary">Learn More</button>
      </div>
    </motion.div>
  )
}

export default Hero