'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

const schedule = [
  {
    day: 'Lunes',
    classes: [
      { time: '06:00', name: 'HIIT Matutino', trainer: 'Miguel', duration: '45min' },
      { time: '09:00', name: 'Yoga Flow', trainer: 'Ana', duration: '60min' },
      { time: '12:00', name: 'CrossFit', trainer: 'Sofia', duration: '60min' },
      { time: '18:00', name: 'Spinning', trainer: 'Carlos', duration: '45min' },
      { time: '19:00', name: 'Funcional', trainer: 'Sofia', duration: '50min' },
    ],
  },
  {
    day: 'Martes',
    classes: [
      { time: '07:00', name: 'Pilates', trainer: 'Ana', duration: '60min' },
      { time: '10:00', name: 'Fuerza', trainer: 'Carlos', duration: '60min' },
      { time: '17:00', name: 'Box Fit', trainer: 'Miguel', duration: '45min' },
      { time: '19:00', name: 'Yoga Power', trainer: 'Ana', duration: '60min' },
    ],
  },
  {
    day: 'Miércoles',
    classes: [
      { time: '06:00', name: 'HIIT', trainer: 'Sofia', duration: '45min' },
      { time: '09:00', name: 'Stretching', trainer: 'Ana', duration: '45min' },
      { time: '12:00', name: 'CrossFit', trainer: 'Sofia', duration: '60min' },
      { time: '18:00', name: 'Spinning', trainer: 'Miguel', duration: '45min' },
      { time: '20:00', name: 'Funcional', trainer: 'Carlos', duration: '50min' },
    ],
  },
  {
    day: 'Jueves',
    classes: [
      { time: '07:00', name: 'Yoga Vinyasa', trainer: 'Ana', duration: '60min' },
      { time: '10:00', name: 'Fuerza', trainer: 'Carlos', duration: '60min' },
      { time: '17:00', name: 'HIIT', trainer: 'Miguel', duration: '45min' },
      { time: '19:00', name: 'Box Training', trainer: 'Sofia', duration: '50min' },
    ],
  },
  {
    day: 'Viernes',
    classes: [
      { time: '06:00', name: 'HIIT Matutino', trainer: 'Carlos', duration: '45min' },
      { time: '09:00', name: 'Pilates', trainer: 'Ana', duration: '60min' },
      { time: '12:00', name: 'CrossFit', trainer: 'Sofia', duration: '60min' },
      { time: '18:00', name: 'Spinning Party', trainer: 'Miguel', duration: '60min' },
    ],
  },
  {
    day: 'Sábado',
    classes: [
      { time: '08:00', name: 'Yoga Weekend', trainer: 'Ana', duration: '75min' },
      { time: '10:00', name: 'CrossFit Open', trainer: 'Sofia', duration: '60min' },
      { time: '11:30', name: 'Funcional', trainer: 'Carlos', duration: '60min' },
    ],
  },
  {
    day: 'Domingo',
    classes: [
      { time: '09:00', name: 'Yoga Restore', trainer: 'Ana', duration: '90min' },
      { time: '11:00', name: 'HIIT Light', trainer: 'Miguel', duration: '45min' },
    ],
  },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-36 bg-darker relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(240,173,5,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(240,173,5,0.07) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          {/* Red line decoration */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[2px] w-20 bg-primary" />
            <Clock size={32} className="text-primary" />
            <div className="h-[2px] w-20 bg-primary" />
          </div>

          <h2 className="font-bebas text-8xl md:text-9xl mb-6 uppercase tracking-wider">
            HORARIOS
          </h2>
          <p className="font-oswald text-xl text-gray-400 max-w-2xl mx-auto uppercase tracking-wider">
            Más de 50 clases semanales incluidas en tu membresía
          </p>
        </motion.div>

        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6">
            {schedule.map((day, dayIndex) => (
              <motion.div
                key={dayIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: dayIndex * 0.05 }}
                className="bg-black border-2 border-white/5 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                {/* Red accent top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="relative z-10 p-6">
                  <h3 className="font-bebas text-3xl mb-8 text-center uppercase tracking-wider border-b-2 border-white/10 pb-4">
                    {day.day}
                  </h3>

                  <div className="space-y-5">
                    {day.classes.map((classItem, classIndex) => (
                      <motion.div
                        key={classIndex}
                        whileHover={{ x: 4 }}
                        className="p-4 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer border-l-2 border-transparent hover:border-primary"
                      >
                        {/* Time and duration */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="font-bebas text-2xl text-primary tracking-wide">{classItem.time}</span>
                          </div>
                          <span className="font-oswald text-xs text-gray-500 uppercase tracking-wider">{classItem.duration}</span>
                        </div>
                        
                        {/* Class name */}
                        <h4 className="font-oswald font-bold text-lg mb-2 group-hover:text-primary transition-colors uppercase tracking-wide">
                          {classItem.name}
                        </h4>
                        
                        {/* Trainer */}
                        <p className="font-oswald text-sm text-gray-400 uppercase tracking-wider">Instructor: {classItem.trainer}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <p className="font-oswald text-gray-400 mb-8 uppercase tracking-wider text-sm">
              Reserva tu lugar en la app o llega 15 minutos antes
            </p>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-16 py-6 bg-primary hover:bg-white text-white hover:text-black font-oswald font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300"
            >
              Ver Membresías
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
