import { ReactNode } from "react"
import {
  FaArrowAltCircleLeft,
  FaPerbyte,
  FaPlus,
  FaRegEye,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa";
import Link from "next/link";

type Props = {
  children: ReactNode;
}

const DbLayout: React.FC<Props> = ({ children }) => {

  return (
    <>



      <aside
        id="default-sidebar"
        className=" flex fixed top-0 left-0 z-40  md:block  w-94 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-10 py-4 overflow-y-auto bg-gray-50 dark:bg-neutral-800">
          <ul className="space-y-2 font-medium">
            <li className=" pb-10 pt-10 border-b-2 border-gray-500 flex align-middle justify-center">

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
              <span className="text-2xl text-green pl-3">Dashboard</span>

            </li>
            {/* <hr /> */}
            <li className=" pb-10 pt-10 border-b-2 border-gray-500 flex align-middle justify-center">
              <Link href="/dashboard/profile"

                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaRegUser />
                <span className="text-4xl text-green pl-3">create</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </Link>
            </li>

            <li className="pb-10 pt-10 border-b-2 border-gray-500 flex align-middle justify-center">

              <FaRegEye />
              <span
                className="text-2xl text-green pl-3"

              >
                View Profile
              </span>

            </li>

            <p className="text-2xl text-green pt-10 pb-2 dark:text-orange-500">CRUD DRINKS</p>

            <li className="pb-5 border-b-2 flex align-middle justify-center">

              <FaPlus />
              <button
                className="text-2xl text-green pl-3 dark:text-orange-500"

              >
                Add Drink
              </button>

            </li>
            <li className=" pb-5 border-b-2 flex align-middle justify-center">

              <FaPlus />
              <button
                className="text-2xl text-green pl-3 dark:text-orange-500"

              >
                Add Glass
              </button>

            </li>
            <li className=" pb-5 border-b-2 border-gray-500 flex align-middle justify-center">

              <FaPlus />
              <button
                className="text-2xl text-green pl-3 dark:text-orange-500"

              >
                Add Category
              </button>

            </li>

          </ul>
        </div>
      </aside>


      <div className="flex-grow">
        <>
          {children}
        </>
      </div>
    </>




  )

}

export default DbLayout