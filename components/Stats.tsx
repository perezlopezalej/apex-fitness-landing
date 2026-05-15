'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Miembros Activos', description: 'Comunidad en crecimiento' },
  { value: 15, suffix: '+', label: 'Entrenadores', description: 'Certificados y especializados' },
  { value: 24, suffix: '/7', label: 'Acceso', description: 'Entrena cuando quieras' },
  { value: 98, suffix: '%', label: 'Satisfacción', description: 'Resultados garantizados' },
]

function CountUpAnimation({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * value))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)',
        }} />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative p-12 bg-dark border-2 border-white/5 hover:border-primary/30 transition-all duration-500">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[3px] border-t-[3px] border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ width: '40px', height: '40px' }} />
                <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[3px] border-b-[3px] border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ width: '40px', height: '40px' }} />

                <div className="text-center">
                  <div className="font-bebas text-8xl text-white mb-2 leading-none group-hover:text-primary transition-colors duration-300">
                    <CountUpAnimation value={stat.value} />
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  
                  <h3 className="font-oswald text-xl font-bold text-white mb-3 uppercase tracking-wider">
                    {stat.label}
                  </h3>
                  
                  <p className="text-gray-500 text-sm uppercase tracking-widest">
                    {stat.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-32 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent max-w-4xl mx-auto"
        />
      </div>
    </section>
  )
}
