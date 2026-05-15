'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Target, Lightbulb, Layers, TrendingUp } from 'lucide-react'
import { useEffect } from 'react'

interface CaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
}

const problems = [
  'Información dispersa y poco clara',
  'Sin estructura de clases o servicios',
  'Poca confianza visual online',
  'Sin flujo claro de conversión',
]

const solutions = [
  'Hero fuerte con mensaje de impacto inmediato',
  'Sección de clases visualmente estructurada',
  'Horarios y servicios claros a primera vista',
  'Testimonios reales para generar confianza',
  'CTAs visibles orientados a inscripción',
]

const decisions = [
  { title: 'Conversion-first', desc: 'Cada sección empuja al usuario hacia el registro, no solo hacia el scroll.' },
  { title: 'Jerarquía clara', desc: 'Tipografía y espaciado guían el ojo sin necesidad de instrucciones.' },
  { title: 'Bloques simples', desc: 'Sin sobrecarga visual — cada sección cumple exactamente un propósito.' },
  { title: 'Estilo premium', desc: 'Paleta oscura con acento rojo transmite energía y profesionalidad.' },
  { title: 'Mobile-first', desc: 'Optimizado donde está el usuario: el móvil es el canal principal.' },
]

const results = [
  'Más inscripciones de nuevos clientes',
  'Mayor confianza en la marca del gimnasio',
  'Mejor conversión desde tráfico web',
  'Imagen más profesional y moderna',
]

export default function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] bg-black overflow-y-auto"
        >
          {/* Noise overlay */}
          <div className="pointer-events-none fixed inset-0 z-[201] opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjAwIDIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZmlsdGVyIGlkPSdub2lzZSc+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9JzAuOScgbnVtT2N0YXZlcz0nNCcgLz48ZmVDb2xvck1hdHJpeCB0eXBlPSdzYXR1cmF0ZScgdmFsdWVzPScwJy8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSd1cmwoI25vaXNlKScgb3BhY2l0eT0nMC41Jy8+PC9zdmc+')]" />

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.3 }}
            onClick={onClose}
            className="fixed top-8 right-8 z-[202] w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
            aria-label="Cerrar case study"
          >
            <X size={18} className="text-white/60 group-hover:text-white transition-colors" />
          </motion.button>

          <div className="relative z-[202] container mx-auto px-8 py-28 max-w-4xl">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-24 border-b border-white/10 pb-20"
            >
              <div className="inline-block px-5 py-2 border border-primary/40 mb-10 text-primary text-xs font-bold tracking-[0.35em] uppercase font-oswald">
                Case Study · 2026
              </div>

              <h2 className="font-bebas text-[5rem] md:text-[8rem] leading-none tracking-tight mb-8">
                APEX <span className="text-primary">FITNESS</span>
              </h2>

              <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
                Diseño de una landing orientada a conversión para un gimnasio premium.
                Del tráfico sin estructura al flujo claro de captación de clientes.
              </p>

              <div className="flex flex-wrap gap-6 mt-10">
                {['UI/UX Design', 'Conversión', 'Mobile-first', 'Next.js'].map((tag) => (
                  <span key={tag} className="text-xs uppercase tracking-[0.2em] text-gray-600 border-b border-white/10 pb-1">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Context */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-20"
            >
              <p className="text-gray-500 text-sm uppercase tracking-[0.2em] font-oswald mb-4">Contexto</p>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl font-light">
                Muchos gimnasios dependen de Instagram o tráfico local, pero no tienen una web optimizada para convertir visitas en inscripciones. El negocio existe, la demanda existe — falta la estructura digital.
              </p>
            </motion.div>

            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0">
                  <Target size={15} className="text-white" />
                </div>
                <p className="font-oswald text-sm uppercase tracking-[0.2em] font-bold">Problema</p>
              </div>
              <div className="grid md:grid-cols-2 gap-3 pl-12">
                {problems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 border border-white/5 bg-white/[0.02]">
                    <div className="w-1.5 h-1.5 bg-white/30 rotate-45 mt-[7px] flex-shrink-0" />
                    <span className="text-gray-500 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={15} className="text-white" />
                </div>
                <p className="font-oswald text-sm uppercase tracking-[0.2em] font-bold">Solución</p>
              </div>
              <div className="grid md:grid-cols-2 gap-3 pl-12">
                {solutions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 border border-primary/15 bg-primary/[0.03]">
                    <div className="w-1.5 h-1.5 bg-primary rotate-45 mt-[7px] flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Design decisions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0">
                  <Layers size={15} className="text-white" />
                </div>
                <p className="font-oswald text-sm uppercase tracking-[0.2em] font-bold">Decisiones de Diseño</p>
              </div>
              <div className="pl-12 space-y-px">
                {decisions.map((item, i) => (
                  <div key={i} className="flex gap-8 py-5 border-b border-white/[0.06] group hover:bg-white/[0.02] transition-colors px-2">
                    <span className="font-oswald font-bold text-primary text-xs uppercase tracking-wider w-36 flex-shrink-0 pt-0.5">
                      {item.title}
                    </span>
                    <span className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-28"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={15} className="text-white" />
                </div>
                <p className="font-oswald text-sm uppercase tracking-[0.2em] font-bold">Resultado Esperado</p>
              </div>
              <div className="pl-12 grid md:grid-cols-2 gap-3">
                {results.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-4 border-b border-white/[0.06]">
                    <ArrowRight size={14} className="text-primary flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Close CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-10 border-t border-white/10"
            >
              <p className="text-gray-700 text-xs uppercase tracking-[0.2em]">
                Proyecto de portfolio · Alejandro Pérez
              </p>
              <button
                onClick={onClose}
                className="group flex items-center gap-3 px-10 py-4 border border-white/20 text-white font-oswald font-bold uppercase tracking-[0.2em] text-sm hover:border-primary hover:text-primary transition-all duration-300"
              >
                <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                Volver a la Landing
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
