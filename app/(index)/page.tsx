import HeaderSearch from '@/components/header-search'
import {Button} from '@ui/button'
import React from 'react'
import Image from 'next/image'
import { AspectRatio } from '@ui/aspect-ratio'
import heroimg from '@/public/hero-image.png'
import ContentSectionWrapper from '@/components/content-section-wrapper'
import feature1 from '@/public/feature-1.svg'
import feature2 from '@/public/feature-2.svg'
import feature3 from '@/public/feature-3.svg'
import { CheckCircle } from 'lucide-react'
const Index = () => {
  return (
    <div className='w-full h-full'>
      <ContentSectionWrapper className='flex items-center justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-2'>
          <div className='flex flex-col justify-center gap-5'>
            <div className='whitespace-pre-wrap text-center md:text-left'>
              <h1 className='leading-tight md:text-4xl text-3xl font-semibold text-secondary-foreground'>
                Where home cleaning unlocks opportunities
              </h1>
              <p className='px-3 mt-3 md:p-0 font-light md:text-base text-sm text-secondary-foreground/70 leading-7'>Our intuitive platform connects you with experienced in cleaning, maintenance, and more, enhancing your home experience with convenience and quality.</p>
            </div>  
            <div className='flex flex-col md:flex-row items-center md:items-start gap-3 justi'>
              <Button size='lg' variant='default' className='w-1/2 md:w-auto rounded-full'>Get started</Button>
              <Button size='lg' variant='outline' className='w-1/2 md:w-auto rounded-full'>Sign in</Button>
            </div>
          </div>
          <div className='mt-4 md:mx-auto lg:mt-0 md:w-[90%] lg:w-full'>
            <AspectRatio ratio={16/12}>
              <Image src={heroimg} alt="as" className='h-full w-full object-cover'/> 
            </AspectRatio>
          </div>
        </div>
      </ContentSectionWrapper>
      <ContentSectionWrapper
        // preTitle='What we do'
        title="Your Demand, Their Expertise"
        className='bg-violet-700 text-white text-center min-h-0 py-10'
        // description='Imis is your one-stop destination for seamless, on-demand cleaning services. Discover the convenience of booking expert cleaners at your preferred time. Our platform connects you with trusted professionals dedicated to transforming your home into a pristine, welcoming space. Experience cleanliness redefined with Imis'
      >
        <div className="flex flex-col md:flex-row gap-3">
          {
            [
              {img: feature1, label: 'Easy booking', description: 'Lorem Ipsum Savge love is the key for the wonderfull feature of the year.'},
              {img: feature2, label: 'Trusted providers', description: 'Lorem Ipsum Savge love is the key for the wonderfull feature of the year.'},
              {img: feature3, label: 'Quality service', description: 'Lorem Ipsum Savge love is the key for the wonderfull feature of the year.'}
            ].map(({label, img, description}, key)=>{
              return (
                <div key={key} className='flex text-center p-6 items-center flex-col gap-2'>
                  <Image src={img} width={100} alt="AS"/>
                  <div>
                    <h3 className='text-lg text-cyan-400 font-semibold mb-3'>{label}</h3>
                    <p className='text-sm text-zinc-200'>{description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>

      </ContentSectionWrapper>
    </div>
  )
}

export default Index