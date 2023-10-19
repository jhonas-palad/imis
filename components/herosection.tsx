import React from 'react'
import ContentSectionWrapper from './content-section-wrapper'
import { Button } from '@ui/button'
import { AspectRatio } from '@ui/aspect-ratio'
import Image from 'next/image'

import cloudSm from '@/public/svg/cloud-small.svg'

import heroAchievement from '@/public/svg/hero-achievement.svg'

import { ReactSVG } from 'react-svg'
import { cn } from '@/lib/utils'
import cleanerBroom from '@/public/svg/cleaner-broom.svg'
import heroTools from '@/public/svg/hero.svg'
import magnifier from '@/public/svg/magnifier.svg'
import TrustedCompanies from './trusted-companies'


interface CardProps {
  title: string;
  description: string;
  label: string;
  className?: string;
  icon?: string;
}
//USE LINE CLAMP
const Card:React.FC<CardProps> = ({title, description, label, className, icon}) => {
  return (
    <div className={cn('p-6 shadow-md duration-75 flex flex-col gap-6 items-stretch shadow-foreground/10 bg-white rounded-2xl', className)}>
      <strong className='text-base md:text-lg lg:text-xl font-medium'>{title}</strong>
      <p className='text-sm flex-1 lg:text-base leading-loose tracking-wider'>{description}</p>
      <div className='flex justify-between items-center gap-3'>
        <Image src={
          icon ?? ''} alt={icon ?? ''} className='w-1/4'/>
        <Button variant='ghost' className='rounded-sm bg-yellow-400 hover:bg-yellow-400/70'>{label}</Button>
      </div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <>
      <ContentSectionWrapper
      className='min-h-fit '
      >
        <div className='flex flex-col z-[10] py-10 md:pt-24 px-6 md:px-0 gap-6  md:grid md:grid-cols-[0.2fr_1fr]'>
          <div className='z-[20] whitespace-pre-wrap md:text-left'>
            <div className='bg-violet-600 text-white text-foreground px-2 text-sm font-medium rounded-full py-1 max-w-fit mb-2'>
              Cleaning service platform
            </div>
            <h1 className='text-left text-black/80 h-full text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight font-semibold'>
            Discover the best home service professionals.
            </h1>
          </div>
          <div className='relative flex flex-col sm:grid sm:grid-cols-2 gap-6 '>
            <Card 
                title='Book A Professional!' 
                description="Tired of cleaning your home? It's time to leave it to the professionals." 
                label='Find a pro'
                className='bg-white'
                icon={cleanerBroom}
              />
            <div className='absolute z-[-1] w-1/2 h-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-[200px] bg-blue-700 border-2'/>
              {/* <div className='block sm:hidden z-[-1] bg-black/80 absolute h-1/2 w-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-[100px] rounded-md'/> */}
            <Card 
                title='Join our platform' 
                description="We provide opportunities for you to connect with homeowners who need your skills"
                label='Join us'
                className='bg-white'
                icon={magnifier}
              />
          </div>
        </div>
      <div className='relative border-0 w-full left-0 flex max-sm:hidden'>
        <div className='border-0 border-b-2 md:w-[60%] sm:w-[30%] lg:w-[55%] border-brand-foreground/10'></div>
          <Image src={heroTools} className='md:w-[30%] sm:w-1/3 lg:w-[25%]' alt="hero-tools"/>
        <div className='border-0 border-b-2 md:w-[20%]  sm:w-[35%] lg:w-[25%] border-brand-foreground/10'></div>
      </div>
      </ContentSectionWrapper>
      {/* <TrustedCompanies/> */}
    </>
  )
}

export default HeroSection