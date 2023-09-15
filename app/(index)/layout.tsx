import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'

const IndexLayout: React.FC<{
  children: React.ReactNode
}> = ({children}) => {
  return (
    <>
    <div className='relative h-full'>
        <Header/>
      <div className="h-full min-h-[100vh]">
        <main className='relative'>
          {children}
        </main>
      </div>
    </div>
    <footer>This is footer</footer>
    </>
  )
}

export default IndexLayout