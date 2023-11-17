import React from 'react'
import ContentSectionWrapper from '../content-section-wrapper'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Lock } from 'lucide-react'
const NewLetterSection = () => {
  return (
    <ContentSectionWrapper
      className='min-h-[50vh] flex items-center' 
    >
      <div className='md:my-24 my-10'>
        <div className='mt-10 border-[1px] p-6 backdrop-blur-md rounded-lg'>
          <h2 className='mb-4 text-xl font-semibold'>Newsletter Sign Up Heading</h2>
          <div className='flex overflow-hidden border-[1px] rounded-md '>
            <Input className='bg-transparent border-none rounded-none' placeholder='Enter your email address'/>
            <Button className='bg-black/90 rounded-none'>Submit</Button>
          </div>
          <p className='text-xs flex items-center gap-1 mt-4'>
          <Lock size="1rem"/> Some kind of privacy statement etc goes here
          </p>
        </div>
      </div>
    </ContentSectionWrapper>
  )
}

export default NewLetterSection