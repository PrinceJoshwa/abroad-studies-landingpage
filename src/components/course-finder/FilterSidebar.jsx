// import { useState } from 'react'
// import { ChevronDown, Search, DollarSign, Calendar, BookOpen, Globe, GraduationCap, Briefcase, MessageSquare, Brain, School } from 'lucide-react'

// const filters = [
//   {
//     id: 'budget',
//     name: 'Budget',
//     icon: DollarSign,
//     options: [
//       '5 to 10 lakhs',
//       '10 to 20 lakhs',
//       '20 to 30 lakhs',
//       '30 to 40 lakhs',
//       '40 to 50 lakhs',
//       '50+ lakhs'
//     ]
//   },
//   {
//     id: 'intake',
//     name: 'Intake',
//     icon: Calendar,
//     options: [
//       'Jan - Mar 2025',
//       'Apr - Jun 2025',
//       'Jul - Sep 2025',
//       'Oct - Dec 2025',
//       'Jan - Mar 2026'
//     ]
//   },
//   {
//     id: 'specialisation',
//     name: 'Specialisation',
//     icon: BookOpen,
//     searchable: true,
//     options: [
//       'Computer Science, Software Engineering',
//       'Cyber Security, Information Security',
//       'Data Science and Analytics',
//       'Information Technology'
//     ]
//   },
//   {
//     id: 'country',
//     name: 'Country',
//     icon: Globe,
//     options: [
//       'United States',
//       'United Kingdom',
//       'Australia',
//       'Canada',
//       'Singapore',
//       'France',
//       'Germany',
//       'New Zealand',
//       'Ireland'
//     ]
//   },
//   {
//     id: 'courseLevel',
//     name: 'Course level',
//     icon: GraduationCap,
//     options: ['Bachelors', 'Masters']
//   },
//   {
//     id: 'areaOfStudy',
//     name: 'Area of study',
//     icon: Briefcase,
//     searchable: true,
//     recommended: [
//       'Business and Management',
//       'Computer Science and IT',
//       'Engineering'
//     ],
//     options: [
//       'Business and Management',
//       'Computer Science and IT',
//       'Engineering',
//       'Social Science',
//       'Architecture',
//       'Professional Studies'
//     ]
//   },
//   {
//     id: 'englishTest',
//     name: 'English proficiency exam',
//     icon: MessageSquare,
//     options: ['TOEFL', 'IELTS', 'PTE', 'None'],
//     hasScore: true,
//     scoreRange: { min: 3, max: 9, step: 0.5 }
//   },
//   {
//     id: 'aptitudeTest',
//     name: 'Academic proficiency exam',
//     icon: Brain,
//     options: ['GRE', 'GMAT', 'None'],
//     hasScore: true,
//     scoreRange: { min: 200, max: 800, step: 10 }
//   },
//   {
//     id: 'education',
//     name: 'Higher education',
//     icon: School,
//     options: ['12th', 'Bachelors', 'Masters'],
//     hasMarks: true,
//     hasBacklogs: true
//   }
// ]

// export default function FilterSidebar({ selectedFilters = {}, onFilterChange }) {
//   const [expandedFilters, setExpandedFilters] = useState([])
//   const [searchQueries, setSearchQueries] = useState({})

//   const toggleFilter = (filterId) => {
//     setExpandedFilters(current =>
//       current.includes(filterId)
//         ? current.filter(id => id !== filterId)
//         : [...current, filterId]
//     )
//   }

//   const handleOptionSelect = (filterId, value) => {
//     onFilterChange?.(filterId, value)
//   }

//   const handleSearch = (filterId, query) => {
//     setSearchQueries(prev => ({ ...prev, [filterId]: query }))
//   }

//   const renderFilterContent = (filter) => {
//     const searchQuery = searchQueries[filter.id] || ''
//     const filteredOptions = filter.options.filter(option =>
//       option.toLowerCase().includes(searchQuery.toLowerCase())
//     )

//     return (
//       <div className="mt-4 space-y-2">
//         {filter.searchable && (
//           <div className="relative mb-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full p-2 pl-8 rounded-md bg-blue-50 text-sm border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               value={searchQuery}
//               onChange={(e) => handleSearch(filter.id, e.target.value)}
//             />
//             <Search className="absolute left-2 top-2.5 w-4 h-4 text-blue-400" />
//           </div>
//         )}

