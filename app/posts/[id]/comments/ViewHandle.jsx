'use client'
import { useState } from 'react'
import Link from 'next/link'

export function ViewHandle ({ id, children }) {
  const [areCommentsVisible, setAreCommentsVisible] = useState(false)

  const handleCommentsClick = () => {
    setAreCommentsVisible(!areCommentsVisible)
  }
  return (
    <arcticle>
      <Link legacyBehavior href={`/posts/${id}/comments`}>
        <a onClick={handleCommentsClick}>
          {areCommentsVisible ? 'Ocultar comentarios' : 'Ver comentarios'}
        </a>
      </Link>
      {areCommentsVisible && children}
    </arcticle>
  )
}
