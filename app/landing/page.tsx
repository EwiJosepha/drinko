import Footer from '@/components/organisms/footer'
import HeroSection from '@/components/organisms/heroSec'
import Navbar from '@/components/organisms/nav'

import React from 'react'
import PopularSection from '@/components/organisms/popular'
import Cards from '@/components/organisms/card'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <FilterByCategories /> */}
      <PopularSection />
      <Cards />
      <Footer />
    </div>
  )
}

export default LandingPage
