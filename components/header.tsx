import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconPlus
} from '@/components/ui/icons'
import { Session } from '@/lib/types'

async function UserOrLogin() {
  return (
    <div className="flex items-center gap-6">
      <Link href="/new" className="flex items-center">
        <svg
          viewBox="0 0 24 24"
          className="size-6 mr-2 text-[#F55036]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
        <span className="text-xl font-bold bg-gradient-to-r from-[#F55036] to-[#FF8C38] bg-clip-text text-transparent">
          MarketInsight AI
        </span>
      </Link>

      <div className="flex items-center">
        <a
          href="/new"
          className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}
        >
          <span className="flex items-center">
            <IconPlus className="size-4 mr-1" />
            New Chat
          </span>
        </a>
      </div>
    </div>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://github.com/amalraju7/stockbot-on-groq"
          className={cn(buttonVariants({ variant: 'outline' }))}
          style={{ borderRadius: 0 }}
          rel="noopener noreferrer"
        >
          <IconGitHub />
          <span className="hidden md:inline-flex ml-2">GitHub</span>
        </a>
      </div>
    </header>
  )
}
