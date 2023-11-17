import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Poppins, Lora } from 'next/font/google'
import { cn } from '@/lib/utils';
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})
const lora = Lora({
  subsets: ['cyrillic-ext', 'latin'],
  variable: '--font-lora'
})
export const metadata: Metadata = {
  title: 'IMIS - Your Professional Service Platform',
  description: 'IMIS is a platform services for homes and businesses. We offer residential and commercial solutions to keep your spaces sparkling clean. Book your cleaning service today.',
  keywords: 'cleaning service, professional cleaners, residential cleaning, commercial cleaning, house cleaning, office cleaning, IMIS, imisin, batangas cleaning service',
  authors: {name: 'IMIS cleaning services'},
  robots: 'index, follow',
}
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0
}
const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
      <body className={cn("bg-body-color")}>
        <div className='relative h-full'>
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout;