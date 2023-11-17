import React from 'react'
import ContentSectionWrapper, { PreTitleDescription } from './content-section-wrapper'
import Image from 'next/image';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';


import vacumm from '@/public/svg/vacumm.svg'
import appliances_svgrepo_com from '@/public/svg/appliances-svgrepo-com.svg'
import broomstick_svgrepo_com from '@/public/svg/broomstick-svgrepo-com.svg'
import car_svgrepo_com from '@/public/svg/car-svgrepo-com.svg'
import laundry_svgrepo_com from '@/public/svg/laundry-svgrepo-com.svg'
interface CardProps {
  title: string;
  description: string;
  label: string;
  className?: string;
  icon?: string;
}

const Card:React.FC<CardProps> = ({title, description, label, className, icon}) => {
  return (
    <div className={cn('p-6 shadow-md duration-75 flex flex-col gap-6 items-stretch shadow-foreground/10 bg-white rounded-2xl', className)}>
      <strong className='text-base md:text-lg lg:text-xl font-medium'>{title}</strong>
      <p className='text-sm flex-1 lg:text-base leading-loose tracking-wider'>{description}</p>
      <div className='flex justify-between items-center gap-3'>
        {/* <Image src={
          icon ?? ''} alt={icon ?? ''} className='w-1/4'/> */}
        {/* <Button variant='ghost' className='rounded-sm bg-primary text-white'>{label}</Button> */}
      </div>
    </div>
  )
}

const SERVICES: {
  icon:string;
  title:string;
}[]= [
  {
    icon:vacumm,
    title: "Deep cleaning"
  },
  {
    icon:broomstick_svgrepo_com,
    title: "General cleaning"
  },
  {
    icon:laundry_svgrepo_com,
    title: "Laundry"
  },
  {
    icon:appliances_svgrepo_com,
    title: "Appliances"
  },
  {
    icon:car_svgrepo_com,
    title: "Carwash"
  },
]


const FeatureSection = () => {
  return (
    <ContentSectionWrapper
     className='min-h-[60%] py-20'
    >
      <div className='p-0 md:px-6 md:my-24'>
        <PreTitleDescription
          title="What service are you looking for?"
          description='Because your space deserves the best'
        />
        <div className='mt-10 flex flex-wrap justify-center gap-10'>
            {
              SERVICES.map(({icon, title}, key)=> (
                <div className='flex flex-col justify-center items-center gap-4 p-6 border-[1px] w-[11rem] h-[8rem] rounded-md' key={key}>
                  <Image src={icon} className='w-12' alt="icon"/>
                  <span className='text-xs text-center'>{title}</span>
                </div>
              ))
            }
        </div>
      </div>
    </ContentSectionWrapper>
  )
}

export default FeatureSection

 