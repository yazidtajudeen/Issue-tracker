'use client';
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBug } from "react-icons/fa";
import classNames from 'classnames';


const NavBar = () => {
  const  currentPath = usePathname();
  console.log(currentPath);
  const links =[
    { name: 'Dashboard', href: '/' },
    { name: 'Issues', href: '/issues' },
  ]
  return (
   <nav className='flex space-x-6 mb-5 border-b px-10 py-5 h-18
    items-center '>
    <Link href='/' className=''><FaBug /></Link>

    <ul className='flex space-x-6 px-5'>  
        {links.map(link => 
      <Link key={link.href} className={classNames({
        'text-zinc-900': link.href === currentPath,
        'text-zinc-500': link.href !== currentPath,
        'hover:text-zinc-800 transition-colors': true 

      })} href= {link.href}>{link.name}</Link>
    )}
    

    </ul>
   </nav>
  )
}

export default NavBar
