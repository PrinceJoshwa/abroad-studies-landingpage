import { motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function SuccessModal({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">
            You are <span className="text-blue-600">amazing</span>!
          </h2>
          <p className="text-gray-600">
            We have received your details, our executives will get back to you soon!
          </p>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

