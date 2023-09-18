import React from 'react'
import Link from 'next/link'

import { NavigationLinks } from './navigation-links';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
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
const components : {
  title: string;
  href: string;
  description: string;
} []  = [
  {
    title : "Alert Dialog",
    href : "",
    description: ""
  }
]

const Header: React.FC= () => {
  return (
    <>
    <header className='sticky border-0 border-b-[1px] z-[99] py-3 bg-white top-0 flex'>
      <div className='flex relative justify-between items-center w-full px-5'>
        <div className='flex items-start'>
         
          <Link className='mr-5' href="/">
            <p className='font-black text-3xl text-brand-secondary-900'>im<span className='text-brand-primary-400'>i</span>s</p>
          </Link>
      
          <div className="md:flex hidden">
            <div className=''>
              <NavigationLinks/>
            </div>
            <HeaderSearch/>
          </div>
        </div>
        <div className='relative'>
          <div className='lg:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Menu/>
                </Button>
              </SheetTrigger>
              <SheetContent className='z-[200]'>
                <SheetHeader>
                  <SheetTitle>HELLO</SheetTitle>
                  <SheetDescription>
                    Hello world
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
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