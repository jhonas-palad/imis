'use client'
import React, {useEffect, useRef, useState} from 'react'

const DraggbleScreenSizeIndicator = () => {

  return (
      <>
      <div className={`z-[999] xl:flex lg:hidden md:hidden sm:hidden xs:hidden fixed top-[50%] left-[50%] bg-gradient-to-r text-white p-4 rounded-md hover:opacity-80 shadow-md to-slate-600 from-slate-900`}>
        XL
      </div>
      <div className={`z-[999] xl:hidden lg:flex md:hidden sm:hidden xs:hidden fixed top-[50%] left-[50%] bg-gradient-to-r text-white p-4 rounded-md hover:opacity-80 shadow-md to-slate-600 from-slate-900`}>
        LG
      </div>
      <div className={`z-[999] xl:hidden lg:hidden md:hidden sm:flex xs:hidden fixed top-[50%] left-[50%] bg-gradient-to-r text-white p-4 rounded-md hover:opacity-80 shadow-md to-slate-600 from-slate-900`}>
        SM
      </div>
      <div className={`z-[999] xl:hidden lg:hidden md:flex sm:hidden xs:hidden fixed top-[50%] left-[50%] bg-gradient-to-r text-white p-4 rounded-md hover:opacity-80 shadow-md to-slate-600 from-slate-900`}>
        MD
      </div>
      <div className={`z-[999] xl:hidden lg:hidden md:hidden sm:hidden flex fixed top-[50%] left-[50%] bg-gradient-to-r text-white p-4 rounded-md hover:opacity-80 shadow-md to-slate-600 from-slate-900`}>
        XS
      </div>
      
      </>

    
  )
}

export default DraggbleScreenSizeIndicator