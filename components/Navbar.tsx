'use client'

import { motion } from 'framer-motion'
import { Menu, X, Dumbbell } from 'lucide-react'
import { useState, useEffect } from 'react'

interface NavbarProps {
  onOpenCaseStudy?: () => void
}

export default function Navbar({ onOpenCaseStudy }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Beneficios', href: '#benefits' },
    { name: 'Planes', href: '#pricing' },
    { name: 'Entrenadores', href: '#trainers' },
    { name: 'Horarios', href: '#schedule' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          <a href="#hero" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-primary flex items-center justify-center"
            >
              <Dumbbell size={28} className="text-white" />
            </motion.div>
            <span className="font-bebas text-3xl tracking-wider">
              APEX <span className="text-primary">FITNESS</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                className="relative text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-oswald font-medium group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            {onOpenCaseStudy && (
              <motion.button
                onClick={onOpenCaseStudy}
                whileHover={{ scale: 1.03 }}
                className="relative text-gray-600 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-oswald font-medium group"
              >
                [ Case Study ]
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
              </motion.button>
            )}
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-primary hover:bg-white text-white hover:text-black font-oswald font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300"
            >
              Únete
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black border-t border-white/10"
        >
          <div className="container mx-auto px-8 py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg text-gray-300 hover:text-white transition-colors py-2 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            {onOpenCaseStudy && (
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenCaseStudy() }}
                className="block text-left text-sm text-gray-500 hover:text-white transition-colors py-2 uppercase tracking-[0.2em] font-oswald"
              >
                [ Case Study ]
              </button>
            )}
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-8 py-4 bg-primary hover:bg-primary/90 font-bold uppercase tracking-widest transition-all duration-300"
            >
              Únete
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
