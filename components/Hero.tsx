'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, LayoutGrid } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4zNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFpbikiLz48L3N2Zz4=')] opacity-[0.03]" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-8 py-48 relative z-10"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-2 border-2 border-primary mb-12 text-primary text-xs font-bold tracking-[0.3em] uppercase"
            >
              Entrena con los Mejores
            </motion.div>
            
            <h1 className="font-bebas text-[10rem] md:text-[16rem] leading-[0.85] mb-8 tracking-tighter">
              TRANSFORMA <br />
              <span className="text-primary">TU CUERPO</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
              Instalaciones de élite. Entrenadores certificados. Programas personalizados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-40"
          >
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-16 py-7 bg-primary text-white font-oswald font-bold text-xl transition-all duration-500 flex items-center gap-4 uppercase tracking-[0.2em] overflow-hidden"
            >
              <span className="relative z-10">Empieza Hoy</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={24} />
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity text-black">
                <span>Empieza Hoy</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </span>
            </motion.a>
            
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-16 py-7 bg-transparent border-2 border-white text-white font-oswald font-bold text-xl transition-all duration-300 flex items-center gap-4 uppercase tracking-[0.2em] hover:bg-white hover:text-black"
            >
              <LayoutGrid size={22} />
              Ver Instalaciones
            </motion.a>
          </motion.div>

        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[2px] h-16 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  )
}
