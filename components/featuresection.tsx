import React from 'react'
import ContentSectionWrapper, { PreTitleDescription } from './content-section-wrapper'

const FeatureSection = () => {
  return (
    <ContentSectionWrapper
     className='min-h-screen pt-10'
    >
      <div className='px-10'>
        <PreTitleDescription
        preTitle='How it works'
        title="Here's our platform"
        description="At our platform, we've simplified the process of connecting clients and professional cleaners for a hassle-free and efficient experience. Here's a step-by-step guide on how our platform works"
        position='center'
        />
      </div>
    </ContentSectionWrapper>
  )
}

export default FeatureSection