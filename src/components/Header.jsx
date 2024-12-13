// import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <motion.header 
//       className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <motion.h1 
//           className="text-3xl font-bold text-blue-900"
//           whileHover={{ scale: 1.1 }}
//         >
//           Enormyu
//         </motion.h1>
//         <nav>
//           <ul className="flex space-x-6">
//             <li><a href="#services" className="text-blue-900 hover:text-orange-500 transition-colors">Services</a></li>
//             <li><a href="#how-it-works" className="text-blue-900 hover:text-orange-500 transition-colors">How It Works</a></li>
//             <li><a href="#testimonials" className="text-blue-900 hover:text-orange-500 transition-colors">Testimonials</a></li>
//             <li><a href="#contact" className="text-blue-900 hover:text-orange-500 transition-colors">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </motion.header>
//   )
// }

// export default Header

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-blue-900 shadow-md' : 'bg-transparent text-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-3xl font-bold"
          whileHover={{ scale: 1.1 }}
        >
          Enormyu
        </motion.h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
            <li><a href="#how-it-works" className="hover:text-orange-500 transition-colors">How It Works</a></li>
            <li><a href="#testimonials" className="hover:text-orange-500 transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
