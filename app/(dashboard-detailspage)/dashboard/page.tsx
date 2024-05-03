import DbLayout from '@/components/db-header'
import React from 'react'
import df from "@/public/assets/images/bg.avif"
import { FiMoreVertical } from 'react-icons/fi'
import DropDownCard from '@/components/organisms/drop-down'

const Dashboard: React.FC = () => {
  return (

    <>
      <DbLayout header="Dashboard" only_header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridAutoRows: "500px" }}>
          <div className="bg-neutral-800 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Your Drinks</h2>
            {/* Content for the drinks section */}
            <div className="drinks flex justify-between px-5 shadow-lg bg-neutral-500">
              <h1 className=' text-1xl hover:text-orange-500 cursor-pointer'>Lemonade</h1>
              <img src='/assets/images/bg.avif' alt="lemonade" className=' w-10 h-10 rounded-full cursor-default' />
            </div>

          </div>
          <div className="bg-neutral-800 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Ingredients</h2>
            {/* Content for the ingredients section */}
            <div className="drinks flex justify-between px-5">
              <h1 className=' text-1xl hover:text-orange-500 cursor-pointer'>Lemonade</h1>
              <img src='/assets/images/bg.avif' alt="lemonade" className=' w-10 h-10 rounded-full cursor-default' />
            </div>
          </div>
          <div className="bg-neutral-800 shadow-xl rounded-lg p-4 mb-4 ">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            {/* Content for the categories section */}
            <div className="drinks flex justify-between px-5 shadow-lg bg-neutral-800 rounded-lg p-5  overflow-hidden transform hover:scale-105 transition duration-300">
              <h1 className=' text-1xl hover:text-orange-500 cursor-pointer'>Lemonade</h1>
            
            <img src='/assets/images/bg.avif' alt="lemonade" className=' w-8 h-8 rounded-full cursor-default ' />
            <div className="flex items-center">
                <button
                  className="text-gray-500 focus:outline-none"
                // onClick={() => handleActionClick(property.id)}
                >
                  <FiMoreVertical size={20} />
                </button>
                {/* {selectedPropertyId === property.id && ( */}
                <div className="absolute right-24">
                  {/* <DropDownCard /> */}
                </div>
                {/* )} */}
              </div>
            </div>
            
          </div>
        </div>

      </DbLayout>

    </>

  )
}

export default Dashboard
