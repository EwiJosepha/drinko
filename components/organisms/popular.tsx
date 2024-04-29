import React from 'react'
import Image from 'next/image'
import popImage from "@/public/assets/images/landigImg.avif"
import { GrNext, GrPrevious } from 'react-icons/gr';

function PopularSection() {
  return (
    <div>
      <h1 className=' text-center text-4xl font-bold p-8'>Popular Drinks</h1>
      <div className="flex items-center  justify-center pt-0 pl-8 pr-8 ">
        <GrPrevious className=' text-white cursor-pointer  font-bold text-4xl hover:scale-125 hover:text-orange-500' />
        <div className=" grid grid-cols-3 gap-8 relative overflow-hidden">
          {/* <!-- Left Div Content --> */}
          <div>

          <img src="/assets/images/landigImg.avif" style={{ objectFit: 'cover', height:"85.3%" }} alt='best' />
          <div className=" flex">
            <p className=" absolute top-10 left-8 text-white font-extrabold text-xl">Luxury VauVO</p>
            <p className='absolute top-10 right-8 text-white font-extrabold text-xl'>$5997</p>
          </div>
          </div>
          <div className="">
            <img src="/assets/images/landigImg.avif" className="object-cover" alt="Image 1"style={{ objectFit: 'cover', height:"85.3%" }} />
            <div className=" flex">
              <p className=" absolute top-10 left-8 text-white font-extrabold text-xl">Luxury VauVO</p>
              <p className='absolute top-10 right-8 text-white font-extrabold text-xl'>$5997</p>
            </div>
          </div>

          <div className="">
            <img src="/assets/images/landigImg.avif" className="object-cover" alt="Image 2" style={{ objectFit: 'cover', height:"85.3%" }}/>
            <div className=" flex">
              <p className=" absolute top-10 left-8 text-white font-extrabold text-xl">Luxury VauVO</p>
              <p className='absolute top-10 right-8 text-white font-extrabold text-xl'>$5997</p>
            </div>
          </div>
        </div>


        <GrNext className=' text-white cursor-pointer  font-bold text-4xl hover:scale-125 hover:text-orange-500' />
      </div>

    </div>

  )
}

export default PopularSection
