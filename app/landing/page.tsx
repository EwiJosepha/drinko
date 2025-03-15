"use client"
import Footer from '@/components/organisms/footer'
import HeroSection from '@/components/organisms/heroSec'
import Navbar from '@/components/organisms/nav'
import {io} from "socket.io-client"

import React, { useState } from 'react'
import PopularSection from '@/components/organisms/popular'
import Cards from '@/components/organisms/card'

function LandingPage() {
  const[display, setDisplay]= useState("")
  const socket = io("http://localhost:3002")
  // socket.on("connect", () => {
  //   const val = socket.id
  //   console.log(val);
    
  //   // setDisplay("you are connected to",val)
  // })
  return (
    <>
   
      {/* <Navbar />
      <HeroSection />
      <PopularSection /> */}
      <div className='flex gap-2  mt-40 bg-white h-96'>
       <div>
       <input className='bg-green-600' type='text border-2 border-blue-500 p-6' placeholder='type message here' />
       <button className='border-2 border-blue-500 p-3'>Send</button>
       </div>
       <p className='text-black'>new id is</p> {display}
      </div>
      {/* <Cards />
      <Footer /> */}

    </>
  )
}

export default LandingPage
