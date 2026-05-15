'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Laura García',
    role: 'Ejecutiva de Marketing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&face',
    text: 'Perdí 18kg en 6 meses. El apoyo de mi entrenador y el plan nutricional fueron clave. Nunca pensé que podría lograr esta transformación.',
    rating: 5,
    result: '-18kg en 6 meses',
  },
  {
    name: 'Roberto Silva',
    role: 'Ingeniero de Software',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    text: 'Después de años sedentario, APEX cambió mi vida. El ambiente es motivador y los entrenadores realmente se preocupan por tu progreso.',
    rating: 5,
    result: '+15kg masa muscular',
  },
  {
    name: 'María Fernández',
    role: 'Empresaria',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    text: 'Las clases de yoga y el área de recuperación son excepcionales. Es mi escape diario del estrés. Un gimnasio verdaderamente premium.',
    rating: 5,
    result: 'Mejor calidad de vida',
  },
  {
    name: 'David Morales',
    role: 'Fotógrafo',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    text: 'Competí en mi primer CrossFit Open gracias al entrenamiento aquí. Sofia es increíble. El equipamiento es de nivel competitivo.',
    rating: 5,
    result: 'Top 10% regional',
  },
  {
    name: 'Carmen López',
    role: 'Doctora',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop',
    text: 'Como profesional de la salud, valoro el enfoque integral: ejercicio, nutrición y recuperación. APEX lo tiene todo. 100% recomendado.',
    rating: 5,
    result: 'Salud óptima',
  },
  {
    name: 'Andrés Ruiz',
    role: 'Abogado',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    text: 'El horario 24/7 es perfecto para mi agenda impredecible. Instalaciones siempre limpias y el personal es extremadamente profesional.',
    rating: 5,
    result: 'Consistencia total',
  },
]

export default function Testimonials() {
  return (
    <section className="py-48 bg-dark">
      
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="font-bebas text-8xl md:text-9xl mb-6 tracking-tight">
            HISTORIAS DE <span className="text-primary">TRANSFORMACIÓN</span>
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Resultados reales de personas reales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-10 bg-dark border border-white/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <Quote className="absolute top-8 right-8 text-primary/30" size={40} />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 overflow-hidden flex-shrink-0 border border-white/10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>

              <p className="text-gray-400 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="inline-block px-6 py-3 bg-primary/10 border border-primary">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">{testimonial.result}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">4.9/5</div>
              <div className="text-gray-400 text-sm">Rating Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-gray-400 text-sm">Transformaciones</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">98%</div>
              <div className="text-gray-400 text-sm">Renovación</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
