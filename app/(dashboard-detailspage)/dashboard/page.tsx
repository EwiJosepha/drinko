"use client"
import React from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import GlassDropDown from '@/components/organisms/glass-dropdown'
import CategoryDropDown from '@/components/organisms/category-dropdown'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { base_url } from '@/app/service/util'
import Navbar from '@/components/organisms/nav'


type Glass = {
  id: number
  name: string;
  type: string
}
type Category = {
  id: number
  name: string;
 description: string
}

const Dashboard: React.FC = () => {
  const [dropDownVisibe, setDropDownVisible] = React.useState(false)

  const [selectedglassId, setSelectedglassId] = React.useState<number | null>(null)
  const [dropDowncategoryVisibe, setDropDowncategoryVisible] = React.useState(false)

  const [selectedcategoryId, setSelectedcategorysId] = React.useState<number | null>(null)

  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["updateglass"],
    queryFn: async () => {
      const response = await axios.get(base_url + "get/read/glasses");
      console.log("res data", response.data);
      return response.data;
    }
  })

  const { data:categoryData, isLoading:categoryLoading, isError:categoryError, refetch:categoryRefetch } = useQuery({
    queryKey: ["updatecategory"],
    queryFn: async () => {
      const response = await axios.get(base_url + "get/read/categories");
      console.log("res data", response.data);
      return response.data;
    }
  })

  function handleClickAction(glassId: number) {
    if (selectedglassId === glassId) {
      setDropDownVisible((prev) => !prev)
    } else {
      setDropDownVisible(true)
      setSelectedglassId(glassId)
    }
   
    localStorage.setItem("glassId", JSON.stringify(glassId))
    
  }
  function handleClickActionCat(categoryId: number) {
    if (selectedcategoryId === categoryId) {
      setDropDownVisible((prev) => !prev)
    } else {
      setDropDowncategoryVisible(true)
      setSelectedcategorysId(categoryId)
    }

    localStorage.setItem("categoryId", JSON.stringify(categoryId))
    
  }

  return (

    <>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 float-left" style={{ gridAutoRows: "580px" }}>
          <div className="bg-neutral-900 shadow-lg rounded-lg p-4">
            <h2 className="text-white xl font-bold mb-4">Your Drinks, Categories && Glasses</h2>
            <div className="ddrinks flex justify-between px-5 shadow-lg bg-neutral-800 rounded-lg p-5  overflow-hidden transform hover:scale-105 transition duration-300">
              <h1 className=' text-white 1xl hover:text-orange-500 cursor-pointer'>Lemonade</h1>
              <img src='/assets/images/bg.avif' alt="lemonade" className=' w-10 h-10 rounded-full cursor-default' />
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

            <div className="bg-neutral-900 shadow-lg rounded-lg p-4">
              <h2 className="text-white xl font-bold mb-4">Glasses</h2>
          {data?.data.map((glass: any) => (
              <div className="drinks flex justify-between  gap-5 px-5 shadow-lg bg-neutral-800 rounded-lg p-5  overflow-hidden transform hover:scale-105 transition duration-300 border-b-2 border-gray-400">
                <h1 className=' text-white 1xl hover:text-orange-500 cursor-pointer'>{glass.name}</h1>
              
                <div className="flex items-center">
                  <button
                    className="text-gray-500 focus:outline-none"
                    onClick={() => handleClickAction(glass.id)}
                  >
                    <FiMoreVertical size={20} />
                  </button>
                  {selectedglassId === glass.id && ( 
                  <div className="absolute right-24 h-24">
                 <GlassDropDown />
                 
                  </div>
                  )}
                 
                </div>
              </div>
          ))}
            </div>

          <div className="bg-neutral-900 shadow-xl rounded-lg p-4 mb-4 ">
            <h2 className="text-white xl font-bold mb-4">Categories</h2>
            {categoryData?.data.map((category:any)=>(
              <div className="drinks flex justify-between px-5 shadow-lg bg-neutral-800 rounded-lg p-5  overflow-hidden transform hover:scale-105 transition duration-300 border-b-2 border-gray-400 pb-3px">
              <h1 className=' text-white 1xl hover:text-orange-500 cursor-pointer'>{category.name}</h1>
              <div className="flex items-center">
                <button
                  className="text-gray-500 focus:outline-none"
                onClick={() => handleClickActionCat(category.id)}
                >
                  <FiMoreVertical size={20} />
                </button>
                {selectedcategoryId === category.id && ( 
                <div className="absolute right-24">
                  <CategoryDropDown />
                </div>
                )} 
              </div>
            </div>
            ))}
            

          </div>
        </div>

    </>

  )
}

export default Dashboard
