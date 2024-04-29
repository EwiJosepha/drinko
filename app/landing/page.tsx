import Footer from '@/components/organisms/footer'
import HeroSection from '@/components/organisms/heroSec'
import Navbar from '@/components/organisms/nav'
import FilterByCategories from '@/components/organisms/filters'
import React from 'react'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FilterByCategories />
      <Footer />
    </div>
  )
}

export default LandingPage