//         {filter.recommended && (
//           <>
//             <div className="text-sm font-medium mb-2 text-blue-700">Recommended</div>
//             {filter.recommended.map(option => (
//               <button
//                 key={option}
//                 className={`w-full text-left p-2 rounded-md text-sm border ${
//                   selectedFilters[filter.id] === option
//                     ? 'bg-blue-100 text-blue-700 border-blue-300'
//                     : 'border-gray-200 hover:bg-blue-50 hover:border-blue-200'
//                 }`}
//                 onClick={() => handleOptionSelect(filter.id, option)}
//               >
//                 {option}
//               </button>
//             ))}
//           </>
//         )}

//         {filteredOptions.map(option => (
//           <button
//             key={option}
//             className={`w-full text-left p-2 rounded-md text-sm border ${
//               selectedFilters[filter.id] === option
//                 ? 'bg-blue-100 text-blue-700 border-blue-300'
//                 : 'border-gray-200 hover:bg-blue-50 hover:border-blue-200'
//             }`}
//             onClick={() => handleOptionSelect(filter.id, option)}
//           >
//             {option}
//           </button>
//         ))}

//         {filter.hasScore && selectedFilters[filter.id] && selectedFilters[filter.id] !== 'None' && (
//           <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-200">
//             <label className="text-sm text-blue-700 font-medium">Select your score</label>
//             <input
//               type="range"
//               min={filter.scoreRange.min}
//               max={filter.scoreRange.max}
//               step={filter.scoreRange.step}
//               value={selectedFilters[`${filter.id}Score`] || filter.scoreRange.min}
//               onChange={(e) => handleOptionSelect(`${filter.id}Score`, e.target.value)}
//               className="w-full mt-2"
//             />
//             <div className="flex justify-between text-xs text-blue-600 mt-1">
//               <span>{filter.scoreRange.min}</span>
//               <span>{selectedFilters[`${filter.id}Score`] || filter.scoreRange.min}</span>
//               <span>{filter.scoreRange.max}</span>
//             </div>
//           </div>
//         )}

//         {filter.hasMarks && selectedFilters[filter.id] && (
//           <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-200">
//             <label className="text-sm text-blue-700 font-medium">Enter your marks in %</label>
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={selectedFilters.marks || 60}
//               onChange={(e) => handleOptionSelect('marks', e.target.value)}
//               className="w-full mt-2"
//             />
//             <div className="flex justify-between text-xs text-blue-600 mt-1">
//               <span>0</span>
//               <span>{selectedFilters.marks || 60}%</span>
//               <span>100</span>
//             </div>
//           </div>
//         )}

//         {filter.hasBacklogs && selectedFilters[filter.id] && (
//           <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-200">
//             <label className="text-sm text-blue-700 font-medium">Backlogs</label>
//             <input
//               type="range"
//               min="0"
//               max="5"
//               value={selectedFilters.backlogs || 0}
//               onChange={(e) => handleOptionSelect('backlogs', e.target.value)}
//               className="w-full mt-2"
//             />
//             <div className="flex justify-between text-xs text-blue-600 mt-1">
//               <span>0</span>
//               <span>{selectedFilters.backlogs || 0}</span>
//               <span>5+</span>
//             </div>
//           </div>
//         )}
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-4 bg-white p-4 rounded-lg shadow-sm">
//       {filters.map(filter => (
//         <div key={filter.id} className="border-b border-gray-200 pb-4">
//           <button
//             onClick={() => toggleFilter(filter.id)}
//             className="flex items-center justify-between w-full text-left p-2 rounded-md hover:bg-blue-50"
//           >
//             <div className="flex items-center space-x-3">
//               <filter.icon className="w-5 h-5 text-blue-500" />
//               <span className="text-blue-700 font-medium">{filter.name}</span>
//             </div>
//             <ChevronDown
//               className={`w-5 h-5 text-blue-500 transition-transform ${
//                 expandedFilters.includes(filter.id) ? 'rotate-180' : ''
//               }`}
//             />
//           </button>
//           {expandedFilters.includes(filter.id) && (
//             <div className="mt-2 ml-10">
//               {renderFilterContent(filter)}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }

