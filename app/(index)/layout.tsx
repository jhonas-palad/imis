import React from 'react'
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
      <footer className='mt-20 p-10 text-center text-xs'>
       <p>© imis company. 2023 All Rights Reserved</p>
      </footer>
    </>
  )
}

export default IndexLayout