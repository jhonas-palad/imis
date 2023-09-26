import React from 'react'
import {  ChevronLeft, ChevronRight } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { HEADER_LINKS, Link as LinkType, Content } from '@/constants/content';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '@ui/accordion';
import { cn } from '@/lib/utils';
import Image from 'next/image';



const accordionTriggerstyle = cva("text-sm data-[state=open]:bg-brand-primary-100/20 hover:no-underline hover:text-brand-primary-500 py-5 px-4")
const AccordionContentstyle = cva("pl-6 pr-4 mt-4")


const customerContents : Content[] = HEADER_LINKS[0].content as Content[]
const beAWorkerLinks : LinkType[] = HEADER_LINKS[1].links as LinkType[]

export const AccordionMenuLinks = () => {
  return (
    <div className='flex flex-col'>
    <Accordion className='mt-4' type='single' collapsible>
      <AccordionItem value='a-1' className='border-0'>
        <AccordionTrigger className={cn(accordionTriggerstyle())}>
          {HEADER_LINKS[0].label}
        </AccordionTrigger>
        <AccordionContent className={cn(AccordionContentstyle())}>
          <AccordionCollapse
            collapseTriggerDesc={customerContents[0].description as string}
            collapseContentDesc={customerContents[0].content?.description as string}
            collapseTitle={customerContents[0].label}
            link={customerContents[0].content?.link as LinkType}
          >
            <div className='flex flex-col justify-stretch gap-3'>
            {
              [1,2,3,4,5].map((element, key) => {
                return (
                  <div key={key} className='border-[1px] overflow-hidden mx-3 rounded-md grid grid-cols-[4rem_auto] gap-3 min-h-max items-center'>
                    <Image src="" alt="" className='h-[4rem] bg-purple-500'/>
                    <p className='text-sm font-medium'>Service {element}</p>
                  </div>
                )
              })
            }
            </div>
          </AccordionCollapse>
          <AccordionCollapse
            collapseTriggerDesc={customerContents[1].description as string}
            collapseContentDesc={customerContents[1].content?.description as string}
            collapseTitle={customerContents[1].label}
            link={customerContents[1].content?.link as LinkType}
          >
            <div className='grid grid-cols-2 gap-3 px-3'>
              {
                [1,2,3,4,5].map((element, key) => {
                  return (
                    <a key={key} className='p-2 hover:bg-zinc-500/10 rounded-lg cursor-pointer'>
                      <p className='text-sm font-medium'>Service {element}</p>
                    </a>
                  )
                })
              }
            </div>
          </AccordionCollapse>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='a-2' className='border-0'>
        <AccordionTrigger className={cn(accordionTriggerstyle())}>
          {HEADER_LINKS[1].label}
        </AccordionTrigger>
        <AccordionContent className={cn(AccordionContentstyle())}>
          
          {
            beAWorkerLinks.map(({label, href, description},key)=>(
              <a
                key={key}
                href={href as string}
                className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none",)}
              >
                <LinkContent
                  title={label}
                  description={description as string}
                />
              </a>
            ))
          }
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <a
      className={cn(accordionTriggerstyle(), 'cursor-pointer w-full font-medium')}
      >
        {HEADER_LINKS[2].label}
    </a>
    
   </div>
  )
}

type LinkContentProps = {
  title: string;
  description: string;
}

const LinkContent: React.FC<LinkContentProps> = ({title, description}) => {
  return (
    <>
      <div className="text-sm font-medium mb-2 leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-brand-primary-500">
        {description}
      </p>
    </>
  )
}

type AccordionCollapseProp = {
  collapseTitle : string;
  collapseTriggerDesc : string;
  collapseContentDesc : string;
  link: LinkType;
  children: React.ReactNode;
}

const AccordionCollapse: React.FC<AccordionCollapseProp> = ({
  collapseTitle,
  collapseContentDesc,
  collapseTriggerDesc,
  link,
  children
}) => {
  return (
    <Collapsible className=''>
      <CollapsibleTrigger className='cursor-pointer' asChild>
        <div className='py-5 flex items-center justify-between'>
          <div>
            <LinkContent
               title={collapseTitle}
                description={collapseTriggerDesc}
            />
          </div>
          <ChevronRight size="1rem"/>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className='absolute border-t-[1px] top-[75px] data-[state=open]:animate-enterFromRight data-[state=closed]:animate-exitToRight w-full h-full left-0 bg-white'>
        <div className="flex flex-col gap-3">
          <div className='flex items-center justify-start gap-2 border-b-[1px] p-4'>
            <CollapsibleTrigger>
              <ChevronLeft size="1rem"/>
            </CollapsibleTrigger>
            <p className="text-base font-semibold">{collapseTitle}</p>
          </div>
          <div className='p-2'>
            <p className="text-[0.8rem] mb-3 leading-snug font-medium text-zinc-700">
              {collapseContentDesc}
            </p>
            <a className="text-sm font-light underline" href={link.href as string}>
              {/* {link?.children ?? 'No link'} */}
              {link.label}
            </a>
          </div>
          {children}
        
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}


export default AccordionMenuLinks