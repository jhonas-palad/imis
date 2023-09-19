import React from 'react'
import Link from 'next/link'

import { NavigationLinks } from '@/components/navigation-links';
import { Button } from '@ui/button';
import {CollapsibleLinks} from '@/components/collapsible-links'
import { AccordionMenuLinks } from '@/components/accordion-menu-links';


import { 
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger, 
} from './ui/sheet';
import { Menu } from 'lucide-react';
import HeaderSearch from './header-search';

const Header: React.FC= () => {
  return (
    <>
    <header className='sticky border-0 border-b-[1px] z-[99] py-3 bg-white top-0 flex'>
      <div className='flex relative justify-between items-center w-full lg:px-3 px-4'>
        <div className="flex items-center">
            <Sheet>
              <SheetTrigger className='lg:hidden' asChild>
                <Button variant="outline" className='px-2 h-9 items-center'>
                  <Menu size="1.2rem"/>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className='z-[200] lg:hidden w-full sm:max-w-none p-0 overflow-auto'>
                <SheetHeader className='p-6 pb-0'>
                  <SheetTitle asChild>
                    <Link className='' href="/">
                      <p className='font-black text-3xl text-brand-secondary-900'>im<span className='text-brand-primary-400'>i</span>s</p>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <AccordionMenuLinks/>
                {/* <CollapsibleLinks/> */}

                {/* <div className=' flex flex-col gap-4 mt-3'>
                  <Button className='text-sm bg-brand-primary-400 hover:bg-brand-primary-400/70'>Sign in</Button>
                  <p className='text-center'>or</p>
                  <Button variant="outline">Sign up</Button>
                </div> */}
              </SheetContent>
            </Sheet>
          <Link className='mx-3' href="/">
            <p className='font-black text-3xl text-brand-secondary-900'>im<span className='text-brand-primary-400'>i</span>s</p>
          </Link>
          <NavigationLinks/>
        </div>
        <div className='relative flex items-center gap-3'>
          <HeaderSearch/>
          <div className='items-center lg:flex hidden'>
            <div className='self-end flex items-center'>
              <Button className='text-sm bg-brand-primary-400 hover:bg-brand-primary-400/70 mr-2'>Sign in</Button>
              <Button variant="outline">Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
    
  )
}

export default Header