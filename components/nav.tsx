import React from 'react'
import { ModeToggle } from './ui/toggle-mode'

function Nav() {
  return (
    <div className='flex'>
      <h1>SHADCN</h1>
      <p><ModeToggle /></p>
    </div>
  )
}

export default Nav
