import React from 'react'
import { motion } from 'framer-motion'
import { Truck, Clock, Shield, DollarSign } from 'lucide-react'

function Features() {
  return (
    <motion.section
      className="features"
      initial={{ opacity: , y:  }}
      animate={{ opacity: , y:  }}
      transition={{ duration: ., ease: 'easeInOut', delay: . }}
    >
      <h className="text-xl font-bold tracking-tight text-center">Why Choose Us?</h>
      <div className="grid grid-cols- md:grid-cols- lg:grid-cols- gap-">
        <div className="card">
          <Truck className="w- h- mb-" />
          <h className="font-bold">Reliable Delivery</h>
          <p>On-time delivery guaranteed with our reliable logistics services.</p>
        </div>
        <div className="card">
          <Clock className="w- h- mb-" />
          <h className="font-bold">Efficient Processes</h>
          <p>Streamlined processes to save you time and money.</p>
        </div>
        <div className="card">
          <Shield className="w- h- mb-" />
          <h className="font-bold">Secure Shipping</h>
          <p>Secure and insured shipping for your peace of mind.</p>
        </div>
        <div className="card">
          <DollarSign className="w- h- mb-" />
          <h className="font-bold">Cost-Effective Solutions</h>
          <p>Competitive pricing without compromising on quality.</p>
        </div>
      </div>
    </motion.section>
  )
}

export default Features