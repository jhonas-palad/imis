import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import bePro from '@/public/svg/be-pro-signup-icon.svg'
import beClient from '@/public/svg/client-signup-icon.svg'

import {ROUTE} from '@/constants/routes'

type CardProps = {
  title: string;
  description?: string;
  linkText: string;
  href: string;
  img: string;
}
const Card: React.FC<CardProps> = ({title, description, linkText, href, img}) => {
  return (
    <div className='border-[1px] w-[360px] lg:w-full flex justify-stretch flex-col gap-4 text-center p-6 rounded-lg'>
      <div className='flex justify-center'>
        <Image src={img} alt='sign-up-al' className='object-cover w-32' />
      </div>
      <div className='my-6 flex-1'>
        <h2 className='text-2xl font-medium mb-3'>{title}</h2>
        <p className='text-foreground/75'>{description}</p>
      </div>
      <Link href={href} className='bg-primary rounded-md p-2 text-white'>{linkText}</Link>
    </div>
  )
}
const ChooseAccountType = () => {
  return (
    <div className='w-full mx-auto flex flex-col justify-between'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-serif text-2xl font-medium my-6'>
          Sign up on imis
        </h1>
        <div className='flex flex-col mt-6'>
          <div className='flex flex-col md:flex-row gap-10 lg:gap-6'>
            <Card
              title='I want to provide services'
              description='Respond to clients requests and get hired'
              linkText='Join as a pro'
              img={bePro}
              href={ROUTE.PRO_SIGNUP}
            />
            <Card
              title='I need a professional'
              description='Respond to clients requests and get hired'
              linkText='Hire a professional'
              img={beClient}
              href={ROUTE.CLIENT_SIGNUP}
            />
          </div>
          <div className='text-center font-light text-foreground mt-10'>
            <p>
              Already have an account? 
              <Link className='text-main font-medium ml-1' href={ROUTE.SIGN_IN}>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseAccountType