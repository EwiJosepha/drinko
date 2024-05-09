import React from 'react'
import Image from 'next/image'
import popImage from "@/public/assets/images/landigImg.avif"
import { GrNext, GrPrevious } from 'react-icons/gr';

function PopularSection() {
  return (
    <div className='bg-white h-96 pl-10 pr-10'>
      <h1 className=' text-center text-4xl font-bold pb-10'>Popular Drinks</h1>
      <div className="flex items-center">
        <GrPrevious className=' text-orange-500 cursor-pointer  font-bold text-4xl hover:scale-125 hover:text-orange-500 ' />
        <div className=" flex justify-center align-middle w-full gap-4">

          <img src="/assets/images/landigImg.avif" className="object-cover" alt="Image 1" style={{ objectFit: 'cover', height: "380px", width: "50%"}} />
          <div className=" flex">
            {/* <p className="  text-white font-extrabold text-xl">Luxury VauVO</p> */}
            {/* <p className='absolute top-10 right-8 text-white font-extrabold text-xl'>$5997</p> */}
          </div>



          <img src="/assets/images/landigImg.avif" className="object-cover" alt="Image 2" style={{ objectFit: 'cover', height: "380px", width: "50%" }} />
          <div className=" flex">
            {/* <p className=" text-white font-extrabold text-xl">Luxury VauVO</p> */}
            {/* <p className='absolute top-10 right-8 text-white font-extrabold text-xl'>$5997</p> */}

          </div>
        </div>
        <GrNext className=' text-orange-500 cursor-pointer  font-bold text-4xl hover:scale-125 hover:text-orange-500' />
      </div>

    </div>

  )
}

export default PopularSection