//18-12-2024
// import { useState } from 'react'
// import { ChevronDown, Search, DollarSign, Calendar, BookOpen, Globe, GraduationCap, Briefcase, MessageSquare, Brain, School } from 'lucide-react'

// const filters = [
//   {
//     id: 'budget',
//     name: 'Budget',
//     icon: DollarSign,
//     options: [
//       '5 to 10 lakhs',
//       '10 to 20 lakhs',
//       '20 to 30 lakhs',
//       '30 to 40 lakhs',
//       '40 to 50 lakhs',
//       '50+ lakhs'
//     ]
//   },
//   {
//     id: 'intake',
//     name: 'Intake',
//     icon: Calendar,
//     options: [
//       'Jan - Mar 2025',
//       'Apr - Jun 2025',
//       'Jul - Sep 2025',
//       'Oct - Dec 2025',
//       'Jan - Mar 2026'
//     ]
//   },
//   {
//     id: 'specialisation',
//     name: 'Specialisation',
//     icon: BookOpen,
//     searchable: true,
//     options: [
//       'Computer Science, Software Engineering',
//       'Cyber Security, Information Security',
//       'Data Science and Analytics',
//       'Information Technology'
//     ]
//   },
//   {
//     id: 'country',
//     name: 'Country',
//     icon: Globe,
//     options: [
//       'United States',
//       'United Kingdom',
//       'Australia',
//       'Canada',
//       'Singapore',
//       'France',
//       'Germany',
//       'New Zealand',
//       'Ireland'
//     ]
//   },
//   {
//     id: 'courseLevel',
//     name: 'Course level',
//     icon: GraduationCap,
//     options: ['Bachelors', 'Masters']
//   },
//   {
//     id: 'areaOfStudy',
//     name: 'Area of study',
//     icon: Briefcase,
//     searchable: true,
//     recommended: [
//       'Business and Management',
//       'Computer Science and IT',
//       'Engineering'
//     ],
//     options: [
//       'Business and Management',
//       'Computer Science and IT',
//       'Engineering',
//       'Social Science',
//       'Architecture',
//       'Professional Studies'
//     ]
//   },
//   {
//     id: 'englishTest',
//     name: 'English proficiency exam',
//     icon: MessageSquare,
//     options: ['TOEFL', 'IELTS', 'PTE', 'None'],
//     hasScore: true,
//     scoreRange: { min: 3, max: 9, step: 0.5 }
//   },
//   {
//     id: 'aptitudeTest',
//     name: 'Academic proficiency exam',
//     icon: Brain,
//     options: ['GRE', 'GMAT', 'None'],
//     hasScore: true,
//     scoreRange: { min: 200, max: 800, step: 10 }
//   },
//   {
//     id: 'education',
//     name: 'Higher education',
//     icon: School,
//     options: ['12th', 'Bachelors', 'Masters'],
//     hasMarks: true,
//     hasBacklogs: true
//   }
// ]

// export default function FilterSidebar({ selectedFilters = {}, onFilterChange }) {
//   const [expandedFilters, setExpandedFilters] = useState([])
//   const [searchQueries, setSearchQueries] = useState({})
//   const [localSelectedFilters, setLocalSelectedFilters] = useState(selectedFilters)

//   const toggleFilter = (filterId) => {
//     setExpandedFilters(current =>
//       current.includes(filterId)
//         ? current.filter(id => id !== filterId)
//         : [...current, filterId]
//     )
//   }

//   const handleOptionSelect = (filterId, value) => {
//     const updatedFilters = {
//       ...localSelectedFilters,
//       [filterId]: value
//     }
//     setLocalSelectedFilters(updatedFilters)
//     onFilterChange?.(updatedFilters)
//   }

//   const handleSearch = (filterId, query) => {
//     setSearchQueries(prev => ({ ...prev, [filterId]: query }))
//   }

//   const renderFilterContent = (filter) => {
//     const searchQuery = searchQueries[filter.id] || ''
//     const filteredOptions = filter.options.filter(option =>
//       option.toLowerCase().includes(searchQuery.toLowerCase())
//     )

