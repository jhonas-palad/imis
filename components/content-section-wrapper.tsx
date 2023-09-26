import React from 'react'
import {cn} from '@lib/utils'

type PreTitleDescriptionProps = {
  preTitle ?: string;
  title?: string;
  description?: string;
  position: "center" | "right" | "left"
}
const PreTitleDescription : React.FC<PreTitleDescriptionProps> = ({
  preTitle, title, description, position = "center"
}) => (
  <div className={`w-full block text-${position}`}>
    {
      preTitle && (
        <p className='text-sm font-semibold text-brand-primary-700 mb-1'>{preTitle}</p>
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
  React.HTMLAttributes<HTMLDivElement> & PreTitleDescriptionProps
>(({children, className, ...props},ref)=>(
  <div ref={ref} className={cn('min-h-[100vh] pt-10', className)}>
    <div className={cn('mx-auto w-3/4')}>
      {
        (props.title || props.description || props.preTitle) && (
          <PreTitleDescription position="center" title={props.title} description={props.description} preTitle={props.preTitle}/>
        ) 
      }
      {children}
    </div>
  </div>
))

ContentSectionWrapper.displayName = 'ContentSectionWrapper'
export default ContentSectionWrapper