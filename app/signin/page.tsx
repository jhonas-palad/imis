"use client"
//TODO validate with zod
import { InputWithLabelError } from '@/components/ui/input'
import React from 'react'
import Image from 'next/image'
import {useForm} from 'react-hook-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import googleLogo from '@/public/svg/google-logo.svg'
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm()
  return (
    <div className='bg-red-20 sm:max-w-md w-full mx-auto'>
      <form onSubmit={handleSubmit((data)=>{
        console.log(`data=${(JSON.stringify(data))}`)
      })}
       className='container text-center text-foreground max-sm:px-3 flex flex-col gap-6'>
        <h1 className='text-2xl font-medium'>Sign in to imis</h1>
        <div className='block'>
          <InputWithLabelError
          className='focus-visible:border-primary'
            {
              ...register('emailOrPhone', {
                maxLength: {value: 1, message: 'Minumum input is 1'}
              })
            }
            label='Email or Phone number'
            errors={errors?.emailOrPhone ? [errors.emailOrPhone.message] as string[] : []}
          />
          <InputWithLabelError
          className='focus-visible:border-primary'
            {
              ...register('password', {
                maxLength: {value: 1, message: 'Minumum input is 1'}
              })
            }
            label='Password'
            errors={errors?.password ? [errors.password.message] as string[] : []}
          />
        </div>
        <div className='flex items-center justify-between'>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember-me"/>
            <label htmlFor='remember-me' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Remember me
            </label>
          </div>
          <Link className='text-blue-500 text-sm font-semibold' href='#'>Forgot password?</Link>
        </div>
        <Button size="lg" className='w-full rounded-full' type='submit'>Submit</Button>
        <div className='flex flex-col gap-12 mt-4'>
          <div className='relative'>
            <Separator/>
            <span className='text-sm bg-background px-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>or</span>
          </div>
          <Button size="lg" variant='outline' className='rounded-full relative border-[1.5px]'>
            <Image src={googleLogo} alt="google-logo" className='w-5 absolute left-2 top-1/2 -translate-y-1/2'/>
            Sign in with Google
          </Button>
          <div className='relative'>
            <Separator/>
            <span className='text-sm bg-background px-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Don&apos;t have an account?</span>
          </div>
          <Button size="lg" variant="outline" className='self-center rounded-full border-primary text-primary border-[1.5px]'>Sign up</Button>
        </div>
      </form>
    </div>
  )
}

export default Login