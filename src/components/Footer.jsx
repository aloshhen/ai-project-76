import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: , y:  }}
      animate={{ opacity: , y:  }}
      transition={{ duration: ., ease: 'easeInOut', delay: . }}
    >
      <p>&copy;  Logistics Services. All rights reserved.</p>
      <div className="flex space-x-">
        <a href="mailto:info@logistics.com">
          <Mail className="w- h-" />
        </a>
        <a href="tel:+">
          <Phone className="w- h-" />
        </a>
      </div>
    </motion.footer>
  )
}

export default Footer