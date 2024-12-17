// import React from 'react'
// import { motion } from 'framer-motion'
// import { FileText, BookOpen, DollarSign, Plane, Home, Briefcase, GraduationCap } from 'lucide-react'

// const supportItems = [
//   { icon: FileText, title: 'SOP', description: 'Get expert guidance on crafting a standout Statement of Purpose' },
//   { icon: BookOpen, title: 'Admission & Application', description: 'Comprehensive support for university admissions and applications' },
//   { icon: DollarSign, title: 'Education Loan', description: 'Assistance in securing financial support for your studies' },
//   { icon: Plane, title: 'Visa Support', description: 'Expert help with visa application and documentation' },
//   { icon: Home, title: 'Accommodation', description: 'Find the perfect place to stay during your studies' },
//   { icon: Briefcase, title: 'Part-time Job', description: 'Guidance on finding part-time work opportunities' },
//   { icon: GraduationCap, title: 'Academic Support', description: 'Ongoing assistance to ensure your academic success' },
// ]

// function EndToEndSupport() {
//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Get End-to-End Support
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {supportItems.map((item, index) => (
//             <motion.div 
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="flex items-center mb-4">
//                 <motion.div 
//                   className="bg-orange-500 p-3 rounded-full mr-4"
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <item.icon className="w-6 h-6 text-white" />
//                 </motion.div>
//                 <h3 className="text-xl font-semibold text-blue-900">{item.title}</h3>
//               </div>
//               <p className="text-gray-600">{item.description}</p>
//             </motion.div>
//           ))}
//         </div>
//         <motion.div 
//           className="mt-12 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.7 }}
//         >
//           <motion.button 
//             className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get Started Now
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default EndToEndSupport

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, BookOpen, DollarSign, Plane, Home, Briefcase, GraduationCap } from 'lucide-react'

const supportItems = [
  { icon: FileText, title: 'SOP', description: 'Expert guidance on crafting a standout Statement of Purpose' },
  { icon: BookOpen, title: 'Admission & Application', description: 'Comprehensive support for university admissions and applications' },
  { icon: DollarSign, title: 'Education Loan', description: 'Assistance in securing financial support for your studies' },
  { icon: Plane, title: 'Visa Support', description: 'Expert help with visa application and documentation' },
  { icon: Home, title: 'Accommodation', description: 'Find the perfect place to stay during your studies' },
  { icon: Briefcase, title: 'Part-time Job', description: 'Guidance on finding part-time work opportunities' },
//   { icon: GraduationCap, title: 'Academic Support', description: 'Ongoing assistance to ensure your academic success' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
}

function EndToEndSupport() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Get End-to-End Support</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're with you every step of the way, from application to graduation and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {supportItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-blue-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 flex-grow">{item.description}</p>
                <motion.button
                  className="mt-4 text-blue-600 font-medium flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          {/* <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  )
}

export default EndToEndSupport

