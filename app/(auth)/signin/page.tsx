"use client"
//TODO validate with zod
import { Input} from '@/components/ui/input'
import React from 'react'
import Image from 'next/image'
import {useForm} from 'react-hook-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'
import googleLogo from '@/public/svg/google-logo.svg'
import SeparatorText from '@/components/separator-text'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel
} from "@ui/form"
import { ROUTE } from '@/constants/routes'

const RememberMeBox = () => {
  return (
      <div className="flex items-center space-x-2">
        <Checkbox id="remember-me"/>
        <label htmlFor='remember-me' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          Remember me
        </label>
      </div>
  )
}
const Signin = () => {
  const form = useForm()
  return (
    <div className='sm:max-w-md w-full mx-auto'>
      <Form {...form}>
        <form className='container text-foreground max-sm:px-3 flex flex-col gap-6'>
        <h1 className='text-2xl text-center font-medium font-serif'>Sign in</h1>
          <div className="grid grid-rows-2 gap-4">
            <FormField
              name="email_phone_number"
              control={form.control}
              render={(field) => (
                <FormItem>
                  <FormLabel>
                    Email or Phone Number
                  </FormLabel>
                  <Input placeholder='Email or phone number'/>
                </FormItem>
              )}
          />
            <FormField
              name="password"
              control={form.control}
              render={(field) => (
                <FormItem>
                  <FormLabel>
                    Password
                  </FormLabel>
                  <Input placeholder='Email or phone number'/>
                </FormItem>
              )}
          />
          </div>
          <div className='flex items-center justify-between'> 
            <RememberMeBox/>
            <Link className='text-main text-sm font-semibold' href='#'>Forgot password?</Link>
          </div>
          <Button className='mb-4'>
                Sign in
          </Button>
          <SeparatorText text='or create an account'/>
          <Link href={ROUTE.CREATE_ACCOUNT} className='mt-4 border-2 border-primary self-center px-4 py-2 rounded-lg text-sm font-semibold '>Sign up</Link>
        </form>
      </Form>
    </div>
  )
}

export default Signin
{/* <form onSubmit={handleSubmit((data)=>{
  console.log(`data=${(JSON.stringify(data))}`)
})}
 className='container text-center text-foreground max-sm:px-3 flex flex-col gap-6'>
  <h1 className='text-2xl font-medium font-serif'>Sign in to imis</h1>
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
    <Link className='text-secondary text-sm font-semibold' href='#'>Forgot password?</Link>
  </div>
  <Button size="lg" className='w-full rounded-full' type='submit'>Submit</Button>
  <div className='flex flex-col gap-12 mt-4'>
    <SeparatorText text="or"/>
    <Button disabled size="lg" variant='outline' className='rounded-full relative border-[1.5px]'>
      <Image src={googleLogo} alt="google-logo" className='w-5 absolute left-2 top-1/2 -translate-y-1/2'/>
      Sign in with Google
    </Button>
    <SeparatorText text="Don't have an account"/>
    <Link href={`${ROUTE.CREATE_ACCOUNT}?dest=signin`} className='py-2 px-4 text-sm self-center rounded-full border-primary text-primary border-2 hover:bg-transparent hover:opacity-60'>Sign up</Link>
  </div>
</form> */}