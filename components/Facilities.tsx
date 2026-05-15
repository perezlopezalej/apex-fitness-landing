'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Wind, Droplets, Flame, Activity, Sparkles } from 'lucide-react'

const facilities = [
  {
    icon: Dumbbell,
    title: 'Zona de Pesas',
    description: 'Equipamiento premium de marcas líderes mundiales',
  },
  {
    icon: Activity,
    title: 'Cardio Avanzado',
    description: 'Máquinas con pantallas interactivas y programas personalizados',
  },
  {
    icon: Flame,
    title: 'CrossFit Box',
    description: 'Área completa con todo el equipo certificado',
  },
  {
    icon: Wind,
    title: 'Yoga & Pilates',
    description: 'Estudios con iluminación natural y ambiente zen',
  },
  {
    icon: Droplets,
    title: 'Sauna & Spa',
    description: 'Zona de recuperación con sauna y hidromasaje',
  },
  {
    icon: Sparkles,
    title: 'Vestuarios Premium',
    description: 'Lockers inteligentes, duchas de lujo y amenidades',
  },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-36 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)',
        }} />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="font-bebas text-8xl md:text-9xl mb-6 tracking-tight">
            INSTALACIONES <span className="text-primary">DE ÉLITE</span>
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Más de 2000m² de puro equipamiento y tecnología de vanguardia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative p-12 bg-darker border-2 border-white/5 hover:border-primary transition-all duration-500 overflow-hidden"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-12 bg-primary transform -translate-x-3 group-hover:translate-x-0 transition-transform duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-12 bg-primary transform translate-x-3 group-hover:translate-x-0 transition-transform duration-300" />

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-8 relative">
                  <div className="w-16 h-16 border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <facility.icon size={36} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-oswald text-2xl font-bold mb-4 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                  {facility.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed font-light">
                  {facility.description}
                </p>
              </div>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                alt="Área Principal"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-bebas text-5xl text-white uppercase tracking-wider">Área Principal</h3>
              </div>
            </div>
            
            <div className="aspect-video overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop"
                alt="Zona Funcional"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-bebas text-5xl text-white uppercase tracking-wider">Zona Funcional</h3>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-16 py-6 bg-primary hover:bg-white text-white hover:text-black font-oswald font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300"
            >
              Agenda una Visita
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
