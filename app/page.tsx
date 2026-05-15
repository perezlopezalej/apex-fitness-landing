'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Benefits from '@/components/Benefits'
import ImageSection from '@/components/ImageSection'
import Pricing from '@/components/Pricing'
import AsymmetricGallery from '@/components/AsymmetricGallery'
import Trainers from '@/components/Trainers'
import Facilities from '@/components/Facilities'
import Schedule from '@/components/Schedule'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import CaseStudyModal from '@/components/CaseStudyModal'

export default function Home() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false)

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar onOpenCaseStudy={() => setCaseStudyOpen(true)} />
      <Hero />
      <Stats />
      <ImageSection />
      <Benefits />
      <Testimonials />
      <Pricing />
      <AsymmetricGallery />
      <Trainers />
      <Facilities />
      <Schedule />
      <FAQ />
      <CTA onOpenCaseStudy={() => setCaseStudyOpen(true)} />
      <CaseStudyModal isOpen={caseStudyOpen} onClose={() => setCaseStudyOpen(false)} />
    </main>
  )
}
