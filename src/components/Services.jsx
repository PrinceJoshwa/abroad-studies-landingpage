// import React from 'react'
// import { motion } from 'framer-motion'

// const services = [
//   { title: 'Team of Experts', description: 'Our team of experienced education consultants is dedicated to helping you achieve your academic goals.' },
//   { title: 'Round the Clock Support', description: 'We offer round-the-clock support to address your queries and concerns.' },
//   { title: 'Destination Study Support', description: 'We provide comprehensive support for various study destinations, including the UK, USA, Canada, Australia, and more.' },
//   { title: 'Admission & Application Support', description: 'Get end-to-end assistance with profile creation, document collection, and entrance exam preparation.' },
// ]

// function Services() {
//   return (
//     <section id="services" className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Our Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <motion.div 
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-blue-900">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Services

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Clock, GraduationCap, FileText } from 'lucide-react'

const services = [
  {
    title: 'Team of Experts',
    icon: Users,
    description: 'Our team of experienced education consultants is dedicated to helping you achieve your academic goals.',
    color: 'text-blue-500'
  },
  {
    title: 'Round the Clock Support',
    icon: Clock,
    description: 'We offer round-the-clock support to address your queries and concerns.',
    color: 'text-green-500'
  },
  {
    title: 'Destination Study Support',
    icon: GraduationCap,
    description: 'We provide comprehensive support for various study destinations, including the UK, USA, Canada, Australia, and more.',
    color: 'text-purple-500'
  },
  {
    title: 'Admission & Application Support',
    icon: FileText,
    description: 'Get end-to-end assistance with profile creation, document collection, and entrance exam preparation.',
    color: 'text-red-500'
  }
]

function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive support services to make your study abroad journey smooth and successful
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className={`p-4 rounded-full bg-gray-50 mb-6 ${service.color}`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <motion.button
                    className="inline-flex items-center justify-center text-blue-900 hover:text-blue-700 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn more
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

