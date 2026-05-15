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
    <section id="benefits" className="py-36 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)',
        }} />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="w-12 h-[3px] bg-primary mb-8" />
            <h2 className="font-bebas text-6xl md:text-8xl mb-8 tracking-tight leading-none">
              ¿POR QUÉ<br /><span className="text-primary">APEX</span>?
            </h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg">
              Todo lo que necesitas para alcanzar tus objetivos
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative p-8 bg-black border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-3 h-10 bg-primary transform -translate-x-3 group-hover:translate-x-0 transition-transform duration-300" />
                  <div className="absolute bottom-0 right-0 w-3 h-10 bg-primary transform translate-x-3 group-hover:translate-x-0 transition-transform duration-300" />

                  <div className="w-12 h-12 border border-primary/40 flex items-center justify-center mb-8 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                    <benefit.icon size={22} className="text-primary" />
                  </div>

                  <h3 className="font-oswald text-xl font-bold mb-4 text-white uppercase tracking-wider group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed text-sm">
                    {benefit.description}
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
