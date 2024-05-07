'use client'
import React, { useEffect, useState } from "react";
import Spinners from "@/components/molecules/spinners";
import { getOnecategory, updateCatUrl } from "@/app/service/util";


interface Glass {
  name: string,
  description: string
}

const EditCategory: React.FC<Glass> = () => {
  const {data, isLoading, isError} = getOnecategory()
  const [errort, setErrort] = useState("")
  const [errorn, setErrorn] = useState("")
  const [loading, setLoading] = useState(false)
  const [disabled, setDisable] = useState(false)

  const [categoryInfo, setCategoryInfo] = useState({
    name: "",
    description: ""
  })

  useEffect(() => {
    if (data) {
      setCategoryInfo({
        ...categoryInfo,
        name: data.name || "",
        description: data.description|| ""
      })
    }
  }, [data])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCategoryInfo({
      ...categoryInfo, [name]: value
    })

    setErrorn("")
    setErrort("")
  }


if (isLoading) {
    return <Spinners />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  function saveCategory() {
    
    const updatedValues = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(categoryInfo)
    };

    fetch(updateCatUrl, updatedValues)
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
          value={categoryInfo.name}
          placeholder="Enter glass name"
          className="w-full bg-gray-200 border border-gray-300 rounded mb-4 p-2"

          onChange={handleInputChange} />
        <textarea
          placeholder="Enter Description"
          name="description"
          value={categoryInfo.description}
          className="w-full bg-gray-200 border border-gray-300 rounded mb-4 p-2"
          rows={4}
          onChange={handleInputChange}
        ></textarea>
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
          onClick={saveCategory}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditCategory;