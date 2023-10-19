import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'

const IndexLayout: React.FC<{
  children: React.ReactNode
}> = ({children}) => {
  return (
    <>
      <Header/>
      <div className="min-h-[100vh]">
        <main className='relative'>
          {children}
        </main>
      </div>
      <footer>This is footer</footer>
    </>
  )
}

export default IndexLayout