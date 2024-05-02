import DbLayout from '@/components/db-header'
import React from 'react'
import df from "@/public/assets/images/bg.avif"

const Dashboard: React.FC = () => {
  return (

    <>
      <DbLayout header="Dashboard" only_header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridAutoRows: "500px" }}>
          <div className="bg-neutral-800 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Your Drinks</h2>
            {/* Content for the drinks section */}
            <div className="drinks flex justify-between px-5">
              <h1 className=' text-1xl hover:text-orange-500 cursor-pointer'>Lemonade</h1>
              <img src='/assets/images/bg.avif' alt="lemonade"  className=' w-10 h-10 rounded-full cursor-default'/>
            </div>
      
          </div>
          <div className="bg-neutral-800 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Ingredients</h2>
            {/* Content for the ingredients section */}
            <div className="drinks flex justify-between px-5">
              <h1 className=' text-1xl hover:text-orange-500 cursor-pointer'>Lemonade</h1>
              <img src='/assets/images/bg.avif' alt="lemonade"  className=' w-10 h-10 rounded-full cursor-default'/>
            </div>
          </div>
          <div className="bg-neutral-800 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            {/* Content for the categories section */}
            <div className="drinks flex justify-between px-5">
              <h1 className=' text-1xl hover:text-orange-500 cursor-pointer'>Lemonade</h1>
              <img src='/assets/images/bg.avif' alt="lemonade"  className=' w-10 h-10 rounded-full cursor-default'/>
            </div>
        
          </div>
        </div>

      </DbLayout>

    </>

  )
}

export default Dashboard