//     return (
//       <div className="mt-4 space-y-2">
//         {filter.searchable && (
//           <div className="relative mb-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full p-2 pl-8 rounded-md bg-blue-50 text-sm border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               value={searchQuery}
//               onChange={(e) => handleSearch(filter.id, e.target.value)}
//             />
//             <Search className="absolute left-2 top-2.5 w-4 h-4 text-blue-400" />
//           </div>
//         )}

//         {filter.recommended && (
//           <>
//             <div className="text-sm font-medium mb-2 text-blue-700">Recommended</div>
//             {filter.recommended.map(option => (
//               <button
//                 key={option}
//                 className={`w-full text-left p-2 rounded-md text-sm border ${
//                   localSelectedFilters[filter.id] === option
//                     ? 'bg-blue-100 text-blue-700 border-blue-300'
//                     : 'border-gray-200 hover:bg-blue-50 hover:border-blue-200'
//                 }`}
//                 onClick={() => handleOptionSelect(filter.id, option)}
//               >
//                 {option}
//               </button>
//             ))}
//           </>
//         )}

//         {filteredOptions.map(option => (
//           <button
//             key={option}
//             className={`w-full text-left p-2 rounded-md text-sm border ${
//               localSelectedFilters[filter.id] === option
//                 ? 'bg-blue-100 text-blue-700 border-blue-300'
//                 : 'border-gray-200 hover:bg-blue-50 hover:border-blue-200'
//             }`}
//             onClick={() => handleOptionSelect(filter.id, option)}
//           >
//             {option}
//           </button>
//         ))}

//         {filter.hasScore && localSelectedFilters[filter.id] && localSelectedFilters[filter.id] !== 'None' && (
//           <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-200">
//             <label className="text-sm text-blue-700 font-medium">Select your score</label>
//             <input
//               type="range"
//               min={filter.scoreRange.min}
//               max={filter.scoreRange.max}
//               step={filter.scoreRange.step}
//               value={localSelectedFilters[`${filter.id}Score`] || filter.scoreRange.min}
//               onChange={(e) => handleOptionSelect(`${filter.id}Score`, e.target.value)}
//               className="w-full mt-2"
//             />
//             <div className="flex justify-between text-xs text-blue-600 mt-1">
//               <span>{filter.scoreRange.min}</span>
//               <span>{localSelectedFilters[`${filter.id}Score`] || filter.scoreRange.min}</span>
//               <span>{filter.scoreRange.max}</span>
//             </div>
//           </div>
//         )}

//         {filter.hasMarks && localSelectedFilters[filter.id] && (
//           <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-200">
//             <label className="text-sm text-blue-700 font-medium">Enter your marks in %</label>
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={localSelectedFilters.marks || 60}
//               onChange={(e) => handleOptionSelect('marks', e.target.value)}
//               className="w-full mt-2"
//             />
//             <div className="flex justify-between text-xs text-blue-600 mt-1">
//               <span>0</span>
//               <span>{localSelectedFilters.marks || 60}%</span>
//               <span>100</span>
//             </div>
//           </div>
//         )}

//         {filter.hasBacklogs && localSelectedFilters[filter.id] && (
//           <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-200">
//             <label className="text-sm text-blue-700 font-medium">Backlogs</label>
//             <input
//               type="range"
//               min="0"
//               max="5"
//               value={localSelectedFilters.backlogs || 0}
//               onChange={(e) => handleOptionSelect('backlogs', e.target.value)}
//               className="w-full mt-2"
//             />
//             <div className="flex justify-between text-xs text-blue-600 mt-1">
//               <span>0</span>
//               <span>{localSelectedFilters.backlogs || 0}</span>
//               <span>5+</span>
//             </div>
//           </div>
//         )}
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-4 bg-white p-4 rounded-lg shadow-sm">
//       {filters.map(filter => (
//         <div key={filter.id} className="border-b border-gray-200 pb-4">
//           <button
//             onClick={() => toggleFilter(filter.id)}
//             className="flex items-center justify-between w-full text-left p-2 rounded-md hover:bg-blue-50"
//           >
//             <div className="flex items-center space-x-3">
//               <filter.icon className="w-5 h-5 text-blue-500" />
//               <span className="text-blue-700 font-medium">{filter.name}</span>
//             </div>
//             <ChevronDown
//               className={`w-5 h-5 text-blue-500 transition-transform ${
//                 expandedFilters.includes(filter.id) ? 'rotate-180' : ''
//               }`}
//             />
//           </button>
//           {expandedFilters.includes(filter.id) && (
//             <div className="mt-2 ml-10">
//               {renderFilterContent(filter)}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }

