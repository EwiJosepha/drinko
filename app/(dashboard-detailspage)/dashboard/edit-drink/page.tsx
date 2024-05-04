'use client'

import React, { useState } from "react";
import DbLayout from "@/components/db-header";
type Prop = {
  name: string;
  description: string;
  ingredients: string;
  recipe: string[];
  category: string;
  glass: string;

}

const EditDrink: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [errorrooms, setErrorrooms] = useState<string>('');
  const [errorname, setErrorname] = useState<string>('');
  const [errordescription, setErrordescription] = useState<string>('');
  const [errorrecipe, setErrorrecipe] = useState<string>('');
  const [erroringredients, setErroringredients] = useState<string>('');
  const [errorglass, setErrorglass] = useState<string>('');
  const [errorcategory, setErrorcategory] = useState<string>('');
  const [disable, setDisable] = useState(false)

  const [propertyInfo, setPropertyInfo] = useState<Prop>({
    name: "",
    description: "",
    recipe: [],
    ingredients: "",
    glass: "",
    category: "",
  })

  const [data, setData] = useState<Prop>(propertyInfo)

  const handleSelectChangename = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPropertyInfo((prevPropertyInfo) => ({
      ...prevPropertyInfo,
      name: value,
    }));

    // setData((prevPropertyInfo) => ({
    //   ...prevPropertyInfo,
    //   bath: value,

    // }));
    setErrorname('')
  };

  const handleSelectChangedescription = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setPropertyInfo((prevPropertyInfo) => ({
      ...prevPropertyInfo,
      description: value,
    }));


    // setData((prevPropertyInfo) => ({
    //   ...prevPropertyInfo,
    //   livingRooms: value,
    // }));

    setErrordescription('')
  };

  const handleSelectChangeingredients = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setPropertyInfo((prevPropertyInfo) => ({
      ...prevPropertyInfo,
      ingredients: value,
    }));

    setData((prevPropertyInfo) => ({
      ...prevPropertyInfo,
      ingredients: value,
    }));
    setErroringredients('')
  };
  // const handleSelectChangerecipe = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { value } = e.target;
  //   setPropertyInfo((prevPropertyInfo) => ({
  //     ...prevPropertyInfo,
  //     recipe: value,
  //   }));

  //   setData((prevPropertyInfo) => ({
  //     ...prevPropertyInfo,
  //     recipe: value,
  //   }));
  //   setErrorrecipe('')
  // };

  const handleInputChangecategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setPropertyInfo((prevPropertyInfo) => ({
      ...prevPropertyInfo,
      category: value,
    }));

    // setData((prevPropertyInfo) => ({
    //   ...prevPropertyInfo,
    //   category: parseFloat(value),
    // }));
    setErrorcategory('')
  };

  const handleInputChangeglass = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setPropertyInfo((prevPropertyInfo) => ({
      ...prevPropertyInfo,
      glass: value
    }));
    // setData((prevPropertyInfo) => ({
    //   ...prevPropertyInfo,
    //   glass: value
    // }));

    setErrorglass('')
  }

  function save() {
    if (propertyInfo.name === "") {
      setErrorname('Name is required*')
      return
    }

    if (propertyInfo.description === '') {
      setErrordescription('description is requied*')
      return
    }

    if (!propertyInfo.recipe) {
      setErrorrecipe('recipe is required*')
      return
    }
    if (propertyInfo.glass === "") {
      setErrorglass('Glass is required*')
      return
    }
    if (propertyInfo.category === "") {
      setErrorcategory('Room is required*')
      return
    }
  
    setDisable(true)
  }

  return (
    <DbLayout header="Edit Drinks">

    <div className="p-4 shadow shadow-blue rounded-lg bg-neutral-700">
      <h3 className="text-xl font-semibold mb-2">Adding Drinks</h3>

      <div className='flex justify-between items-center'>
        <div className="my-4 w-[45%]">
          <label htmlFor="propertySize" className="block">
            Name*
          </label>
          <input
            type="text"
            id="propertySize"
            className="border border-gray-200 px-4 py-3 rounded-md w-full"
            onChange={handleSelectChangename}
            required
          />
          {errorname && <p className="text-red-500 text-sm py-2">{errorname}</p>}
        </div>

        <div className="mb-4 w-[45%]">
          <label htmlFor="bedrooms" className="block">
            Description*
          </label>
          <select className="border border-gray-200 px-4 py-3 rounded-md w-full" onChange={ handleSelectChangedescription}>
            <option value="">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errorrooms && <p className="text-red-500 text-sm py-2">{errorrooms}</p>}

        </div>
      </div>
      <div className='flex justify-between'>
        <div className="mb-4 w-[45%]">
          <label htmlFor="bathrooms" className="block">
            Category*
          </label>
          <select className="border border-gray-200 px-4 py-3 rounded-md w-full" onChange={handleInputChangecategory}>
            <option value="">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errorcategory && <p className="text-red-500 text-sm py-2">{errorcategory}</p>}

        </div>
        <div className="mb-4 w-[45%]">
          <label htmlFor="bathrooms" className="block">
            Glass*
          </label>
          <select className="border border-gray-200 px-4 py-3 rounded-md w-full" onChange={handleInputChangeglass}>
            <option value="">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errorglass && <p className="text-red-500 text-sm py-2">{errorglass}</p>}

        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="kitchenDescription" className="block">
          Ingredients*
        </label>
        <textarea
          id="kitchenDescription"
          onChange={handleSelectChangeingredients}
          className="border border-gray-200 px-4 py-3 rounded-md w-full"
          required
        ></textarea>
        {erroringredients && <p className="text-red-500 text-sm py-2">{erroringredients}</p>}

      </div>
      <div className="mb-4">
        <label htmlFor="propertyLocation" className="block">
          Recipe*
        </label>
        <input
          type="text"
          id="propertyLocation"
          className="border border-gray-200 px-4 py-3 rounded-md w-full"
          // onChange={handleInputChangerecipe}
          required
        />
      </div>
      {errorrecipe && <p className="text-red-500 text-sm py-2">{errorrecipe}</p>}

      <button disabled={disable} className='text-white w-40 bg-blue px-4 py-2 rounded-md mt-5 mb-3' onClick={save}>Save</button>

    </div>
    </DbLayout>

  );
};
export default EditDrink
