'use client'

import { motion } from 'framer-motion'
import { Instagram, Award } from 'lucide-react'

const trainers = [
  {
    name: 'Carlos Mendoza',
    specialty: 'Fuerza & Hipertrofia',
    experience: '12 años de experiencia',
    certifications: 'NSCA-CPT, CSCS',
    description: 'Ex-atleta olímpico especializado en desarrollo muscular y periodización avanzada.',
    instagram: '@carlosmendoza',
  },
  {
    name: 'Sofia Ramírez',
    specialty: 'CrossFit & Funcional',
    experience: '8 años de experiencia',
    certifications: 'CF-L2, FMS',
    description: 'Campeona nacional de CrossFit. Experta en movimientos funcionales y rendimiento.',
    instagram: '@sofiaramirez',
  },
  {
    name: 'Miguel Torres',
    specialty: 'Pérdida de Peso',
    experience: '10 años de experiencia',
    certifications: 'ACE-CPT, PN1',
    description: 'Especialista en transformaciones corporales con más de 200 clientes exitosos.',
    instagram: '@migueltorres',
  },
  {
    name: 'Ana Martínez',
    specialty: 'Yoga & Movilidad',
    experience: '15 años de experiencia',
    certifications: 'RYT-500, E-RYT',
    description: 'Instructora certificada en múltiples estilos de yoga y terapia de movimiento.',
    instagram: '@anamartinez',
  },
]

export default function Trainers() {
  return (
    <section id="trainers" className="py-36 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(240,173,5,0.04),transparent_60%)]" />
      
      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="font-bebas text-8xl md:text-9xl mb-6 tracking-tight">
            NUESTROS <span className="text-primary">ENTRENADORES</span>
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Profesionales certificados comprometidos con tu éxito
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden bg-dark border border-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1571019613454-1cb2f99b2d8b' :
                      index === 1 ? '1544005313-94ddf0286df2' :
                      index === 2 ? '1567013127542-490d757e51fc' :
                      '1506126613408-eca07ce68773'
                    }?q=80&w=800&auto=format&fit=crop`}
                    alt={trainer.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />
                  
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary flex items-center justify-center transition-transform duration-500">
                    <Award size={24} className="text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {trainer.name}
                  </h3>
                  
                  <p className="text-primary font-semibold mb-2">{trainer.specialty}</p>
                  
                  <p className="text-sm text-gray-400 mb-3">{trainer.experience}</p>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                    <Award size={14} />
                    {trainer.certifications}
                  </div>
                  
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {trainer.description}
                  </p>
                  
                  <a
                    href={`https://instagram.com/${trainer.instagram.slice(1)}`}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={16} />
                    {trainer.instagram}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
