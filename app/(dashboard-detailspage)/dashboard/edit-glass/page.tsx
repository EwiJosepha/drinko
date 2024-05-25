'use client'

import React, { useEffect, useState } from "react";
import Spinners from "@/components/molecules/spinners";
import { getOneGlass, updateUrl } from "@/app/service/util";

interface Glass {
  name: string,
  type: string
}

const EditGlass: React.FC<Glass> = () => {
  const [errort, setErrort] = useState("")
  const [errorn, setErrorn] = useState("")
  const [loading, setLoading] = useState(false)
  const [disabled, setDisable] = useState(false)

  const { data, isLoading, isError } = getOneGlass()

  const [glassInfo, setGlassInfo] = useState({
    name: "",
    type: ""
  })

  useEffect(() => {
    if (data) {
      setGlassInfo({
        ...glassInfo,
        name: data.name || "",
        type: data.type || ""
      })
    }
  }, [data])

  

  if (isLoading) {
    return <Spinners />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  console.log("glass",glassInfo.name);
  
  
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setGlassInfo({
      ...glassInfo, [name]: value
    })

    setErrorn("")
    setErrort("")
  }

  function saveGlass() {
    // Validation code here...

    const updatedValues = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(glassInfo)
    };

    fetch(updateUrl, updatedValues)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to submit data');
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === 201) {
        } else if (data.status === 200) {
          return 
        } else {
          setLoading(true)
          // router.push("/dashboard/myProperties")
        }
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  }


  return (
    <div className="flex justify-center items-center h-screen bg-neutral-700 pl-96">
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
          onClick={saveGlass}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditGlass;