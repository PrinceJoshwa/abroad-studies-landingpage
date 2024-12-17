// import React from 'react'
// import { motion } from 'framer-motion'

// function Hero() {
//   return (
//     <section className="bg-blue-900 text-white py-20 md:py-32">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-6xl font-bold mb-4">Talk to Study Abroad Experts Today</h2>
//           <p className="text-xl md:text-2xl mb-8">For Free Expert Counselling Sessions</p>
//           <motion.button 
//             className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get Started
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Hero

import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/bgimg3.jpeg'; // Import the image from the assets folder

function Hero() {
  return (
    <section 
       id='hero' className="bg-blue-900 text-white py-20 md:py-32 bg-cover bg-center bg-no-repeat relative" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Talk to Study Abroad Experts Today</h2>
          <p className="text-xl md:text-2xl mb-8">For Free Expert Counselling Sessions</p>
          <motion.button 
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;


// import React from 'react';
// import { motion } from 'framer-motion';
// import backgroundImage from '../assets/bgimg3.jpeg'; // Import the image from the assets folder

// function Hero() {
//   return (
//     <section 
//       className="bg-blue-900 text-white py-20 md:py-32 bg-cover bg-center bg-no-repeat relative min-h-screen" 
//       style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
//       {/* Overlay for better text visibility */}
//       <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

//       <div className="container mx-auto px-4 relative">
//         <motion.div 
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-6xl font-bold mb-4">Talk to Study Abroad Experts Today</h2>
//           <p className="text-xl md:text-2xl mb-8">For Free Expert Counselling Sessions</p>
//           <motion.button 
//             className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get Started
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
