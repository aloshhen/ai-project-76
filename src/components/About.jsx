import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Package, Users } from 'lucide-react'

function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: , y:  }}
      animate={{ opacity: , y:  }}
      transition={{ duration: ., ease: 'easeInOut', delay: . }}
    >
      <h className="text-xl font-bold tracking-tight text-center">How It Works</h>
      <div className="grid grid-cols- md:grid-cols- gap-">
        <div className="flex flex-col items-center">
          <MapPin className="w- h- mb-" />
          <h className="font-bold">Plan Your Route</h>
          <p>Choose the best route for your shipment with our advanced planning tools.</p>
        </div>
        <div className="flex flex-col items-center">
          <Package className="w- h- mb-" />
          <h className="font-bold">Pack and Ship</h>
          <p>Effortlessly pack and ship your goods with our expert guidance.</p>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w- h- mb-" />
          <h className="font-bold">Track Your Shipment</h>
          <p>Track your shipment in real-time with our user-friendly tracking system.</p>
        </div>
      </div>
    </motion.section>
  )
}

export default About