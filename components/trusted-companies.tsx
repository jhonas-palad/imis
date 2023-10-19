import React from 'react'
import Image from 'next/image'
import fb from '@/public/svg/Facebook-Logo.wine.svg'
import amazon from '@/public/svg/Amazon_(company)-Logo.wine.svg'
import google from '@/public/svg/Google-Logo.wine.svg'
import yt from '@/public/svg/YouTube-Logo.wine.svg'


const TrustedCompanies:React.FC = () => {
  const companies = [
    {name:"Facebook", logo:fb},
    {name:"Amazon", logo:amazon},
    {name:"Google", logo:google},
    {name:"Youtube", logo:yt}
  ]
  return (
    <div className='w-full text-center borde -[1px] py-4'>
      <p className='text-sm text-foreground/50'>Trusted by these companies</p>
      <div className='flex justify-center gap-6 overflow-x-auto '>
        {
          companies.map(({name,logo})=>(
            <Image key={name} src={logo}  alt={`${name}-logo`} className='w-[10%] grayscale'/>
          ))
        }
      </div>
    </div>
  )
}

export default TrustedCompanies