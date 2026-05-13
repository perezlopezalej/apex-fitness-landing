'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-48 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-bebas text-8xl md:text-[10rem] leading-none mb-10 tracking-tight">
                TU TRANSFORMACIÓN <br />
                <span className="text-primary">COMIENZA HOY</span>
              </h2>
            </motion.div>
            
            <div className="w-32 h-1 bg-primary mx-auto mb-12" />
            
            <p className="text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-light">
              Únete a más de 500 personas que ya están transformando sus vidas en APEX Fitness
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-primary rotate-45" />
                <span className="text-sm uppercase tracking-wider">Sin compromiso anual</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-primary rotate-45" />
                <span className="text-sm uppercase tracking-wider">3 días de prueba gratis</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-primary rotate-45" />
                <span className="text-sm uppercase tracking-wider">Evaluación gratuita</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-8 justify-center"
            >
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-16 py-7 bg-primary text-white font-oswald font-bold text-xl transition-all duration-500 flex items-center gap-4 uppercase tracking-[0.2em] overflow-hidden"
              >
                <span className="relative z-10">Únete Ahora</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={24} />
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity text-black">
                  <span>Únete Ahora</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                </span>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-7 bg-transparent border-2 border-white text-white font-oswald font-bold text-xl transition-all duration-300 uppercase tracking-[0.2em] hover:bg-white hover:text-black"
              >
                Agenda una Visita
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-white/10"
          >
            <div>
              <h3 className="font-bebas text-4xl mb-6 text-primary tracking-wider">APEX FITNESS</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                El gimnasio premium líder en transformaciones corporales y entrenamiento de alto rendimiento.
              </p>
              <div className="flex gap-4">
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-dark hover:bg-primary border border-white/10 hover:border-primary flex items-center justify-center transition-all duration-300"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-dark hover:bg-primary border border-white/10 hover:border-primary flex items-center justify-center transition-all duration-300"
                >
                  <Facebook size={20} />
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="font-oswald text-xl font-bold mb-6 uppercase tracking-wider">Enlaces Rápidos</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#pricing" className="hover:text-primary transition-colors uppercase tracking-wider">Membresías</a></li>
                <li><a href="#schedule" className="hover:text-primary transition-colors uppercase tracking-wider">Horarios</a></li>
                <li><a href="#trainers" className="hover:text-primary transition-colors uppercase tracking-wider">Entrenadores</a></li>
                <li><a href="#facilities" className="hover:text-primary transition-colors uppercase tracking-wider">Instalaciones</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-oswald text-xl font-bold mb-6 uppercase tracking-wider">Contacto</h4>
              <ul className="space-y-5 text-gray-500 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Av. Principal 123, Zona Premium, Ciudad</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-primary flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-primary flex-shrink-0" />
                  <span>hola@apexfitness.com</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16 pt-12 border-t border-white/5"
          >
            <p className="text-gray-600 text-xs uppercase tracking-widest">
              © 2026 APEX FITNESS. TODOS LOS DERECHOS RESERVADOS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
