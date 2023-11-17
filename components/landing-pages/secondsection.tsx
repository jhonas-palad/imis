import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'
import { Button } from '../ui/button'
import { SelectTrigger, Select, SelectContent, SelectItem,SelectGroup, SelectLabel, SelectValue } from '@ui/select'
import ContentSectionWrapper from '../content-section-wrapper'


const SecondSection = () => {
  return (
    <ContentSectionWrapper
      className='-mt-14'
    >

      <div className='bg-blue-700 text-white shadow-xl rounded-lg py-6 px-6 md:px-20'>
        <div className='flex items-center justify-center px-4 gap-4'>
          {/* <div className='flex-1 flex justify-center items-center gap-4'> */}
            <span
              className='font-semibold text-sm md:text-base basis-full md:basis-[50%] text-center'
            >
              Find a service
            </span>
            
              <Select>
                <SelectTrigger className='rounded-full border-none text-foreground bg-gray-100'>
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className='text-xs p-2'>Services</SelectLabel>
                    <SelectItem className='text-start p-2' value="1">Deep cleaning</SelectItem>
                    <SelectItem className='text-start p-2' value="2">Basic cleaning</SelectItem>
                    <SelectItem className='text-start p-2' value="3">Deep cleaning</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className='rounded-full border-none text-foreground bg-gray-100'>
                  <SelectValue placeholder="Select a City"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className='text-start'>
                    <SelectLabel className='text-xs p-2'>Cities</SelectLabel>
                    <SelectItem className='text-start p-2' value="1">Lipa</SelectItem>
                    <SelectItem className='text-start p-2' value="2">Tanauan</SelectItem>
                    <SelectItem className='text-start p-2'value="3">Malvar</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
          {/* </div> */}

            <Button
              className="rounded-full"
            >
              Search
            </Button>

        </div>
      </div>
    </ContentSectionWrapper>
  )
}

export default SecondSection