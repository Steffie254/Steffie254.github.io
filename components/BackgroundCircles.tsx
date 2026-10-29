'use client'
import { motion } from 'framer-motion'

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], borderRadius: ['20%', '20%', '50%', '80%', '20%'] }}
      transition={{ duration: 2.5 }}
      className="absolute inset-0 flex justify-center items-center pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute border border-plum rounded-full h-[200px] w-[200px] animate-ping" />
      <div className="absolute rounded-full border border-plum h-[300px] w-[300px]" />
      <div className="absolute rounded-full border border-plum/70 h-[500px] w-[500px]" />
      <div className="absolute rounded-full border border-gold opacity-25 h-[650px] w-[650px] animate-pulse" />
      <div className="absolute rounded-full border border-plum/50 h-[800px] w-[800px]" />
    </motion.div>
  )
}
