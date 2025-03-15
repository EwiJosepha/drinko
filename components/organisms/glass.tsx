"use client"

import React from "react";
import { useState } from "react";
import { base_url } from "@/app/service/util";

const GlassCard: React.FC = () => {

  const [errort, setErrort] = useState("")
  const [errorn, setErrorn] = useState("")
  const [loading, setLoading] = useState(false)
  const [disabled, setDisable] = useState(false)

  const [glassInfo, setglassInfo] = useState({
    title: "",
    description: ""
  })


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setglassInfo({
      ...glassInfo, [name]: value
    })

    setErrorn("")
    setErrort("")
    console.log(glassInfo);
  }

  function createGlass() {
    fetch(base_url + "post/create/glasses/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(glassInfo)
     
      
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
    <div className="flex justify-center items-center h-screen bg-neutral-700  pl-96">
      <div className="bg-neutral-700 rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Glass Card</h1>
        <input
          type="text"
          name="title"
          value={glassInfo.title}
          placeholder="Enter glass name"
          className="w-full bg-gray-200 border border-gray-300 rounded mb-4 p-2"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Enter glass type"
          name="description"
          value={glassInfo.description}
          className="w-full bg-gray-200 border border-gray-300 rounded mb-4 p-2"
          rows={4}
          onChange={handleInputChange}
        ></textarea>
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
          onClick={createGlass}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default GlassCard;