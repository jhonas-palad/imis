import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

type InputLabelErrorProps = {
  label: string;
  errors?: string[];
} & InputProps


const InputWithLabelError = React.forwardRef<HTMLInputElement, InputLabelErrorProps>(
  ({label,errors, className ,...inputProps}, ref) => {
    return (
      <div className='flex flex-col gap-2 text-start py-2'>
        <label className='text-sm font-normal'>{label}</label>
        <Input
        ref={ref}
          className={cn('shadow-none', className)}
            {
              ...inputProps
            }
        />
        <div className="flex flex-col">
        {
          errors && errors?.length > 0 && (
            errors.map((err, key)=> <p className='text-sm text-destructive font-medium' key={key}>{err}</p>)
          )
        }
        </div>
      </div>
    )
})

InputWithLabelError.displayName = "InputWithLabelError"

export { Input,InputWithLabelError }
