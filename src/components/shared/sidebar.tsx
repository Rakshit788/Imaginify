"use client"



import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '../../../constants'
import { usePathname } from 'next/navigation'
import { log } from 'console'
import { Button } from '../ui/button'

const SideBar = () => {
  const pathname = usePathname()
 


  return (
    <aside className='sidebar'>
      <div className=' flex size-full flex-col gap-4'>
        <Link href='/'>
          <Image src="/assets/images/logo-text.svg" alt='Image error ' width={180} height={128} />
        </Link>

        <nav className='sidebar-nav'>

          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {

                const isactive = link.route === pathname
                return (

                  <li key={link.icon} className={`sidebar-nav_element group ${isactive ? 'bg-purple-400 text-white' : 'text-gray-500'}`}>

                    <Link className='sidebar-link' href={link.route}>
                      <Image src={link.icon} alt='logo' width={24} height={24} className={`${isactive ? 'brightness-200' : ''}`} />
                      <p>  {link.label}</p>


                    </Link>
                  </li>

                )
              })}
            </ul>

            <ul className='sidebar-nav_elements'>
             
                {navLinks.slice(6).map((link) => {

                  const isactive = link.route === pathname
                  return (

                    <li key={link.icon} className={`sidebar-nav_element group ${isactive ? 'bg-purple-400 text-white' : 'text-gray-500'}`}>

                      <Link className='sidebar-link' href={link.route}>
                        <Image src={link.icon} alt='logo' width={24} height={24} className={`${isactive ? 'brightness-200' : ''}`} />
                        <p>  {link.label}</p>


                      </Link>
                    </li>

                  )
                })}
                 <li className=' flex-center cursor-pointer gap-2 p-4 '>
                <UserButton afterSignOutUrl='/' showName />
              </li>

            </ul>

          </SignedIn>


          <SignedOut>
            <Button asChild className='button  bg-purple-gradient bg-cover'>
              <Link href='/sign-in' > Login</Link>
            </Button>
          </SignedOut>

        </nav>

      </div>

    </aside>
  )
}

export default SideBar;
