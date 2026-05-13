'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'line' | 'dots' | 'arrow'
}

export default function SectionDivider({ variant = 'line' }: SectionDividerProps) {
  if (variant === 'dots') {
    return (
      <div className="py-20 bg-black">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="w-2 h-2 bg-primary rotate-45"
            />
          ))}
        </motion.div>
      </div>
    )
  }

  if (variant === 'arrow') {
    return (
      <div className="py-20 bg-black">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-primary rotate-180" />
        </motion.div>
      </div>
    )
  }

  return (
    <div className="py-20 bg-black">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent max-w-6xl mx-auto"
      />
    </div>
  )
}
