import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t-4 border-primary">
      <div className="container flex flex-col py-2 md:flex-row md:justify-between">
        <p className="text-xs leading-6">
          © 2024 Raipur District Administration, Government of Chhattisgarh.
        </p>
        <p className="text-xs leading-6">
          All Rights Reserved. Developed and Hosted by National Informatics Centre.
        </p>

        {/* <div className="flex flex-col items-start gap-4 md:items-end">
          <nav className="flex flex-col gap-3 text-sm md:flex-row">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="" key={i} {...link} />
            })}
          </nav>
        </div> */}
      </div>
    </footer>
  )
}
