import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <div  className=' flex flex-col  bg-black hover:text-gray-400 p-3 rounded-md cursor-pointer'>
      <Link href="/">
      <span className='text-orange-500 hover:text-gray-400'>Ze</span>
      <h1 className='text-orange-500 hover:text-gray-400'>DRINKO</h1>
      </Link>
    </div>
  )
}

export default Logo
