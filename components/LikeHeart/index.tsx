"use client"

import { useState } from "react"
import HeartSvg from "../Assets/Icons/HeartSvg"
import HeartSvgFill from "../Assets/Icons/HeartSvgFill"

export default function LikeHeart() {
  const [like, setLike] = useState(false)
  return (
    <div>
      {
        like ?
          <div onClick={() => setLike(false)}>
            <HeartSvgFill />
          </div> :
          <div onClick={() => setLike(true)}>
            <HeartSvg />
          </div>
      }
    </div>
  )
}