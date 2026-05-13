'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ImageSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
      title: 'ENTRENAMIENTO INTENSO',
      yOffset: useTransform(scrollYProgress, [0, 1], [100, -100])
    },
    {
      url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
      title: 'EQUIPAMIENTO PREMIUM',
      yOffset: useTransform(scrollYProgress, [0, 1], [50, -50])
    },
    {
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
      title: 'CLASES GRUPALES',
      yOffset: useTransform(scrollYProgress, [0, 1], [150, -150])
    }
  ]

  return (
    <section ref={ref} className="py-48 bg-black overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <motion.div
                style={{ y: image.yOffset }}
                className="absolute inset-0 scale-110"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-end p-10">
                <h3 className="font-oswald text-3xl font-bold text-white uppercase tracking-wider group-hover:text-primary transition-colors duration-300">
                  {image.title}
                </h3>
              </div>
              <div className="absolute top-0 left-0 w-full h-[3px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
