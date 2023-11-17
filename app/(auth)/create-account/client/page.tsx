"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import {useForm} from 'react-hook-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import {ROUTE} from '@/constants/routes'
import SeparatorText from '@/components/separator-text'
import googleLogo from '@/public/svg/google-logo.svg'
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@ui/form"

const clientFormSchema = z.object({
  phone_number:z.coerce
    .string()
    .regex(new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/), {message: "Invalid phone number"})
    .max(10, "Phone number is too long"),
  password:z.string().min(8,{message: "Password must be 8 or more characters long"}),
  re_password: z.string()
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords don't match",
    path: ["re_password"]
  })

type ClientForm = z.infer<typeof clientFormSchema>

const ClientSignup = () => {
  const form = useForm<ClientForm>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      phone_number:'',
      password: '',
      re_password: ''
    }
  })
  console.log(form.formState.errors)
  return (
    <div className='sm:max-w-md w-full mx-auto'>
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data)=> console.log(data))}
      className='container text-foreground max-sm:px-3 flex flex-col gap-6'
      >
        <h1 className='text-2xl text-center font-medium font-serif'>Create an account</h1>
        <div className='grid grid-rows-3 gap-4'>
          <FormField
            control={form.control}
            name="phone_number"
            render={({field}) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <div className='flex'>
                    <div className='rounded-s-md pl-2 text-foreground/90 text-sm border-[1px] flex items-center border-r-0'>
                      +63
                    </div>
                    <Input className="border-l-0 rounded-none rounded-e-md" placeholder='Your phone number' {...field}/>
                  </div>
                </FormControl>
                <FormDescription className='text-destructive'>
                  {
                    form.formState.errors.phone_number?.message
                  }
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder='Create your password' {...field}/>
                </FormControl>
                <FormDescription className='text-destructive'>
                  {
                    form.formState.errors.password?.message
                  }
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="re_password"
            render={({field}) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder='Confirm your password' {...field}/>
                </FormControl>
                <FormDescription className='text-destructive'>
                  {
                    form.formState.errors.re_password?.message
                  }
                </FormDescription>
              </FormItem>
            )}
          />
        </div>
        <div className='flex items-center justify-between text-sm'>
          <p className=''>Already have an account?</p>
          <Link href={ROUTE.SIGN_IN} className='font-semibold text-main'>Sign in</Link>
        </div>
        <Button>Create account</Button>
      </form>
    </Form>
    </div>
  )
}

export default ClientSignup
