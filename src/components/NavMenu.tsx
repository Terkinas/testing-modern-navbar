'use client'

import * as React from 'react'

import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/Icons'
import { AiOutlineHome, AiOutlineTeam, AiOutlineMessage } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'
import { FaBook } from 'react-icons/fa'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'

export function NavMenu() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <HiMenuAlt4 className='text-xl rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100' />
          <HiMenuAlt4 className='text-xl absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100' />
          <span className='sr-only'>Navigation menu toggle</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem onClick={() => console.log()}>
          <AiOutlineHome className='mr-2 h-4 w-4' />
          <span>Pagrindinis</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log()}>
          <AiOutlineTeam className='mr-2 h-4 w-4' />
          <span>Apie mus</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log()}>
          <AiOutlineMessage className='mr-2 h-4 w-4' />
          <span>Kontaktai</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}