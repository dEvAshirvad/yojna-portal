import type { Category } from '@/payload-types'

import { Filter, Search } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const YojnaFilters: React.FC<{
  categories: Pick<Category, 'slug' | 'title'>[]
  selectedCategory?: string
  selectedStatus?: string
  search?: string
}> = ({ categories, search, selectedCategory, selectedStatus }) => {
  return (
    <form
      action="/yojnas"
      className="rounded-lg border border-border bg-card p-4 shadow-[0_8px_24px_rgba(24,28,32,0.03)]"
    >
      <div className="grid gap-4 md:grid-cols-[1fr_1fr_1.2fr_auto] md:items-end">
        <label className="space-y-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Category
          <select
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            defaultValue={selectedCategory || ''}
            name="category"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.slug || category.title} value={category.slug || ''}>
                {category.title}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Status
          <select
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            defaultValue={selectedStatus || ''}
            name="status"
          >
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
            <option value="closed">Closed</option>
          </select>
        </label>

        <label className="space-y-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Search Schemes
          <span className="relative block">
            <Search
              aria-hidden
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              className="h-10 pl-9"
              defaultValue={search || ''}
              name="q"
              placeholder="Search by scheme name or keyword"
            />
          </span>
        </label>

        <Button className="h-10" type="submit">
          <Filter aria-hidden className="size-4" />
          Filter
        </Button>
      </div>
    </form>
  )
}
