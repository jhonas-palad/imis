import React from 'react'

const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <main>{children}</main>
  )
}

export default RootLayout