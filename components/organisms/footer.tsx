import React from 'react'
import Logo from './logo'

function Footer() {
  return (
    <>
      <footer className="bg-neutral-800 py-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-8">
            <a href="#" className="text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              </svg>
              {/* Twitter icon SVG */}
              <div className="">

                <Logo />
                <p className='text-white hover:text-red-400'>cocktails</p>
                <p className='text-white hover:text-red-400'>lemonades</p>
                <p className='text-white hover:text-red-400'>Fruits</p>
                <p className='text-white hover:text-red-400'>cocktails.</p>
              </div>

            </a>
            <a href="#" className="text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {/* GitHub icon SVG */}
              </svg>
              <p className=' text-white hover:text-red-400 '>drinks</p>
              <p className=' text-white hover:text-red-400'>recipe</p>
              <p className=' text-white hover:text-red-400'>glasses</p>
              <p className=' text-white hover:text-red-400'>Beer & wine</p>
              <p className=' text-white hover:text-red-400'>spirits</p>
              <p className=' text-white hover:text-red-400'>lemonades</p>
            </a>
            <a href="#" className="text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              </svg>
              {/* Instagram icon SVG */}
              <p className=' text-white hover:text-red-400'>About Us</p>
              <p className=' text-white hover:text-red-400'>Terms of service</p>
              <p className=' text-white hover:text-red-400'>Guidelines</p>
              <p className=' text-white hover:text-red-400'>Contact</p>
              <p className=' text-white hover:text-red-400'>EU privacy</p>

            </a>
            <a href="#" className="text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              </svg>
              {/* Instagram icon SVG */}
              <p className=' text-white hover:text-red-400'>Advertisement</p>
              <p className=' text-white hover:text-red-400'>Privacy</p>
              <p className=' text-white hover:text-red-400'>Career</p>
              <p className=' text-white hover:text-red-400'>Contact</p>

            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
