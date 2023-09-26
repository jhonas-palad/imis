import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import {Theme} from '@radix-ui/themes';
import { cn } from '@/lib/utils';
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'IMIS - Your Professional Cleaning Service Platform',
  description: 'IMIS provides professional cleaning services for homes and businesses. We offer residential and commercial solutions to keep your spaces sparkling clean. Book your cleaning service today.',
  viewport: 'width=device-width, initial-scale=1.0',
  keywords: 'cleaning service, professional cleaners, residential cleaning, commercial cleaning, house cleaning, office cleaning, IMIS, imisin, batangas cleaning service',
  authors: {name: 'IMIS cleaning services'},
  robots: 'index, follow',
}
const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <html lang="en">
      <body className={cn("bg-body-color",poppins.className)}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;