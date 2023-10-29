import React from 'react'
import { Separator } from '@ui/separator'

type SeparatorTextProps = {
  text: string;
}
const SeparatorText: React.FC<SeparatorTextProps> = ({text}) => {
  return (
    <div className='relative'>
      <Separator/>
      <span className='text-sm bg-background px-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>{text}</span>
    </div>
  )
}

export default SeparatorText