import { useState } from 'react'
import { ChevronDown, Search, DollarSign, Calendar, BookOpen, Globe, GraduationCap, Briefcase, MessageSquare, Brain, School } from 'lucide-react'

const filters = [
  {
    id: 'budget',
    name: 'Budget',
    icon: DollarSign,
    options: [
      '5 to 10 lakhs',
      '10 to 20 lakhs',
      '20 to 30 lakhs',
      '30 to 40 lakhs',
      '40 to 50 lakhs',
      '50+ lakhs'
    ]
  },
  {
    id: 'intake',
    name: 'Intake',
    icon: Calendar,
    options: [
      'Jan - Mar 2025',
      'Apr - Jun 2025',
      'Jul - Sep 2025',
      'Oct - Dec 2025',
      'Jan - Mar 2026'
    ]
  },
  {
    id: 'specialisation',
    name: 'Specialisation',
    icon: BookOpen,
    searchable: true,
    options: [
      'Computer Science, Software Engineering',
      'Cyber Security, Information Security',
      'Data Science and Analytics',
      'Information Technology'
    ]
  },
  {
    id: 'country',
    name: 'Country',
    icon: Globe,
    options: [
      'United States',
      'United Kingdom',
      'Australia',
      'Canada',
      'Singapore',
      'France',
      'Germany',
      'New Zealand',
      'Ireland'
    ]
  },
  {
    id: 'courseLevel',
    name: 'Course level',
    icon: GraduationCap,
    options: ['Bachelors', 'Masters']
  },
  {
    id: 'areaOfStudy',
    name: 'Area of study',
    icon: Briefcase,
    searchable: true,
    recommended: [
      'Business and Management',
      'Computer Science and IT',
      'Engineering'
    ],
    options: [
      'Business and Management',
      'Computer Science and IT',
      'Engineering',
      'Social Science',
      'Architecture',
      'Professional Studies'
    ]
  },
  {
    id: 'englishTest',
    name: 'English proficiency exam',
    icon: MessageSquare,
    options: ['TOEFL', 'IELTS', 'PTE', 'None'],
    hasScore: true,
    scoreRange: { min: 3, max: 9, step: 0.5 }
  },
  {
    id: 'aptitudeTest',
    name: 'Academic proficiency exam',
    icon: Brain,
    options: ['GRE', 'GMAT', 'None'],
    hasScore: true,
    scoreRange: { min: 200, max: 800, step: 10 }
  },
  {
    id: 'education',
    name: 'Higher education',
    icon: School,
    options: ['12th', 'Bachelors', 'Masters'],
    hasMarks: true,
    hasBacklogs: true
  }
]

