// import React from 'react'
// import { motion } from 'framer-motion'

// const testimonials = [
//   { name: 'Mohammed Afzar', text: 'I was initially overwhelmed by the process of applying to universities abroad. But with expert guidance, I was able to navigate through the complexities and secure admission to my dream university.' },
//   { name: 'Danish', text: 'The counselors were extremely helpful and knowledgeable. They provided me with personalized advice and helped me choose the right course and university.' },
//   { name: 'Jeevita', text: 'I was initially hesitant about the study abroad process, but MOAS made it easy and enjoyable. Their team is friendly, knowledgeable, and always available to assist.' },
// ]

// function Testimonials() {
//   return (
//     <section id="testimonials" className="py-16 bg-blue-900 text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Students Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div 
//               key={index}
//               className="bg-blue-800 p-6 rounded-lg shadow-md"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <p className="mb-4">{testimonial.text}</p>
//               <p className="font-semibold">- {testimonial.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Testimonials

//17-12-2024
// import React from 'react'
// import { motion } from 'framer-motion'
// import { Star } from 'lucide-react'

// const testimonials = [
//   {
//     name: 'Mohammed Afzar',
//     text: 'I was initially overwhelmed by the process of applying to universities abroad. But with expert guidance, I was able to navigate through the complexities and secure admission to my dream university. Their team was incredibly supportive, from application essay reviews to visa assistance.',
//   },
//   {
//     name: 'Danish',
//     text: "The counselors were extremely helpful and knowledgeable. They provided me with personalized advice and helped me choose the right course and university. Their support throughout the entire process, from application to visa, was invaluable. I'm truly grateful for their assistance.",
//   },
//   { name: 'Jeevita', 
//     text: 'I was initially hesitant about the study abroad process, but MOAS made it easy and enjoyable. Their team is friendly, knowledgeable, and always available to assist.',
//   },
// ]

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// }

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: 'spring',
//       stiffness: 100
//     }
//   }
// }

// function Testimonials() {
//   return (
//     <section className="py-20 bg-blue-50">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Why Students Love Us
//         </motion.h2>
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {testimonials.map((testimonial, index) => (
//             <motion.div 
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
//               variants={itemVariants}
//               whileHover={{ scale: 1.03 }}
//             >
//               <div className="flex mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-4">{testimonial.text}</p>
//               <p className="font-semibold text-blue-900">{testimonial.name}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Testimonials


import React from 'react'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'

const testimonials = [
//   {
//     name: 'Mohammed Afzar',
//     text: 'I was initially overwhelmed by the process of applying to universities abroad. But with expert guidance, I was able to navigate through the complexities and secure admission to my dream university. Their team was incredibly supportive, from application essay reviews to visa assistance.',
//   },
  {
    name: 'Danish',
    text: "The counselors were extremely helpful and knowledgeable. They provided me with personalized advice and helped me choose the right course and university. Their support throughout the entire process, from application to visa, was invaluable. I'm truly grateful for their assistance.",
  },
  { 
    name: 'Jeevita', 
    text: 'I was initially hesitant about the study abroad process, but MOAS made it easy and enjoyable. Their team is friendly, knowledgeable, and always available to assist.',
  },
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

function RatingCard({ platform, rating }) {
  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl"
      variants={itemVariants}
    >
      <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-blue-600 fill-blue-600' : 'text-blue-200'}`} 
          />
        ))}
      </div>
      <div className="text-3xl font-bold text-blue-900 mb-1">{rating}</div>
      <div className="text-blue-900 font-medium">{platform} Review</div>
    </motion.div>
  )
}

function Testimonials() {
  return (
    <section className="py-16 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Students Love Us
        </motion.h2>

        {/* Ratings Section */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl bg-blue-100/50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            <RatingCard platform="Google" rating={4.6} />
            <RatingCard platform="Facebook" rating={4.9} />
            <div className="text-center lg:text-left">
              <p className="text-xl text-blue-900 font-medium mb-4">
                trusted by over 10 lakh students globally
              </p>
              <button className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors mx-auto lg:mx-0">
                Get started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-blue-600 fill-blue-600" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-blue-900">{testimonial.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials


