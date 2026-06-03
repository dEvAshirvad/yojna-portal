'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap items-center gap-5 text-sm font-semibold">
      {navItems.map(({ link }, i) => {
        const isActive = link.url === '/' ? pathname === '/' : Boolean(link.url && pathname.startsWith(link.url))

        return (
          <CMSLink
            className={
              isActive
                ? 'border-b-2 border-primary pb-1 text-primary'
                : 'pb-1 text-foreground hover:text-primary'
            }
            key={i}
            {...link}
            appearance="inline"
          />
        )
      })}
      <Link className="text-foreground hover:text-primary" href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="size-5" />
      </Link>
    </nav>
  )
}
