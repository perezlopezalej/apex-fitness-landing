'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AsymmetricGallery() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section id="gallery" ref={ref} className="py-48 bg-black overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="font-bebas text-8xl md:text-9xl mb-6 tracking-tight">
            ENTRENA EN <span className="text-primary">GRANDE</span>
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-8 max-w-[1400px] mx-auto">
          {/* Large Left Image */}
          <motion.div 
            style={{ y: y1 }}
            className="col-span-12 md:col-span-7 row-span-2 relative group overflow-hidden"
          >
            <div className="aspect-[4/5] relative">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
                alt="Training"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute inset-0 flex items-end p-12">
                <div>
                  <h3 className="font-bebas text-6xl text-white mb-4 tracking-tight">
                    EQUIPAMIENTO PROFESIONAL
                  </h3>
                  <p className="text-gray-300 text-lg max-w-md">
                    Tecnología de vanguardia para tu entrenamiento
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
            </div>
          </motion.div>

          {/* Top Right */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-5 relative group overflow-hidden"
          >
            <div className="aspect-[16/9] relative">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                alt="Classes"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-oswald text-4xl text-white uppercase tracking-wider">
                  Clases Grupales
                </h3>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </motion.div>

          {/* Bottom Right - Two Small */}
          <motion.div 
            style={{ y: y2 }}
            className="col-span-6 md:col-span-3 relative group overflow-hidden"
          >
            <div className="aspect-square relative">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                alt="Weights"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-oswald text-2xl text-white uppercase tracking-wider text-center">
                  Pesas
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="col-span-6 md:col-span-2 relative group overflow-hidden"
          >
            <div className="aspect-square relative">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop"
                alt="Functional"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-oswald text-xl text-white uppercase tracking-wider text-center px-4">
                  Funcional
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
