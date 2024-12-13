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

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header 
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white text-blue-900 shadow-md' : 'bg-transparent text-white'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <motion.h1 
//           className="text-3xl font-bold"
//           whileHover={{ scale: 1.1 }}
//         >
//           Enormyu
//         </motion.h1>
//         <nav>
//           <ul className="flex space-x-6">
//             <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
//             <li><a href="#how-it-works" className="hover:text-orange-500 transition-colors">How It Works</a></li>
//             <li><a href="#testimonials" className="hover:text-orange-500 transition-colors">Testimonials</a></li>
//             <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </motion.header>
//   );
// }

// export default Header;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <motion.header 
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-white text-blue-900 shadow-md' : 'bg-transparent text-white'
//         }`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <motion.h1 
//             className="text-3xl font-bold"
//             whileHover={{ scale: 1.1 }}
//           >
//             Enormyu
//           </motion.h1>

//           {/* Mobile Menu Icon */}
//           <button 
//             className="md:hidden block focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <svg 
//               className="w-6 h-6" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24" 
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth="2" 
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex md:flex-row md:space-x-6">
//             <motion.a 
//               href="#services" 
//               className="hover:text-orange-500 transition-colors"
//             >
//               Services
//             </motion.a>
//             <motion.a 
//               href="#how-it-works" 
//               className="hover:text-orange-500 transition-colors"
//             >
//               How It Works
//             </motion.a>
//             <motion.a 
//               href="#testimonials" 
//               className="hover:text-orange-500 transition-colors"
//             >
//               Testimonials
//             </motion.a>
//             <motion.a 
//               href="#contact" 
//               className="hover:text-orange-500 transition-colors"
//             >
//               Contact
//             </motion.a>
//           </nav>
//         </div>
//       </motion.header>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-blue-900 z-40 md:hidden"
//           >
//             <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//               <h1 className="text-3xl font-bold text-white">Enormyu</h1>
//               <button 
//                 onClick={() => setMenuOpen(false)}
//                 className="text-white focus:outline-none"
//               >
//                 <svg 
//                   className="w-6 h-6" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round" 
//                     strokeWidth="2" 
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
//               <motion.a 
//                 href="#services" 
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Services
//               </motion.a>
//               <motion.a 
//                 href="#how-it-works" 
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 How It Works
//               </motion.a>
//               <motion.a 
//                 href="#testimonials" 
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Testimonials
//               </motion.a>
//               <motion.a 
//                 href="#contact" 
//                 className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Contact
//               </motion.a>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default Header;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden block focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
            >
              {menuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:flex-row md:space-x-6">
            <motion.a 
              href="#services" 
              className="hover:text-orange-500 transition-colors"
            >
              Services
            </motion.a>
            <motion.a 
              href="#how-it-works" 
              className="hover:text-orange-500 transition-colors"
            >
              How It Works
            </motion.a>
            <motion.a 
              href="#testimonials" 
              className="hover:text-orange-500 transition-colors"
            >
              Testimonials
            </motion.a>
            <motion.a 
              href="#contact" 
              className="hover:text-orange-500 transition-colors"
            >
              Contact
            </motion.a>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-blue-900 z-40 md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
              <motion.a 
                href="#services" 
                className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </motion.a>
              <motion.a 
                href="#how-it-works" 
                className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                How It Works
              </motion.a>
              <motion.a 
                href="#testimonials" 
                className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Testimonials
              </motion.a>
              <motion.a 
                href="#contact" 
                className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;

