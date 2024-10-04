'use client';
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBug } from "react-icons/fa";


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

    <ul className='flex space-x-6'>  
        {links.map(link => 
      <Link key={link.href} className={`${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'} hover:text-zinc-800 transition-colors`} href= {link.href}>{link.name}</Link>
    )}
    

    </ul>
   </nav>
  )
}

export default NavBar
