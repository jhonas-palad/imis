import React from 'react'


interface Spinner {
  variant?: 'xs' | 'sm' | 'base' | 'lg';
}
const Spinner: React.FC<Spinner> = ({variant = 'xs'}) => {
  return (
    <svg 
    id="spinner"
    style={{width: '1.5rem'}}
    viewBox="25 25 50 50">
      <circle 
      r="20" cy="50" cx="50"></circle>
    </svg>
  )
}

export default Spinner