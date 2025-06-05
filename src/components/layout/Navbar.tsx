"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import { Home, Info, FolderKanban, Calendar, BookOpen, Mail, Menu, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const navigationItems = [
  { title: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
  { title: "About", href: "/about", icon: <Info className="h-5 w-5" /> },
  { title: "Projects", href: "/projects", icon: <FolderKanban className="h-5 w-5" /> },
  { title: "Events", href: "/events", icon: <Calendar className="h-5 w-5" /> },
  { title: "Resources", href: "/resources", icon: <BookOpen className="h-5 w-5" /> },
  { title: "Contact", href: "/contact", icon: <Mail className="h-5 w-5" /> },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-primary-foreground font-bold text-sm">CX</AvatarFallback>
          </Avatar>
          <span className="text-primary">CodeX</span>
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link to={item.href}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="flex items-center gap-2">
                      {React.cloneElement(item.icon, { className: 'h-4 w-4 opacity-70' })}
                      {item.title}
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="rounded-full h-9 w-9 border-primary/20">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] pr-0 border-l-primary/10">
            <SheetHeader className="pb-4 space-y-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary text-primary-foreground font-bold">CX</AvatarFallback>
                </Avatar>
                <SheetTitle className="text-xl font-bold">
                  <span className="text-primary">CodeX</span> Menu
                </SheetTitle>
              </div>
              <p className="text-xs text-muted-foreground px-1">
                Explore our platform and resources
              </p>
            </SheetHeader>
            <Separator className="bg-primary/10" />
            <nav className="flex flex-col py-6 pr-6 space-y-1">
              {navigationItems.map((item) => (
                <SheetClose asChild key={item.title}>
                  <Link 
                    to={item.href}
                    className="flex items-center justify-between py-3 px-3 text-base font-medium transition-colors hover:text-primary rounded-md hover:bg-muted group"
                  >
                    <span className="flex items-center gap-3">
                      {React.cloneElement(item.icon, { className: 'h-5 w-5 text-primary/70' })}
                      {item.title}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <Separator className="bg-primary/10 mt-auto" />
            <SheetFooter className="py-4 pr-6">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} CodeX. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground">
                  Empowering students through coding and robotics innovation.
                </p>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}