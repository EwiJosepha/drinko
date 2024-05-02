import Link from "next/link"
type Props = {
  header?: string,
  children:React.ReactNode ,
  only_header?: boolean
}
export default function DbLayout ({children, only_header, header}: Props) {

  return(
    <>
       <div className="text-orange-500 h-32 bg-red-800 z-10 justify-between flex items-center md:mx-auto md:w-[80%] right-0 top-0 fixed pl-24">
                <div className="text-3xl font-mono font-bold">{header}</div>

                {/* Desktop Menu */}
                <div className="md:flex items-center space-x-20 pr-28">
                    <div className="relative group">
                        <Link href='/dashboard/addNewProperties' className="hidden md:block hover:text-gray-300 bg-orange-400 py-3 px-8 rounded-lg text-white"> Add Drinks</Link>
                    </div>

                    {/* Avatar */}
                    <div className="flex items-center">
                        <img
                            src="av2.jpg"
                            alt="Avatar"
                            className="w-10 h-10 rounded-full cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <div className=" w-full md:w-[83%] flex-col md:mt-40 mb-10 rounded-xl flex  md:mx-auto ">{children}</div>
    </>
  )

}