'use client'

import { motion } from 'framer-motion'

export function Banner() {
  return (
    <motion.div className="w-full h-64 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-xl shadow-xl flex items-center justify-center"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.h1
        className="text-white text-4xl font-bold"
        whileHover={{ x: 5 }}
      >
        Hello World ✨
      </motion.h1>
    </motion.div>
  )
}
