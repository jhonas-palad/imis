import React from 'react'
import {Button } from '@ui/button';
import { ChevronDown } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Sheet, SheetHeader, SheetTitle, SheetTrigger, SheetDescription, SheetContent, } from '@ui/sheet';
import { Link } from '@radix-ui/react-navigation-menu';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '@ui/accordion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
const TriggerButton: React.FC<{title : string}> = ({title}) => (
  <Button variant="ghost" size="lg" className="rounded-none px-5 py-7 flex items-center justify-between w-full hover:bg-transparent hover:text-brand-primary-00">
    {title}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"/>
    <span className="sr-only">Toggle</span>
  </Button>
)

const accordionTriggerstyle = cva("text-sm data-[state=open]:bg-brand-primary-100/20 hover:no-underline hover:text-brand-primary-500 py-5 px-4")
const AccordionContentstyle = cva("pl-6 pr-2 mt-4")



export const AccordionMenuLinks = () => {
  return (
   <Accordion className='mt-4' type='single' collapsible>
    <AccordionItem value='a-1' className='border-0'>
      <AccordionTrigger className={cn(accordionTriggerstyle())}>
        Find worker
      </AccordionTrigger>
      <AccordionContent className={cn(AccordionContentstyle())}>
        <Collapsible className='border-2'>
          <CollapsibleTrigger className='cursor-pointer' asChild>
            <div className='py-5'>
              <div className="text-sm font-medium leading-none">Post a job</div>
              <p className="line-clamp-2 text-sm leading-snug text-brand-primary-500">
                Let service providers know your needs
              </p>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className='absolute border-t-[1px] top-[75px] data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight w-full h-full left-0 bg-white'>
            <div className="flex flex-col gap-3">
              <div className='flex items-center justify-between border-b-[1px] p-4'>
                <p className="text-base font-semibold">Post a job</p>
                <CollapsibleTrigger>Close</CollapsibleTrigger>
              </div>
              <div className='p-2'>
                <p className="text-[0.8rem] mb-3 leading-snug font-medium text-zinc-700">
                Ready to get your task done? Tell us what you need, and we&apos;ll find the right service provider for you. Here&apos;s list of our top booked services.
                </p>
                <a className="text-sm font-light underline" href="/">
                  {/* {link?.children ?? 'No link'} */}
                  Link
                </a>
              </div>
              <div className='flex flex-col justify-stretch gap-3'>
                <div className='border-[1px] overflow-hidden mx-3 rounded-md grid grid-cols-[4rem_auto] gap-3 min-h-max items-center'>
                  <Image src="" alt="asdsa" className='h-[4rem] bg-purple-500'/>
                  <p className='text-base font-medium'>Hello world</p>
                </div>
                <div className='border-[1px] mx-3 rounded-md grid grid-cols-[4rem_auto] gap-3 min-h-max items-center'>
                  <Image src="" alt="asdsa" className='h-[4rem] bg-purple-500'/>
                  <p className='text-base font-medium'>Hello world</p>
                </div>
                <div className='border-[1px] mx-3 rounded-md grid grid-cols-[4rem_auto] gap-3 min-h-max items-center'>
                  <Image src="" alt="asdsa" className='h-[4rem] bg-purple-500'/>
                  <p className='text-base font-medium'>Hello world</p>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className='py-5'>
          <div className="text-sm font-medium leading-none">Post a job</div>
          <p className="line-clamp-2 text-sm leading-snug text-brand-primary-500">
            Let service providers know your needs
          </p>
        </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value='a-2'>
      <AccordionTrigger className={cn(accordionTriggerstyle())}>
        Be a worker
      </AccordionTrigger>
      <AccordionContent className={cn(AccordionContentstyle())}>
        Post a Job
        Let service providers know your needs
      </AccordionContent>
    </AccordionItem>
   </Accordion>
  )
}

export default AccordionMenuLinks