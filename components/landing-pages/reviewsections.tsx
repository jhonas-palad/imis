import React from 'react'
import Image from 'next/image'
import ContentSectionWrapper, { PreTitleDescription } from '../content-section-wrapper'
import ratings from '@/public/svg/stars-ratings.svg'
import { CheckCircleIcon } from 'lucide-react'
const ReviewsSection = () => {
  return (
    <ContentSectionWrapper

      className='mt-20'
    >
      <div className='md:my-24'>

        <PreTitleDescription
          title='Loved By Many Users'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
        <div className='mt-10 grid grid-cols-2 md:grid-cols-3 gap-2'>
          {
            [
              {
                name: "Jonathan",
                title: "Deep Cleaning",
                reviewText: `I have been using this service for a few months now and I can honestly say that it is one of the best services`
              },
              {
                name: "Marco De Qqee",
                title: "General Cleaning",
                reviewText: `I have been using this service for a few months now and I can honestly say that it is one of the best services`
              },
              {
                name: "Marco De Qqee",
                title: "General Cleaning",
                reviewText: `I have been using this service for a few months now and I can honestly say that it is one of the best services`
              },
            ].map(({name, title, reviewText},key)=> (
              <div className='flex flex-col border-[1px] p-6 rounded-lg' key={key}>
                <Image className="w-16" src={ratings} alt=""/>
                <div className='flex flex-col mb-4'>
                  <h3 className='font-semibold'>{title}</h3>
                  <p className='line-clamp-3 text-sm'>{reviewText}</p>
                </div>
                <div className='flex gap-2 text-sm'>
                  <div className='h-10 w-10 rounded-full bg-black/20'/>
                  <div className='flex flex-col'>
                    <h4>{name}</h4>
                    <span className='flex items-center gap-2 text-sm'><CheckCircleIcon size="1rem" className='text-green-500'/> Verified {}</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </ContentSectionWrapper>
  )
}

export default ReviewsSection