'use client'
import React, { useEffect, useState, useRef } from 'react'
import { Input } from '@ui/input'
import { Button } from '@ui/button'
import { Search } from 'lucide-react'
import { Command, CommandInput, CommandSeparator, CommandGroup,CommandList, CommandEmpty, CommandItem, CommandLoading } from '@ui/command'


const HeaderSearch = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchList, setSearchList] = useState<string[]>([]);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);


  const cmdRef = useRef<null |  React.ElementRef<typeof Command>>(null);
  
  useEffect(()=>{
    setSearchLoading(true)

    setSearchLoading(false)
  }, [searchInput])
  useEffect(()=>{
    if(!showList) return;

    function handleClick(event : MouseEvent) {
      if(cmdRef.current && !cmdRef.current.contains(event.target as Node)){
        setShowList(false);
      }
    }
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [showList, setShowList])

  return (
    <div className='relative'>
      <Button size='icon' variant='ghost' className='md:hidden flex justify-center items-center shrink-0 opacity-50 '>
        <Search size="1rem"/>
      </Button>
      <Command className='md:block hidden overflow-hidden' ref={cmdRef}>
        <CommandInput value={searchInput} onValueChange={(val) => setSearchInput(val)} placeholder='Search' onFocus={() => setShowList(true)}/>
        <CommandList hidden={!showList || !searchInput } className='px-2 py-2 absolute w-full bg-white backdrop-blur-lg top-full rounded-md shadow-md'>
          <CommandGroup heading="Results">
            {/* <CommandSeparator/> */}
            {
              (searchList.map((item, key)=>{
                return (
                  <CommandItem key={key}>{item}</CommandItem>
                )
              }, []))
              }
          </CommandGroup>
          <CommandEmpty>No results found.</CommandEmpty>
          {searchLoading && <CommandLoading/>}
        </CommandList>
      </Command>
    </div>
  )
}

export default HeaderSearch