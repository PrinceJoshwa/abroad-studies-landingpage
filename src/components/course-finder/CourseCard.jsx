// import { motion } from 'framer-motion'
// import { Heart, ChevronRight } from 'lucide-react'

// export default function CourseCard({ course, onTalkToExpert, onToggleShortlist }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white rounded-3xl p-6 shadow-sm"
//     >
//       <div className="space-y-4">
//         <h3 className="text-xl font-semibold text-blue-900">{course.name}</h3>
        
//         <div className="flex flex-wrap gap-4">
//           <div className="bg-blue-50 px-4 py-2 rounded-full flex items-center gap-2">
//             <span className="text-blue-600">{course.cost} / {course.period}</span>
//           </div>
//           <div className="bg-blue-50 px-4 py-2 rounded-full flex items-center gap-2">
//             <span className="text-blue-600">{course.duration}</span>
//           </div>
//         </div>

//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-4">
//             <img
//               src={course.universityLogo}
//               alt={course.university}
//               className="w-10 h-10 rounded-lg"
//             />
//             <div>
//               <div className="font-medium">{course.university}</div>
//               <div className="flex items-center gap-4 text-sm text-gray-600">
//                 <span>{course.location}</span>
//                 <div className="bg-blue-50 px-2 py-1 rounded-full">
//                   <span className="text-blue-600">Global Ranking #{course.globalRanking}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <button
//             onClick={onTalkToExpert}
//             className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
//           >
//             Talk to expert
//             <ChevronRight className="w-4 h-4" />
//           </button>
//           <button
//             onClick={onToggleShortlist}
//             className={`px-6 py-2 rounded-full border flex items-center gap-2 transition-colors ${
//               course.shortlisted
//                 ? 'border-blue-700 text-blue-700'
//                 : 'border-gray-200 text-gray-600'
//             }`}
//           >
//             Shortlist
//             <Heart
//               className={`w-4 h-4 ${course.shortlisted ?  'fill-blue-600' : ''}`}
//             />
//           </button>
//         </div>

//         <button className="text-blue-700 flex items-center gap-1">
//           See more courses
//           <ChevronRight className="w-4 h-4" />
//         </button>
//       </div>
//     </motion.div>
//   )
// }

//CourseCard.jsx
import { motion } from 'framer-motion'
import { Heart, ChevronRight } from 'lucide-react'

export default function CourseCard({ course, onTalkToExpert, onToggleShortlist }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm"
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-900">{course.name}</h3>
        
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <div className="bg-blue-50 px-4 py-2 rounded-full flex items-center gap-2">
            <span className="text-blue-600">{course.cost} / {course.period}</span>
          </div>
          <div className="bg-blue-50 px-4 py-2 rounded-full flex items-center gap-2">
            <span className="text-blue-600">{course.duration}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            {/* <img
              src={course.universityLogo}
              alt={course.university}
              className="w-10 h-10 rounded-lg"
            /> */}
            <div>
              <div className="font-medium">{course.university}</div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-gray-600">
                <span>{course.location}</span>
                <div className="bg-blue-50 px-2 py-1 rounded-full mt-1 sm:mt-0">
                  <span className="text-blue-600">Global Ranking #{course.globalRanking}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
          <button
            onClick={onTalkToExpert}
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            Talk to expert
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={onToggleShortlist}
            className={`px-4 sm:px-6 py-2 rounded-full border flex items-center justify-center gap-2 transition-colors ${
              course.shortlisted
                ? 'border-blue-700 text-blue-700'
                : 'border-gray-200 text-gray-600'
            }`}
          >
            Shortlist
            <Heart
              className={`w-4 h-4 ${course.shortlisted ?  'fill-blue-600' : ''}`}
            />
          </button>
        </div>

        <button className="text-blue-700 flex items-center justify-center gap-1 mt-4 w-full sm:w-auto">
          See more courses
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}

