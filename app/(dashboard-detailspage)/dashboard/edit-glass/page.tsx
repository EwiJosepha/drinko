'use-client'
import React, { useEffect, useState } from "react";
import Spinners from "@/components/molecules/spinners";


interface Glass {
  name: string,
  type: string
}

const EditGlass: React.FC<Glass> = () => {
  const [errort, setErrort] = useState("")
  const [errorn, setErrorn] = useState("")
  const [loading, setLoading] = useState(false)
  const [disabled, setDisable] = useState(false)

  const [glassInfo, setGlassInfo] = useState({
    name: "",
    type: ""
  })

  // useEffect(() => {
  //   if (data) {
  //     setGlassInfo({
  //       ...glassInfo,
  //       name: data.name || "",
  //       type: data.type || ""
  //     })
  //   }
  // }, [data])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setGlassInfo({
      ...glassInfo, [name]: value
    })

    setErrorn("")
    setErrort("")
  }

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-700">
      <div className="bg-neutral-700 rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Glass Card</h1>
        <input
          type="text"
          name="name"
          value={glassInfo.name}
          placeholder="Enter glass name"
          className="w-full bg-gray-200 border border-gray-300 rounded mb-4 p-2"

          onChange={handleInputChange} />
        <textarea
          placeholder="Enter type"
          name="type"
          value={glassInfo.type}
          className="w-full bg-gray-200 border border-gray-300 rounded mb-4 p-2"
          rows={4}
          onChange={handleInputChange}
        ></textarea>
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditGlass;