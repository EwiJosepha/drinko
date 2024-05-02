import { ReactNode } from "react"
import {
  FaArrowAltCircleLeft,
  FaPerbyte,
  FaPlus,
  FaRegEye,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa";

type Props = {
  children: ReactNode;
}

const DbLayout: React.FC<Props>= ({ children })=> {

  return (
    <>

      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40  md:block  w-1/5 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-10 py-4 overflow-y-auto bg-gray-50 dark:bg-neutral-800">
          <ul className="space-y-2 font-medium">
            <li className=" pb-10 pt-10 border-b-2 border-gray-500">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
               {/* <span>< FaPerbyte/></span> */}
               <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="text-4xl text-green pl-3">Dashboard</span>
              </a>
            </li>
            {/* <hr /> */}
            <li className=" pb-10 pt-10 border-b-2 border-gray-500">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaRegUser />
                <span className="text-4xl text-green pl-3">create</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
           
              <li className="pb-10 pt-10 border-b-2 border-gray-500">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaRegEye />
                  <span
                    className="text-2xl text-green pl-3"
                  
                  >
                    View Profile
                  </span>
                </a>
              </li>
            
            <p className="text-2xl text-green pt-10 pb-2 dark:text-orange-500">CRUD DRINKS</p>
        
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                 <FaPlus/>
                  <button
                    className="text-2xl text-green pl-3 dark:text-orange-500"
                  
                  >
                    Add Drink
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                 <FaPlus/>
                  <button
                    className="text-2xl text-green pl-3 dark:text-orange-500"
                  
                  >
                    Add Glass
                  </button>
                </a>
              </li>
              <li className=" pb-5 border-b-2 border-gray-500">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                 <FaPlus/>
                  <button
                    className="text-2xl text-green pl-3 dark:text-orange-500"
                  
                  >
                    Add Category
                  </button>
                </a>
              </li>
         
          </ul>
        </div>
      </aside>
{/* 
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-purple-600">
              <p className="text-2xl text-white ">Welcome!</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded  bg-red-600 dark:bg-gray-800">
            
                <button
                  id="createprofile"
                  className="text-2xl text-white"
                
                >
                  View Profile
                </button>
           
                <button
                  id="createprofile"
                  className="text-2xl text-white"
               
                >
                  Create Profile
                </button>
             
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-green-500 ">
              <p className="text-2xl text-white">Services</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded  bg-purple-600">
            <p className="text-2xl text-white">Welcome to SPA COmplexe</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-green-500 dark:bg-gray-800">
              <p className="text-2xl text-white">Days</p>
            </div>
            <div className="flex items-center justify-center rounded  h-28 bg-purple-600">
              <p className="text-2xl text-white">Massage</p>
            </div>
            <div className="flex items-center justify-center rounded bg-purple-600 h-28 dark:bg-gray-800">
              <p className="text-2xl text-white">Bodycare</p>
            </div>
            <div className="flex items-center justify-center rounded  bg-green-500">
              <p className="text-2xl text-white">Scrups</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-green-500 dark:bg-gray-800">
            <p className="text-2xl text-white">Contact Us</p>
          </div>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      </div> */}

      <div className="md:w-[83.33%] w-full bg-blue min-h-screen">
                <>
                    {children}
                </>
            </div>
    </>



  
  )

}

export default DbLayout