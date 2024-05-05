'use client'

import React from "react";
import { useState } from "react";
import { base_url } from "@/app/service/util";

const CategoryCard: React.FC = () => {
  const [errort, setErrort] = useState("")
  const [errorn, setErrorn] = useState("")
  const [loading, setLoading] = useState(false)
  const [disabled, setDisable] = useState(false)

  const [categoryInfo, setCategoryInfo] = useState({
    name: "",
    description: ""
  })


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCategoryInfo({
      ...categoryInfo, [name]: value
    })

    setErrorn("")
    setErrort("")
  }
  function createCategory() {
    fetch(base_url + "post/create/categories", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(categoryInfo)
    }).then((res) => {
      if (!res.ok) {
        console.log("didn't get created");
        throw new Error("Request failed");
      }
      return res.json(); 
    }).then((data) => {
      console.log("data", data);
    }).catch((error) => {
      console.log(error);
      // Handle any errors that occurred during the request
    });
  }



  return (
    <div className="flex justify-center items-center h-screen bg-neutral-700 pl-96">
      <div className="bg-neutral-700 rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Category Card</h1>
        <input
          type="text"
          placeholder="Enter category Name"
          onChange={handleInputChange}
          className="w-full bg-gray-200 border border-gray-300 rounded mb-4 p-2"
        />
        <textarea
          placeholder="Enter description"
          className="w-full bg-gray-200 border border-gray-300 rounded mb-4 p-2"
          onChange={handleInputChange}
          rows={4}
        ></textarea>
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
          onClick={createCategory}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;