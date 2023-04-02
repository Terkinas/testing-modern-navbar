import React from 'react'
import { FiMoon } from 'react-icons/fi'
import { NavMenu } from '../NavMenu'
import { ThemeToggle } from '../ThemeToggle'
import Link from 'next/link'


function Navbar() {
  return (
    <nav className='w-full px-6 h-16 flex justify-between lg:justify-around shadow dark:bg-slate-900 dark:text-slate-300 dark:shadow-slate-400'>
        <div className='min-w-12 h-16 flex items-center'>
            <Link className='font-semibold dark:text-green-400' href="/">Vietove.lt</Link>
        </div>
        <div className='flex-col sm:flex'>

            <div className='flex gap-1'>
                <div className='w-10 h-16 flex items-center justify-center'>
                    <ThemeToggle />

                </div>

                <div className='w-10 h-16 flex items-center justify-end'>
                    <NavMenu />
                </div>
            </div>
        
        </div>
    </nav>
  )
}

export default Navbar