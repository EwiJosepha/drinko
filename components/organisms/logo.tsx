import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <div  className=' flex flex-col bg-cyan-50 hover:text-gray-400 p-5 rounded-md cursor-pointer'>
      <Link href="/">
      <span>Ze</span>
      <h1>DRINKO</h1>
      </Link>
    </div>
  )
}

export default Logo
