"use client"
import React from 'react'
import { Check, ChevronsUpDownIcon} from 'lucide-react'

import {cn} from '@/lib/utils'
import {Button, ButtonProps} from '@ui/button'
import { useRouter } from 'next/router'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@ui/popover'
import { CommandList } from 'cmdk'

export type Item = {
  label: string;
  value: string;
}
export type ComboBoxProps = {
  placeholder?: string;
  itemName: string;
  choices : Item[];
  children: React.ReactNode;
  popOverTrigger: React.ReactElement,
  groupHeading?: string;
}


type ComboBoxCtxProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>
}

const ComboBoxContext = React.createContext< ComboBoxCtxProps | null>(null)

export const ComboBoxButton = () => {
  return (
    <Button
      variant="outline"
      role="combobox"
      aria-expanded={true}
      className='justify-between'
    >
      
    </Button>
  )
}



export const ComboBoxProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState('')
  const router = useRouter()
  return (
    <ComboBoxContext.Provider value={{open, setOpen, selectedValue, setSelectedValue}}>
      {
        children
      }
      
    </ComboBoxContext.Provider>
  )
}
export const ComboBox: React.FC<ComboBoxProps> = ({itemName, placeholder, choices, groupHeading}) => {
  const {open, setOpen, selectedValue, setSelectedValue} = React.useContext(ComboBoxContext) as ComboBoxCtxProps
  return (
    <ComboBoxProvider>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={true}
            className='justify-between'
          >
            {
              selectedValue? choices.find((item)=> item.label === selectedValue)?.label:
              `Select ${/[aeiou]/i.test(itemName[0] ? 'an' : 'a')} ${itemName}`
            }
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Command>
            <CommandInput placeholder={placeholder ?? `Search ${itemName}...`}/>
            <CommandEmpty>{`No ${itemName} found`}</CommandEmpty>
              <CommandList className='max-h-[300px] overflow-y-auto'>
                <CommandGroup heading={groupHeading ?? ''}>
                  {
                    choices.map((item, index)=> (
                      <CommandItem
                        value={item.value}
                        key={index}
                        onSelect={(selected) => {setSelectedValue(selected); setOpen(false)}}
                      >
                        {item.value}
                      </CommandItem>
                    ))
                  }
                </CommandGroup>
              </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </ComboBoxProvider>
  )
}
export const ComboBoxItem = React.forwardRef<
  React.ElementRef<typeof CommandItem>,
  React.ComponentPropsWithRef<typeof CommandItem>
>(({className, ...props}, ref) => (
  <CommandItem
    ref={ref}
    className={className}
    {...props}
  />
))

ComboBoxItem.displayName = CommandItem.displayName