'use client'
/* import Image from 'next/image' */

import { useState } from 'react'

export function LikeButton ({ id }) {
  const [likeState, setLikeState] = useState(0)

  const handleLike = () => {
    const newLikeState = (likeState + 1) % 3
    setLikeState(newLikeState)
  }

  const getLikeText = () => {
    if (likeState === 0) return '👍👎'
    if (likeState === 1) return '👍'
    return '👎'
  }

  return (
    <button className='like-button' onClick={handleLike}>
      {getLikeText()}
    </button>
  )
}

/* export function LikeButton ({ id }) {
  const [liked, setLiked] = useState()

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '♡' : '❤️'}
    </button>
  )
} */

/* <Image alt=' ' src={liked ? '/images/happy-face.png' : '/images/angry-face.png'} width={50} height={50} /> */
