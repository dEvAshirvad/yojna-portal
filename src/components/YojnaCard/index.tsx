import type { Yojna } from '@/payload-types'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import { YojnaStatusBadge } from '@/components/YojnaStatusBadge'

const categoryColorClass = (color?: string | null) => {
  switch (color) {
    case 'education':
      return 'border-t-category-education'
    case 'women':
      return 'border-t-category-women'
    case 'agriculture':
      return 'border-t-category-agriculture'
    case 'governance':
      return 'border-t-category-governance'
    case 'welfare':
      return 'border-t-category-welfare'
    case 'child':
      return 'border-t-category-child'
    case 'culture':
      return 'border-t-category-culture'
    default:
      return 'border-t-category-health'
  }
}

const getCategory = (yojna: Pick<Yojna, 'category'>) => {
  return typeof yojna.category === 'object' ? yojna.category : null
}

export const YojnaCard: React.FC<{
  className?: string
  featured?: boolean
  yojna: Pick<
    Yojna,
    'category' | 'department' | 'externalLink' | 'slug' | 'status' | 'summary' | 'title'
  >
}> = ({ className, featured = false, yojna }) => {
  const category = getCategory(yojna)

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-lg border border-border border-t-4 bg-card transition-shadow hover:shadow-[0_8px_24px_rgba(24,28,32,0.06)]',
        categoryColorClass(category?.color),
        className,
      )}
    >
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-sm border border-border bg-muted px-2 py-1 text-xs font-semibold text-muted-foreground">
            {category?.title || 'Yojna'}
          </span>
          <YojnaStatusBadge status={yojna.status} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold leading-snug text-card-foreground">{yojna.title}</h3>
          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">{yojna.summary}</p>
        </div>

        {featured && yojna.department && (
          <p className="mt-auto text-xs font-semibold text-muted-foreground">{yojna.department}</p>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-border p-5 pt-4">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-civic-blue hover:underline"
          href={`/yojnas/${yojna.slug}`}
        >
          View Details
          <ArrowRight aria-hidden className="size-4" />
        </Link>
        {yojna.externalLink ? (
          <Button asChild size="sm">
            <Link href={yojna.externalLink} target="_blank">
              Apply Now
            </Link>
          </Button>
        ) : (
          <Button disabled size="sm" variant="outline">
            Not Open
          </Button>
        )}
      </div>
    </article>
  )
}
