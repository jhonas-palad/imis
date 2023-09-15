import React from 'react'
import Link from 'next/link'

import { NavigationLinks } from './navigation-links';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
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
    <header className='sticky border-0 border-b-2 z-[99] py-2 bg-white top-0 flex'>
      <div className='flex relative justify-between w-full px-5'>
        <div className='flex items-start'>
          <div className='mr-5'>
            <Link href="/">
              <p className='font-black text-3xl text-brand-secondary-900'>im<span className='text-brand-primary-400'>i</span>s</p>
            </Link>
          </div>
          <NavigationLinks/>
        </div>
        <div className='flex items-center'>
          <div className='relative mr-3'>
            <Input/>
            <Button className='absolute top-0 right-0 border-0 bg-transparent text-primary'>Search</Button>
          </div>
          <div className='self-end flex items-center'>
            <Button className='bg-brand-primary-400 mr-2'>Sign in</Button>
            <Button variant="outline">Sign up</Button>
          </div>
        </div>
      </div>
    </header>
    </>
    
  )
}

export default Header