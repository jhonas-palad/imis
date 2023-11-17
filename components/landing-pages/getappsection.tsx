import React from 'react'
import Image from 'next/image'
import ContentSectionWrapper from '../content-section-wrapper'
import { Button } from '../ui/button'
import iphone from '@/public/svg/iphone.svg'
const GetAppSection = () => {
  return (
    <ContentSectionWrapper
      asChild
      className='flex px-0 justify-center items-start'
    >
      <div className='backdrop-blur-lg bg-gray-200 shadow-sm relative p-10'>
        <div className='h-20 w-20 -z-[10] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[80px] bg-blue-700  rounded-md'/>
        <div className='grid grid-cols-[1.3fr_0.7fr] justify-center px-10 lg:px-32 xl:px-[10rem]'>
          <div className='flex flex-col justify-center gap-3'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl md:text-left'>
              Do You Need All Services<br/> at your Fingertips?
            </h2>
            <p className='text-xs sm:text-sm lg:text-base'>
              Download the <span>Imis App</span> Now
            </p>
            <div className='flex gap-2'>
              <Button className='bg-black'>
                Google Play
              </Button>
              <Button className='bg-black'>
                App store
              </Button>
            </div>
          </div>
          <div className='flex items-center'>
            <Image src={iphone} alt="" />
          </div>
        </div>
      </div>
    </ContentSectionWrapper>
  )
}

export default GetAppSection