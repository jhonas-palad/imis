import React from 'react'
import HeroSection from '@/components/herosection'
import FeatureSection from '@/components/featuresection'
import SecondSection from '@/components/landing-pages/secondsection'
import GetAppSection from '@/components/landing-pages/getappsection'
import NewLetterSection from '@/components/landing-pages/newslettersection'
import ReviewsSection from '@/components/landing-pages/reviewsections'
const Index = () => {
  return (
    <div className='w-full h-full'>
      <HeroSection/>
      <SecondSection/>
      <FeatureSection/>
      <GetAppSection/>
      <ReviewsSection/>
      <NewLetterSection/>
    </div>
  )
}

export default Index