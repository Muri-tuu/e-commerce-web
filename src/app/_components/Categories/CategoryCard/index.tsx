'use client'
import React from 'react'
import Link from 'next/link'

import { Category } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const media = category.media as Media | null
  const { setCategoryFilters } = useFilter()

  // Default image URL or fallback if media is null
  const backgroundImage = media?.url ? `url(${media.url})` : 'url(/path/to/default-image.jpg)'

  return (
    <Link
      href="/products"
      className={classes.card}
      style={{ backgroundImage }}
      onClick={() => setCategoryFilters([category.id])}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard
