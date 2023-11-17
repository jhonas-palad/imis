import React from 'react'
import Link from 'next/link'
import {ROUTE} from '@/constants/routes'
import { cn } from '@/lib/utils'


const CompanyLogo: React.FC<{className?: string}> = ({className}) => {
  return (
    <Link 
      className={cn('mx-3 font-semibold text-2xl', className)}
      href={ROUTE.HOME}>
        imis
    </Link>
  )
}

export default CompanyLogo