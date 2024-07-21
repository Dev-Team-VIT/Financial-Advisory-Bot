"use client";
import React, { SVGProps } from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";


function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const onScroll = () =>{
    if (window.scrollY > 0){
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  }

  window.addEventListener('scroll', onScroll);
  return (
    <header className={`${scrolled?'bg-background':'bg-bgGrey'} sticky top-0 z-20 transition ease-in-out`}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="#" className={`text-lg font-bold ${scrolled?'text-[black]': 'text-[black]'} transition ease-in-out`} >
          Money Mantra 
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link to="#" className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${scrolled?'text-[black]':'text-[black]'} hover:text-secondary transition ease-in-out`}>
            Home
          </Link>
          <Link to="#" className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${scrolled?'text-[black]':'text-[black]'} hover:text-secondary transition ease-in-out`}>
            What we offer?
          </Link>
          <Link to="#" className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${scrolled?'text-[black]':'text-[black]'} hover:text-secondary transition ease-in-out`}>
            About
          </Link>
          <Link to="#" className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${scrolled?'text-[black]':'text-[black]'} hover:text-secondary transition ease-in-out`}>
            Contact Us
          </Link>
        </nav>
        <Sheet>
        <Link to={'/login'}>
          <Button className="md:hidden hover:bg-mutedOrange text-background rounded-[50px] w-[100px]">Login</Button>
        </Link>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link to="#" className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground" >
                Home
              </Link>
              <Link to="#" className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground" >
                About Us
              </Link>
              <Link to="#" className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground" >
                Services
              </Link>
              <Link to="#" className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground" >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Button className="md:block hidden hover:bg-mutedOrange text-background rounded-[50px] w-[100px]">Login</Button>
      </div>
    </header>
  );
}


function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default Navbar;