"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuSub,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { NavigationMenuContent as NavigationMenuContentPrimitive ,NavigationMenuTrigger as NavigationMenuTriggerPrimitive, NavigationMenuViewport } from "@radix-ui/react-navigation-menu"
import { Separator } from "@ui/separator"
import { HEADER_LINKS, Link as LinkType, Content } from "@/constants/content"


const navItemVal : {[key:string] : string} = {
  MENU1: 'menu1',
  MENU2: 'menu2',
  SUBMENU1: 'submenu1',
  SUBMENU2: 'submenu2'
}

const customerContents : Content[] = HEADER_LINKS[0].content as Content[]
const beAWorkerLinks : LinkType[] = HEADER_LINKS[1].links as LinkType[]

export function NavigationLinks() {
  const [submenuValue, setSubmenuValue] = React.useState<string>(customerContents[0].id)
  return (
    <>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {HEADER_LINKS[0].label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuSub defaultValue={customerContents[0].id} value={submenuValue} onValueChange={(e)=> setSubmenuValue(e)} className="relative grid grid-cols-[minmax(0,0.5fr)_5px_minmax(0,1fr)] gap-6 min-h-[250px] w-full p-3">
                <NavigationMenuList _useDefault={false} className="mt-2 w-full absolute flex flex-col gap-2 justify-start items-stretch">
                  <NavigationMenuItem value={customerContents[0].id}>
                   
                    <SubTriggerLinks title={customerContents[0].label }>
                      {customerContents[0].description}
                    </SubTriggerLinks>
                    <SubMenuContent
                      title={customerContents[0].description as string}
                      link={{
                        href:customerContents[0].content?.link?.href as string, 
                        children: customerContents[0].content?.link?.label as string
                      }} 
                      desc={customerContents[0].content?.description as string}>
                      <div className="flex flex-wrap items-start gap-3">
                        {
                          [
                            {imgSrc: '', label: "Service 1"},
                            {imgSrc: '', label: "Service 2"},
                            {imgSrc: '', label: "Service 3"},
                            {imgSrc: '', label: "Service 4"},
                            {imgSrc: '', label: "Service 5"},
                          ].map(({imgSrc, label}, index)=>{
                            return (
                              <div key={index} className="border-[1px] items-center shadow-md rounded-md text-accent-foreground grid xl:grid-rows-[100px_80px] xl:grid-cols-[120px] lg:grid-rows-[80px] lg:grid-cols-[80px_120px] md:grid-rows-[75px] md:grid-cols-[80px_110px] duration-100 hover:scale-105">
                                <Image className="object-contain h-full w-full bg-brand-primary-400 " src={imgSrc} alt=""/>
                                <div className="p-2">
                                  <strong className="text-sm font-medium text-zinc-700">{label}</strong>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </SubMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem value={customerContents[1].id}>
                    <SubTriggerLinks title={customerContents[1].label}>
                      {customerContents[1].description}
                    </SubTriggerLinks>
                    <SubMenuContent
                      title={customerContents[1].description as string}
                      link={{
                        href:customerContents[1].content?.link?.href as string, 
                        children: customerContents[1].content?.link?.label as string
                      }} 
                      desc={customerContents[1].content?.description as string}>
                      <div className="grid mx-auto xl:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-5">
                        {
                          [
                            {href: '', label: "Service 1"},
                            {href: '', label: "Service 3"},
                            {href: '', label: "Service 2"},
                            {href: '', label: "Service 4"},
                            {href: '', label: "Service 5"},
                          ].map(({href, label},index) => {
                            return (
                              <Link key={index} className="text-zinc-500/70 text-sm hover:text-zinc-600" href={href}>
                                {label}
                              </Link>
                            )
                          })
                        }
                      </div>
                    </SubMenuContent>
                  </NavigationMenuItem>

                </NavigationMenuList>
                <Separator orientation="vertical"/>
                <NavigationMenuViewport/>
              </NavigationMenuSub>
            
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {HEADER_LINKS[1].label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-full gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
                {beAWorkerLinks.map((link) => (
                  <ListItem
                    key={link.label}
                    title={link.label}
                    href={link.href as string}
                  >
                    {link.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={HEADER_LINKS[2].href as string} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {HEADER_LINKS[2].label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

 
const SubTriggerLinks = React.forwardRef<
  React.ElementRef<typeof NavigationMenuTriggerPrimitive>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuTriggerPrimitive> 
> (({title, children}, ref) => (
  <NavigationMenuTriggerPrimitive ref={ref}
    className={cn(navigationMenuTriggerStyle(),"whitespace-pre-wrap flex flex-col items-start text-left h-full w-full select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors data-[active]:bg-accent/50 data-[state=open]:bg-zinc-200/50")}>
    <div className="text-sm font-medium leading-none">{title}</div>
    <p className="line-clamp-2 text-sm leading-snug text-brand-primary-500">
      {children}
    </p>
  </NavigationMenuTriggerPrimitive>
))

SubTriggerLinks.displayName = NavigationMenuTriggerPrimitive.displayName


type SubMenuContentExtras = {
  title: string;
  desc: string;
  link: Omit<LinkProps, 'className'> & {children : string};
}

const SubMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuContentPrimitive> & SubMenuContentExtras
>(({children, title, desc, link ,...props}, ref) => (
  <NavigationMenuContentPrimitive 
    ref={ref} 
    className="w-full grid xl:grid-cols-[0.4fr_1fr] lg:grid-rows-[0.4fr_auto] gap-6 p-3 "
    {...props}
  >
    <div className="flex flex-col gap-3">
    <p className="text-base font-semibold">{title}</p>
    <p className="text-sm leading-snug text-muted-foreground">
      {desc}
    </p>
    <Link className="text-sm font-light underline" href="/">
      {link?.children ?? 'No link'}
    </Link>
    </div>
    {children}
  </NavigationMenuContentPrimitive>
)) 

SubMenuContent.displayName = NavigationMenuContentPrimitive.displayName

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
