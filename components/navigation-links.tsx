"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavigationMenuSub, NavigationMenuViewport } from "@radix-ui/react-navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Look for a job",
    href: "/docs/primitives/alert-dialog",
    description:
      "Explore job opportunities posted by clients seeking services like yours.",
  },
  {
    title: "Learn how to get hired",
    href: "/docs/primitives/hover-card",
    description:
      "Discover essential tips and strategies to increase your chances of getting hired for your services.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },

]

export function NavigationLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Find worker
          </NavigationMenuTrigger>
          <NavigationMenuContent>
              <ul className="grid w-full gap-3 p-4 md:grid-cols-2">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                    
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Find a worker
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                      Welcome, valued clients!
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/" title="Post a job service">
                Ready to get your task done? Tell us what you need, and we&apos;ll find the right service provider for you.
                </ListItem>
                <ListItem href="/" title="Service Categories">
                  Explore a wide range of specialized service categories to meet your unique needs
                </ListItem>
                <ListItem href="/" title="Testimonials">
                Discover what our satisfied customers are saying about their experiences with our platform and services.
                </ListItem>
              </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Be a worker</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

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
