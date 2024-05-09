import React from 'react'
import LoadMore from './loadmore'
import { Button } from '../ui/button'

function Cards() {
  return (
    <div className=' pl-20 pr-20'>
      <h1 className=' text-center font-bold text-3xl pt-10 pb-10'>Our Drinks</h1>
      <div className="relative w-full-screen grid grid-cols-3 gap-8">
        <div className="bg-brown-500  rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
          <img src="/assets/images/punchpic.jpg" alt="card Img" />
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-2">Drink Name</h3>
            <p className="text-lg">Price: $5.99</p>
          </div>
          <div className="bg-orange-500 px-4 py-2 flex justify-end">
            <button className=" font-semibold hover:text-gray-200">view all Details</button>
          </div>
        </div>
        <div className="bg-brown-500  rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img src="/assets/images/punchpic.jpg" alt="card Img" />
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-2">Drink Name</h3>
            <p className="text-lg">Price: $5.99</p>
          </div>
          <div className="bg-orange-500 px-4 py-2 flex justify-end">
            <button className=" font-semibold hover:text-gray-200">Add to Cart</button>
          </div>
        </div>
        <div className="bg-brown-500 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ">
          <img src="/assets/images/punchpic.jpg" alt="card Img" />
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-2">Drink Name</h3>
            <p className="text-lg">Price: $5.99</p>
          </div>
          <div className="bg-orange-500 px-4 py-2 flex justify-end">
            <button className=" font-semibold hover:text-gray-200">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gradient-to-br from-brown-500 to-orange-500 pt-10 pb-10">
      <button className="text-ecf0f1 text-base bg-orange-500 border border-f39c12 rounded-md cursor-pointer py-2 px-4 shadow-md transition-all duration-100 ease-in-out hover:shadow-none active:shadow-inner active:translate-y-1">
  Load More
</button>
</div>

    </div>
  )
}

export default Cards
