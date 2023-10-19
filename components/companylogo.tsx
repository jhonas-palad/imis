import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'


const CompanyLogo: React.FC<{className?: string}> = ({className}) => {
  return (
    <Link 
      className={cn('mx-3 font-semibold text-2xl text-foreground', className)}
      href="/">
        imis
    </Link>
  )
}

export default CompanyLogo