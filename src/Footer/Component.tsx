import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t-4 border-primary bg-[#20252a] text-white">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:justify-between">
        <Link className="flex items-start" href="/">
          <Logo />
        </Link>

        <div className="max-w-xl text-sm leading-6 text-white/75">
          <p>© 2024 Raipur District Administration, Government of Chhattisgarh.</p>
          <p>All Rights Reserved. Developed and Hosted by National Informatics Centre.</p>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <nav className="flex flex-col gap-3 text-sm md:flex-row">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white/80 hover:text-white" key={i} {...link} />
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}
