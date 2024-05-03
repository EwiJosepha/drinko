import { useState } from "react"


interface Props {
  name:string,
  type: string
}

const Glass: React.FC =()=>{
  const[errorn, setErrorn]= useState("")
  const[errort, setErrort]= useState("")

  return (
    <>
     <div className="mt-4 p-4 shadow shadow-blue rounded-lg">
      <h1>CREATE GLASS</h1>
         <div className="mb-4">
                <label htmlFor="propertyTitle" className="block">
                    category Name*
                </label>
                <input
                    type="text"
                    id="propertyTitle"
                    className="border border-gray-200 px-4 py-3 rounded-md w-full"
                    // onChange={handleInputChangee}
                    required
                />
                {errorn && <p className="text-red-500 text-sm py-2">{errorn}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="propertyDescription" className="block">
                  category  Description*
                </label>
                <textarea
                    // onChange={handleTexarea}
                    id="propertyDescription"
                    className="border border-gray-200 px-4 py-3 rounded-md w-full"
                    required
                ></textarea>
                {errort && <p className="text-red-500 text-sm py-2">{errort}</p>}

            </div>
            </div>
    </>
  )
}

export default Glass