export default function FilterSidebar({ selectedFilters = {}, onFilterChange }) {
  const [expandedFilters, setExpandedFilters] = useState([])
  const [searchQueries, setSearchQueries] = useState({})
  const [localSelectedFilters, setLocalSelectedFilters] = useState(selectedFilters)

  const toggleFilter = (filterId) => {
    setExpandedFilters(current =>
      current.includes(filterId)
        ? current.filter(id => id !== filterId)
        : [...current, filterId]
    )
  }

  const handleOptionSelect = (filterId, value) => {
    const updatedFilters = {
      ...localSelectedFilters,
      [filterId]: value
    }
    setLocalSelectedFilters(updatedFilters)
    onFilterChange?.(updatedFilters)
  }

  const handleSearch = (filterId, query) => {
    setSearchQueries(prev => ({ ...prev, [filterId]: query }))
  }

  const renderFilterContent = (filter) => {
    const searchQuery = searchQueries[filter.id] || ''
    const filteredOptions = filter.options.filter(option =>
      option.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
      <div className="mt-4 space-y-2">
        {filter.searchable && (
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-8 rounded-md bg-blue-50 text-sm border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={searchQuery}
              onChange={(e) => handleSearch(filter.id, e.target.value)}
            />
            <Search className="absolute left-2 top-2.5 w-4 h-4 text-blue-400" />
          </div>
        )}

        {filter.recommended && (
          <>
            <div className="text-sm font-medium mb-2 text-blue-700">Recommended</div>
            {filter.recommended.map(option => (
              <button
                key={option}
                className={`w-full text-left p-2 rounded-md text-sm border ${
                  localSelectedFilters[filter.id] === option
                    ? 'bg-blue-100 text-blue-700 border-blue-300'
                    : 'border-gray-200 hover:bg-blue-50 hover:border-blue-200'
                }`}
                onClick={() => handleOptionSelect(filter.id, option)}
              >
                {option}
              </button>
            ))}
          </>
        )}

        {filteredOptions.map(option => (
          <button
            key={option}
            className={`w-full text-left p-2 rounded-md text-sm border ${
              localSelectedFilters[filter.id] === option
                ? 'bg-blue-100 text-blue-700 border-blue-300'
                : 'border-gray-200 hover:bg-blue-50 hover:border-blue-200'
            }`}
            onClick={() => handleOptionSelect(filter.id, option)}
          >
            {option}
          </button>
        ))}

        {filter.hasScore && localSelectedFilters[filter.id] && localSelectedFilters[filter.id] !== 'None' && (
          <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-200">
            <label className="text-sm text-blue-700 font-medium">Select your score</label>
            <input
              type="range"
              min={filter.scoreRange.min}
              max={filter.scoreRange.max}
              step={filter.scoreRange.step}
              value={localSelectedFilters[`${filter.id}Score`] || filter.scoreRange.min}
              onChange={(e) => handleOptionSelect(`${filter.id}Score`, e.target.value)}
              className="w-full mt-2"
            />
            <div className="flex justify-between text-xs text-blue-600 mt-1">
              <span>{filter.scoreRange.min}</span>
              <span>{localSelectedFilters[`${filter.id}Score`] || filter.scoreRange.min}</span>
              <span>{filter.scoreRange.max}</span>
            </div>
          </div>
        )}

        {filter.hasMarks && localSelectedFilters[filter.id] && (
          <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-200">
            <label className="text-sm text-blue-700 font-medium">Enter your marks in %</label>
            <input
              type="range"
              min="0"
              max="100"
              value={localSelectedFilters.marks || 60}
              onChange={(e) => handleOptionSelect('marks', e.target.value)}
              className="w-full mt-2"
            />
            <div className="flex justify-between text-xs text-blue-600 mt-1">
              <span>0</span>
              <span>{localSelectedFilters.marks || 60}%</span>
              <span>100</span>
            </div>
          </div>
        )}

        {filter.hasBacklogs && localSelectedFilters[filter.id] && (
          <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-200">
            <label className="text-sm text-blue-700 font-medium">Backlogs</label>
            <input
              type="range"
              min="0"
              max="5"
              value={localSelectedFilters.backlogs || 0}
              onChange={(e) => handleOptionSelect('backlogs', e.target.value)}
              className="w-full mt-2"
            />
            <div className="flex justify-between text-xs text-blue-600 mt-1">
              <span>0</span>
              <span>{localSelectedFilters.backlogs || 0}</span>
              <span>5+</span>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded-lg shadow-sm">
      {filters.map(filter => (
        <div key={filter.id} className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleFilter(filter.id)}
            className="flex items-center justify-between w-full text-left p-2 rounded-md hover:bg-blue-50"
          >
            <div className="flex items-center space-x-3">
              <filter.icon className="w-5 h-5 text-blue-500" />
              <span className="text-blue-700 font-medium">{filter.name}</span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-blue-500 transition-transform ${
                expandedFilters.includes(filter.id) ? 'rotate-180' : ''
              }`}
            />
          </button>
          {expandedFilters.includes(filter.id) && (
            <div className="mt-2 ml-10">
              {renderFilterContent(filter)}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}


