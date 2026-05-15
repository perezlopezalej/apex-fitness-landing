'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Users, Clock, TrendingUp, Award, Heart } from 'lucide-react'

const benefits = [
  {
    icon: Dumbbell,
    title: 'Equipamiento Premium',
    description: 'Máquinas de última generación y equipamiento profesional para cada tipo de entrenamiento.',
  },
  {
    icon: Users,
    title: 'Entrenadores Certificados',
    description: 'Profesionales con experiencia internacional listos para llevarte al siguiente nivel.',
  },
  {
    icon: Clock,
    title: 'Horario 24/7',
    description: 'Entrena cuando quieras. Acceso ilimitado todos los días del año.',
  },
  {
    icon: TrendingUp,
    title: 'Planes Personalizados',
    description: 'Programas diseñados específicamente para tus objetivos y nivel de condición física.',
  },
  {
    icon: Award,
    title: 'Clases Grupales',
    description: 'Yoga, CrossFit, Spinning, HIIT y más. Más de 50 clases semanales incluidas.',
  },
  {
    icon: Heart,
    title: 'Nutrición Deportiva',
    description: 'Asesoría nutricional profesional y planes alimenticios personalizados.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-48 bg-dark relative overflow-hidden">
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
            ¿POR QUÉ <span className="text-primary">APEX</span>?
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Todo lo que necesitas para alcanzar tus objetivos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative p-12 bg-black border-2 border-white/5 hover:border-primary transition-all duration-500 overflow-hidden"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-12 bg-primary transform -translate-x-3 group-hover:translate-x-0 transition-transform duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-12 bg-primary transform translate-x-3 group-hover:translate-x-0 transition-transform duration-300" />

              <div className="w-20 h-20 bg-primary flex items-center justify-center mb-10 group-hover:rotate-12 transition-all duration-500">
                <benefit.icon size={36} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="font-oswald text-2xl font-bold mb-6 text-white uppercase tracking-wider group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed text-sm">
                {benefit.description}
              </p>

              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
