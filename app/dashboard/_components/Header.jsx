"use client"

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {
    const path = usePathname();
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        {/* <Image src={'/logo.svg'} width={160} height={100} alt='Logo'></Image> */}
        <div className='flex items-center gap-2'>
                <Image src='/ailogo.png' width={40} height={40} alt='AI Logo' className='object-contain' />
                <span className='text-xl font-semibold'>AIInterviewer</span>
            </div>
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard'&&'text-primary font-bold'}`}>Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions'&&'text-primary font-bold'}`}>Questions</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade'&&'text-primary font-bold'}`}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/howtowork'&&'text-primary font-bold'}`}>How to Work?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header