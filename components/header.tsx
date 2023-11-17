'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import {ROUTE} from '@/constants/routes'
import { NavigationLinks } from '@/components/navigation-links';
import { Button } from '@ui/button';
import { AccordionMenuLinks } from '@/components/accordion-menu-links';


import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger, 
} from './ui/sheet';
import { Menu } from 'lucide-react';
import HeaderSearch from './header-search';
import { Separator } from '@ui/separator';
import CompanyLogo from './companylogo';


const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const scrollObserver = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    let options: IntersectionObserverInit = {
    };
    const scrollNode = scrollObserver.current as HTMLElement
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[])=>{
      headerRef.current?.classList.toggle('shadow-md', !entries[0].isIntersecting)
      headerRef.current?.classList.toggle('bg-white', !entries[0].isIntersecting)
      // headerRef.current?.classList.toggle('text-foreground', entries[0].isIntersecting)
      // headerRef.current?.classList.toggle('text-white', entries[0].isIntersecting)
    }, options)
    observer.observe(scrollNode)
  }, [])
  return (
    <>
    <div className='absolute top-0 z-[-50]' ref={scrollObserver}/>
    <header ref={headerRef} className='sticky  transition-shadow duration-150 border-0 z-[99] py-3 bg-transparent top-0 flex'>
      <div className='flex relative justify-between items-center w-full lg:px-3 px-4'>
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger className='lg:hidden' asChild>
              <Button size='icon' variant="ghost">
                <Menu size="1rem"/>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className='z-[200] lg:hidden w-full sm:max-w-none p-0 overflow-auto'>
              <SheetHeader className='p-6 pb-0'>
                <SheetTitle asChild>
                  <CompanyLogo/>
                </SheetTitle>
              </SheetHeader>
              <AccordionMenuLinks/>
              <Separator/>
              <div className='mt-6 gap-4 flex items-center justify-center'>
              <Link href={ROUTE.SIGN_IN} className='text-sm border-[1px] font-semibold px-4 py-2 rounded-full'>Sign in</Link>
              or
              <Link href={ROUTE.CREATE_ACCOUNT} className='text-sm font-semibold bg-blue-700 px-4 py-2 text-white rounded-full'>Sign up</Link> 
            </div>
            </SheetContent>
          </Sheet>
            <CompanyLogo/>
          <NavigationLinks/>
        </div>
        <div className='relative flex items-center gap-3'>
          {/* <HeaderSearch/> */}
          {/* <Separator orientation='vertical' className='h-6 hidden lg:block'/> */}
          <div className='items-center lg:flex hidden'>
            <div className='self-end flex items-center'>
              <Link href={ROUTE.SIGN_IN} className='text-sm font-semibold px-4 py-2 rounded-full hover:bg-pink- mr-2'>Sign in</Link>
              <Link href={ROUTE.CREATE_ACCOUNT} className='text-sm font-semibold bg-blue-700 px-4 py-2 text-white rounded-full'>Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header