import React from 'react'
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@ui/collapsible'
import {Button} from '@ui/button';
import { ChevronDown } from 'lucide-react';
import {cn} from '@lib/utils'
import { cva } from 'class-variance-authority';
const TriggerButton: React.FC<{title : string}> = ({title}) => (
  <Button variant="ghost" size="lg" className="rounded-none px-5 py-7 flex items-center justify-between w-full hover:bg-transparent hover:text-brand-primary-00">
    {title}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"/>
    <span className="sr-only">Toggle</span>
  </Button>
)

const contentStyle = cva("space-y-2  w-full pl-4")

export function CollapsibleLinks() {
  return (
    <div className='flex flex-col mt-4'>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <TriggerButton title="Find worker"/>
          </CollapsibleTrigger>
          <CollapsibleContent className={cn(contentStyle())}>
            <a
              className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              )}
            >
              <div className="text-sm font-medium leading-none">QWEQWEW</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Hello world
              </p>
            </a>
          </CollapsibleContent>
      </Collapsible>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <TriggerButton title="Be a worker"/>
          </CollapsibleTrigger>
          <CollapsibleContent className={cn(contentStyle())}>
            <a
              className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              )}
            >
              <div className="text-sm font-medium leading-none">QWEQWEW</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Hello world
              </p>
            </a>
          </CollapsibleContent>
      </Collapsible>
    </div>
  )
} 


export default CollapsibleLinks