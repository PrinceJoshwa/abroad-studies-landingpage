// import React from 'react'

// function Footer() {
//   return (
//     <footer className="bg-blue-900 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between items-center">
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-2xl font-bold mb-2">MOAS</h3>
//             <p>Mad Over Abroad Studies
// </p>
//           </div>
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h4 className="text-lg font-semibold mb-2">Contact</h4>
//             <p>Email: example@gmail.com</p>
//             <p>Phone: +91 1234567890</p>
//             <p>Address: Sarjapur road, Bangalore, Karnataka, India</p>
//           </div>
//           {/* <div className="w-full md:w-1/3">
//             <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
//             <ul>
//               <li><a href="/course-finder" className="hover:text-orange-500 transition-colors">Course Finder</a></li>
//               <li><a href="#" className="hover:text-orange-500 transition-colors">Refund Policy</a></li>
//               <li><a href="#" className="hover:text-orange-500 transition-colors">Terms and Conditions</a></li>
//             </ul>
//           </div> */}
//         </div>
//         <div className="mt-8 text-center">
//           <p>&copy; {new Date().getFullYear()} MOAS Pvt. Ltd. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Calendar, MessageCircle } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

function Footer() {
  return (
    <footer className="py-9 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Phone className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <a href="tel:+911234567890" className="hover:underline">+91 1234567890</a>
            <a href="mailto:example@gmail.com" className="hover:underline">example@gmail.com</a>

          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MapPin className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p>Sarjapura road Bengaluru - 35</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Calendar className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Book a Session</h3>
            <motion.a 
              href="#" 
              className="bg-white text-blue-900 px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK NOW
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* <MessageCircle className="w-12 h-12 mb-4" /> */}
            <FontAwesomeIcon icon={faWhatsapp} size="2xl" className="w-12 h-12 mb-4"/>
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <motion.a 
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CHAT NOW
            </motion.a>
          </motion.div>
        </div>
      <div className="mt-8 text-center">
      <p>&copy; {new Date().getFullYear()} MOAS Pvt. Ltd. All rights reserved.</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer
