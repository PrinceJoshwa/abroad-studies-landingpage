
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import ResultsPage from '../components/course-finder/ResultsPage'
import img1 from '../assets/crcimg11.png'

const steps = [
  {
    id: 'initial',
    title: "Let's get started",
    fields: ['fullName', 'email', 'phone']
  },
  {
    id: 'destination',
    title: 'where do you want to study?',
    fields: ['country']
  },
  {
    id: 'englishTest',
    title: 'which english test did you take?',
    fields: ['englishTest', 'englishScore']
  },
  {
    id: 'degree',
    title: 'what degree do you want to pursue?',
    fields: ['degree']
  },
  {
    id: 'intake',
    title: 'What is your preferred intake?',
    fields: ['intake']
  },
  {
    id: 'studyArea',
    title: 'what is your preferred area of study?',
    fields: ['studyArea']
  },
  {
    id: 'education',
    title: 'what is your current education level?',
    fields: ['education', 'marks', 'backlogs']
  },
  {
    id: 'experience',
    title: 'do you have any work experience?',
    fields: ['hasWorkExperience']
  },
  {
    id: 'aptitude',
    title: 'which aptitude test did you take?',
    fields: ['aptitudeTest', 'aptitudeScore']
  }
]

const countries = [
  { name: 'United States', flag: '🇺🇸' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Singapore', flag: '🇸🇬' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'New Zealand', flag: '🇳🇿' },
  { name: 'Ireland', flag: '🇮🇪' },
  { name: 'UAE', flag: '🇦🇪' }
]

const studyAreas = [
  { name: 'Business and Management', icon: '🏢' },
  { name: 'Computer Science and IT', icon: '💻' },
  { name: 'Engineering', icon: '⚙️' },
  { name: 'Social Science', icon: '🌍' },
  { name: 'Architecture', icon: '🏛️' },
  { name: 'Professional Studies', icon: '📚' },
  { name: 'Hospitality and Tourism', icon: '🏨' },
  { name: 'Science', icon: '🔬' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Fine Arts', icon: '🎨' },
  { name: 'Law', icon: '⚖️' },
  { name: 'Education', icon: '🎓' },
  { name: 'Mathematics', icon: '🔢' },
  { name: 'Medicine', icon: '🏥' },
  { name: 'Journalism and Media', icon: '📰' },
  { name: 'Agriculture and Forestry', icon: '🌱' }
]


export default function CourseFinder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [stats, setStats] = useState({ universities: 1500, courses: 100000 })
  const [showResults, setShowResults] = useState(false)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setStats({
        universities: Math.floor(Math.random() * 1000),
        courses: Math.floor(Math.random() * 100000)
      })
    } else {
      // Show results page when form is complete
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (showResults) {
    return <ResultsPage />
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Panel */}
          <motion.div
            className="bg-blue-700 text-white p-8 rounded-3xl relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <div className="bg-white/10 inline-flex rounded-full p-4 mb-6">
                <div className="flex gap-4 text-sm">
                  <div>
                    <div className="font-bold text-2xl">{stats.universities}</div>
                    <div className="text-white/80">universities</div>
                  </div>
                  <div className="border-l border-white/20" />
                  <div>
                    <div className="font-bold text-2xl">{stats.courses}</div>
                    <div className="text-white/80">courses</div>
                  </div>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-4">
                Find the best<br />course and<br />universities
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-700/50" />
            <div className="absolute bottom-0 left-0 right-0 h-64">
              <img
                src={img1}
                alt="Decorative"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="flex items-center text-gray-600 mb-6"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={steps[currentStep].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StepContent
                  step={steps[currentStep]}
                  formData={formData}
                  setFormData={setFormData}
                  onNext={handleNext}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function StepContent({ step, formData, setFormData, onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onNext()
  }

  const renderFields = () => {
    switch (step.id) {
      case 'initial':
        return (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="flex">
                <select className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mr-2">
                  <option>+91</option>
                </select>
                <input
                  type="tel"
                  className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>
          </>
        )

      case 'englishTest':
        return (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {['TOEFL', 'IELTS', 'PTE', 'None'].map((test) => (
                <button
                  key={test}
                  className={`p-4 rounded-lg border ${
                    formData.englishTest === test
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => setFormData({ ...formData, englishTest: test })}
                  type="button"
                >
                  {test}
                </button>
              ))}
            </div>
            {formData.englishTest && formData.englishTest !== 'None' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  select your score
                </label>
                <input
                  type="range"
                  min="3"
                  max="9"
                  step="0.5"
                  className="w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, englishScore: e.target.value })
                  }
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>3</span>
                  <span>9</span>
                </div>
                <div className="text-center mt-2 text-lg font-semibold">
                  {formData.englishScore || 6.5}
                </div>
              </div>
            )}
          </>
        )

      case 'destination':
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {countries.map((country) => (
              <button
                key={country.name}
                className={`p-4 rounded-lg border ${
                  formData.country === country.name
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200'
                }`}
                onClick={() => setFormData({ ...formData, country: country.name })}
                type="button"
              >
                <span className="text-2xl mr-2">{country.flag}</span>
                <span>{country.name}</span>
              </button>
            ))}
          </div>
        )

      case 'intake':
        return (
          <div className="grid grid-cols-2 gap-4">
            {['Jan - Mar 2025', 'Apr - Jun 2025', 'Jul - Sep 2025', 'Oct - Dec 2025', 'Jan - Mar 2026', 'Not Decided'].map((intake) => (
              <button
                key={intake}
                className={`p-4 rounded-lg border ${
                  formData.intake === intake
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200'
                }`}
                onClick={() => setFormData({ ...formData, intake })}
                type="button"
              >
                {intake}
              </button>
            ))}
          </div>
        )

      case 'degree':
        return (
          <div className="grid grid-cols-2 gap-4">
            {['Bachelors', 'Masters'].map((degree) => (
              <button
                key={degree}
                className={`p-4 rounded-lg border ${
                  formData.degree === degree
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200'
                }`}
                onClick={() => setFormData({ ...formData, degree })}
                type="button"
              >
                {degree}
              </button>
            ))}
          </div>
        )

      case 'studyArea':
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {studyAreas.map((area) => (
              <button
                key={area.name}
                className={`p-4 rounded-lg border ${
                  formData.studyArea === area.name
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200'
                }`}
                onClick={() => setFormData({ ...formData, studyArea: area.name })}
                type="button"
              >
                <span className="text-2xl mr-2">{area.icon}</span>
                <span>{area.name}</span>
              </button>
            ))}
          </div>
        )

      case 'education':
        return (
          <>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {['12th', 'Bachelors', 'Masters'].map((education) => (
                <button
                  key={education}
                  className={`p-4 rounded-lg border ${
                    formData.education === education
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => setFormData({ ...formData, education })}
                  type="button"
                >
                  {education}
                </button>
              ))}
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                enter your marks in %
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                className="w-full"
                onChange={(e) =>
                  setFormData({ ...formData, marks: e.target.value })
                }
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>0</span>
                <span>100</span>
              </div>
              <div className="text-center mt-2 text-lg font-semibold">
                {formData.marks || 50}%
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                backlogs
              </label>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                className="w-full"
                onChange={(e) =>
                  setFormData({ ...formData, backlogs: e.target.value })
                }
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>0</span>
                <span>5+</span>
              </div>
              <div className="text-center mt-2 text-lg font-semibold">
                {formData.backlogs || 0}
              </div>
            </div>
          </>
        )

      case 'experience':
        return (
          <div className="grid grid-cols-2 gap-4">
            {['Yes', 'No'].map((option) => (
              <button
                key={option}
                className={`p-4 rounded-lg border ${
                  formData.hasWorkExperience === option
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200'
                }`}
                onClick={() => setFormData({ ...formData, hasWorkExperience: option })}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        )

      case 'aptitude':
        return (
          <>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {['GRE', 'GMAT', 'None'].map((test) => (
                <button
                  key={test}
                  className={`p-4 rounded-lg border ${
                    formData.aptitudeTest === test
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => setFormData({ ...formData, aptitudeTest: test })}
                  type="button"
                >
                  {test}
                </button>
              ))}
            </div>
            {formData.aptitudeTest && formData.aptitudeTest !== 'None' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  what is your score?
                </label>
                <input
                  type="range"
                  min="200"
                  max="800"
                  step="10"
                  className="w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, aptitudeScore: e.target.value })
                  }
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>200</span>
                  <span>800</span>
                </div>
                <div className="text-center mt-2 text-lg font-semibold">
                  {formData.aptitudeScore || 550}
                </div>
              </div>
            )}
          </>
        )

      default:
        return <p>Step content not implemented yet</p>
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        {step.title}
      </h2>
      {renderFields()}
      <div className="mt-8">
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
        >
          Next
        </button>
      </div>
    </form>
  )
}

