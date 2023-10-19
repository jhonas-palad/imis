import React from 'react'
import {cn} from '@lib/utils'

type PreTitleDescriptionProps = {
  preTitle ?: string;
  title?: string;
  description?: string;
  position?: "center" | "right" | "left"
}
export const PreTitleDescription : React.FC<PreTitleDescriptionProps> = ({
  preTitle, title, description, position = "center"
}) => (
  <div className={`container pl-0 block md:text-${position} text-center`}>
    {
      preTitle && (
        <p className='text-violet-600 text-sm font-semibold text-brand-primary-700 mb-1'>{preTitle}</p>
      )
    }
    {
      title && (

        <h2 className='text-3xl md:text-4xl mb-3 font-semibold'>{title}</h2>
      )
    }
    {
      description && (
        <p className='whitespace-pre-wrap font-light leading-loose'>{description}</p>
      )
    }
  </div>
)

const ContentSectionWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>  & {asChild?:boolean}
>(({children, className, asChild = false, ...props},ref)=>(
  <div ref={ref} role='section-wrapper' className={cn('', className)}>
    {
      !asChild ? (
        <div className={cn('mx-auto px-2 w-full xl:w-[85%] lg:w-[90%]')}>
          {children}
        </div>
      ): children
    }
  </div>
))

ContentSectionWrapper.displayName = 'ContentSectionWrapper'
export default ContentSectionWrapper