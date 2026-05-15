'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: 'Básico',
    price: '39',
    description: 'Perfecto para comenzar tu transformación',
    features: [
      'Acceso al gimnasio 24/7',
      'Vestuarios y duchas',
      'Área de cardio y pesas',
      'App de seguimiento',
      'Wi-Fi de alta velocidad',
    ],
    cta: 'Comenzar',
    popular: false,
  },
  {
    name: 'Pro',
    price: '69',
    description: 'Para quienes buscan resultados serios',
    features: [
      'Todo del plan Básico',
      '4 sesiones de entrenamiento personal',
      'Clases grupales ilimitadas',
      'Plan nutricional personalizado',
      'Acceso a zona funcional',
      'Descuento en suplementos',
    ],
    cta: 'Más Popular',
    popular: true,
  },
  {
    name: 'Premium',
    price: '99',
    description: 'Experiencia completa de élite',
    features: [
      'Todo del plan Pro',
      'Entrenamiento personal ilimitado',
      'Masajes deportivos mensuales',
      'Sauna y área de recuperación',
      'Invitado gratis cada semana',
      'Prioridad en reservas',
      'Nutricionista dedicado',
    ],
    cta: 'Experiencia Completa',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-40 bg-black">
      
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="font-bebas text-8xl md:text-9xl mb-6 tracking-tight">
            ELIGE TU <span className="text-primary">PLAN</span>
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Sin compromisos anuales. Cancela cuando quieras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0 max-w-7xl mx-auto border border-white/10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-12 border-white/10 transition-all duration-300 ${
                plan.popular
                  ? 'bg-primary/5 md:scale-105 z-10'
                  : 'bg-dark hover:bg-dark/80'
              } ${index !== 0 ? 'md:border-l' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-white text-xs font-bold uppercase tracking-widest">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-10 pb-10 border-b border-white/10">
                <h3 className="font-oswald text-4xl font-bold mb-4 uppercase tracking-wider">{plan.name}</h3>
                <p className="text-gray-500 mb-8 text-sm">{plan.description}</p>
                
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="font-bebas text-8xl text-primary">${plan.price}</span>
                  <span className="text-gray-500 pb-6 text-sm">/mes</span>
                </div>
              </div>

              <ul className="space-y-6 mb-14">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check className={`mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary' : 'text-white/40'}`} size={18} />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full py-6 font-oswald font-bold text-lg uppercase tracking-[0.2em] transition-all duration-300 text-center ${
                  plan.popular
                    ? 'bg-primary hover:bg-white text-white hover:text-black'
                    : 'bg-transparent hover:bg-primary border-2 border-white/20 hover:border-primary text-white'
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 text-gray-500 text-sm uppercase tracking-wider"
        >
          <p>Pago mensual • Sin permanencia • Garantía de satisfacción</p>
        </motion.div>
      </div>
    </section>
  )
}
