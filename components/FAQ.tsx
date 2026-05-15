'use client'

import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: '¿Necesito experiencia previa para unirme?',
    answer: 'Para nada. Tenemos programas para todos los niveles, desde principiantes absolutos hasta atletas avanzados. Tu entrenador diseñará un plan personalizado según tu nivel actual.',
  },
  {
    question: '¿Puedo cancelar mi membresía en cualquier momento?',
    answer: 'Sí, ofrecemos membresías sin compromiso de permanencia. Puedes cancelar con 30 días de aviso previo sin penalización alguna.',
  },
  {
    question: '¿Las clases grupales tienen costo adicional?',
    answer: 'No. Todas las clases grupales (Yoga, CrossFit, Spinning, HIIT, etc.) están incluidas en tu membresía. Solo reserva tu lugar en la app.',
  },
  {
    question: '¿Qué incluye el plan nutricional?',
    answer: 'Evaluación inicial completa, plan alimenticio personalizado, recetario adaptado a tus preferencias, seguimiento semanal y ajustes mensuales según tu progreso.',
  },
  {
    question: '¿Hay estacionamiento disponible?',
    answer: 'Sí, contamos con estacionamiento privado gratuito para todos nuestros miembros con más de 100 espacios disponibles.',
  },
  {
    question: '¿Puedo traer invitados?',
    answer: 'Los planes Pro y Premium incluyen pases de invitado. Los miembros Básico pueden traer invitados con un pase diario de $10 USD.',
  },
  {
    question: '¿Ofrecen clases de prueba?',
    answer: 'Sí, ofrecemos un pase de 3 días completamente gratis para que pruebes todas nuestras instalaciones y clases antes de decidir.',
  },
  {
    question: '¿Qué medidas de higiene implementan?',
    answer: 'Limpieza profunda 3 veces al día, estaciones de desinfección en todo el gimnasio, ventilación HEPA, y toallas limpias ilimitadas para todos los miembros.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-bebas text-6xl md:text-7xl mb-6 tracking-tight">
            PREGUNTAS <span className="text-primary">FRECUENTES</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto font-light">
            Todo lo que necesitas saber antes de empezar
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 text-left group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex-1">
                    {faq.question}
                  </h3>
                  
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    {openIndex === index ? (
                      <Minus size={20} className="text-primary" />
                    ) : (
                      <Plus size={20} className="text-primary" />
                    )}
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 leading-relaxed mt-4 pr-14">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">¿Tienes más preguntas?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white/10 hover:bg-primary/20 border border-white/20 hover:border-primary/50 font-oswald font-bold uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:scale-105"
          >
            Contáctanos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
