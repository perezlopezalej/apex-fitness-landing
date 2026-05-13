import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const oswald = Oswald({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'APEX Fitness - Transforma Tu Cuerpo',
  description: 'Gimnasio premium con entrenadores certificados, instalaciones de última generación y programas personalizados.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${bebasNeue.variable} ${oswald.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
