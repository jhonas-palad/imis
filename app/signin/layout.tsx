import React from 'react'
import CompanyLogo from '@/components/companylogo'
const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
      <header className='py-3 flex justify-center items-center lg:justify-start'>
        <CompanyLogo/>
      </header>
      <div className='bg-blue-90 md:px-10 py-4'>
        <main className='relative bg-blue-30'>
          {children}
        </main>
      </div>
      <footer className='mt-20 p-10 text-center text-xs'>
       <p>© IMIS company. 2023 All Rights Reserved</p>
      </footer>
    </>
  )
}

export default RootLayout