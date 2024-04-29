import Footer from '@/components/organisms/footer'
import HeroSection from '@/components/organisms/heroSec'
import Navbar from '@/components/organisms/nav'
import FilterByCategories from '@/components/organisms/filters'
import React from 'react'
import PopularSection from '@/components/organisms/popular'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FilterByCategories />
      <PopularSection />
      <Footer />
    </div>
  )
}

export default LandingPage
