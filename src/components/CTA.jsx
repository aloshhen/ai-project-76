import React from 'react'
import { motion } from 'framer-motion'

function CTA() {
  return (
    <motion.section
      className="cta"
      initial={{ opacity: , y:  }}
      animate={{ opacity: , y:  }}
      transition={{ duration: ., ease: 'easeInOut', delay: . }}
    >
      <h className="text-xl font-bold tracking-tight">Ready to Get Started?</h>
      <p>Join thousands of businesses that trust us to handle their logistics needs.</p>
      <button>Get Started</button>
    </motion.section>
  )
}

export default CTA