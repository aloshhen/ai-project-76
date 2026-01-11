import React from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

function Navigation() {
  return (
    <motion.nav
      className="bg-surface backdrop-blur-lg py- px- flex justify-between items-center sticky top- z-"
      initial={{ opacity: , y: - }}
      animate={{ opacity: , y:  }}
      transition={{ duration: ., ease: 'easeInOut' }}
    >
      <div className="flex items-center">
        <img src="https://source.unsplash.com/x/?logo" alt="Logo" className="w- h- mr-" />
        <h className="text-xl font-bold">Logistics</h>
      </div>
      <div className="hidden md:flex space-x-">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>
      <button className="md:hidden">
        <Menu className="w- h-" />
      </button>
    </motion.nav>
  )
}

export default Navigation