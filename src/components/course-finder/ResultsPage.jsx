// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronDown, ChevronRight, X } from 'lucide-react'
// import FilterSidebar from './FilterSidebar'
// import CourseCard from './CourseCard'
// import HelpCard from './HelpCard'
// import SuccessModal from './SuccessModal'

// const mockCourses = [
//   {
//     id: 1,
//     name: 'Chemical Engineering',
//     cost: '86,800 USD',
//     duration: '1.6 years',
//     period: 'year',
//     university: 'Massachusetts Institute Of Technology',
//     location: 'United States',
//     globalRanking: 1,
//     shortlisted: false
//   },
//   {
//     id: 2,
//     name: 'LLM in Corporate Governance & Practice',
//     cost: '93,400 USD',
//     duration: '9 months',
//     period: '9 months',
//     university: 'Stanford University',
//     universityLogo: '/placeholder.svg?height=40&width=40',
//     location: 'United States',
//     globalRanking: 3,
//     shortlisted: false
//   },
//   {
//     id: 3,
//     name: 'Graduate Degree in Mechanical Engineering',
//     cost: '91,400 USD',
//     duration: '1 year',
//     period: 'year',
//     university: 'Massachusetts Institute Of Technology',
//     universityLogo: '/placeholder.svg?height=40&width=40',
//     location: 'United States',
//     globalRanking: 1,
//     shortlisted: false
//   },
//   {
//     id: 4,
//     name: 'MSc Strategic Marketing',
//     cost: '51,000 GBP',
//     duration: '1 year',
//     period: 'year',
//     university: 'Imperial College London',
//     universityLogo: '/placeholder.svg?height=40&width=40',
//     location: 'United Kingdom',
//     globalRanking: 8,
//     shortlisted: false
//   }
// ]

// export default function ResultsPage() {
//   const [showSuccessModal, setShowSuccessModal] = useState(false)
//   const [courses, setCourses] = useState(mockCourses)

//   const toggleShortlist = (courseId) => {
//     setCourses(courses.map(course => 
//       course.id === courseId 
//         ? { ...course, shortlisted: !course.shortlisted }
//         : course
//     ))
//   }

//   return (
//     <div className="h-screen bg-gray-50 pt-16 flex flex-col">
//       <div className="container mx-auto px-4 py-8 flex-grow flex flex-col overflow-hidden">
//         {/* HelpCard placed above everything else */}
//         <div className="mb-8">
//           <HelpCard onTalkToExpert={() => setShowSuccessModal(true)} />
//         </div>

//         <div className="flex gap-8 flex-grow overflow-hidden">
//           {/* Left Sidebar */}
//           <div className="w-64 flex-shrink-0">
//             <FilterSidebar />
//           </div>

//           {/* Main Content */}
//           <div className="flex-1 overflow-hidden flex flex-col">
//             <div className="overflow-y-auto pr-4">
//               <div className="grid grid-cols-2 gap-6">
//                 {courses.map(course => (
//                   <CourseCard 
//                     key={course.id}
//                     course={course}
//                     onTalkToExpert={() => setShowSuccessModal(true)}
//                     onToggleShortlist={() => toggleShortlist(course.id)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {showSuccessModal && (
//           <SuccessModal onClose={() => setShowSuccessModal(false)} />
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronRight, X } from 'lucide-react'
import FilterSidebar from './FilterSidebar'
import CourseCard from './CourseCard'
import HelpCard from './HelpCard'
import SuccessModal from './SuccessModal'

const mockCourses = [
  {
    id: 1,
    name: 'Chemical Engineering',
    cost: '86,800 USD',
    duration: '1.6 years',
    period: 'year',
    university: 'Massachusetts Institute Of Technology',
    location: 'United States',
    globalRanking: 1,
    shortlisted: false
  },
  {
    id: 2,
    name: 'LLM in Corporate Governance & Practice',
    cost: '93,400 USD',
    duration: '9 months',
    period: '9 months',
    university: 'Stanford University',
    universityLogo: '/placeholder.svg?height=40&width=40',
    location: 'United States',
    globalRanking: 3,
    shortlisted: false
  },
  {
    id: 3,
    name: 'Graduate Degree in Mechanical Engineering',
    cost: '91,400 USD',
    duration: '1 year',
    period: 'year',
    university: 'Massachusetts Institute Of Technology',
    universityLogo: '/placeholder.svg?height=40&width=40',
    location: 'United States',
    globalRanking: 1,
    shortlisted: false
  },
  {
    id: 4,
    name: 'MSc Strategic Marketing',
    cost: '51,000 GBP',
    duration: '1 year',
    period: 'year',
    university: 'Imperial College London',
    universityLogo: '/placeholder.svg?height=40&width=40',
    location: 'United Kingdom',
    globalRanking: 8,
    shortlisted: false
  }
]

export default function ResultsPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [courses, setCourses] = useState(mockCourses)

  const toggleShortlist = (courseId) => {
    setCourses(courses.map(course => 
      course.id === courseId 
        ? { ...course, shortlisted: !course.shortlisted }
        : course
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col overflow-hidden">
        {/* HelpCard placed above everything else */}
        <div className="mb-8">
          <HelpCard onTalkToExpert={() => setShowSuccessModal(true)} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 flex-grow overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="overflow-y-auto pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map(course => (
                  <CourseCard 
                    key={course.id}
                    course={course}
                    onTalkToExpert={() => setShowSuccessModal(true)}
                    onToggleShortlist={() => toggleShortlist(course.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccessModal && (
          <SuccessModal onClose={() => setShowSuccessModal(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}





