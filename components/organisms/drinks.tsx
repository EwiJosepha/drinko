'use client'

import React, { useEffect, useState } from "react";
import DbLayout from "../db-header";
import Spinners from "../molecules/spinners";

type Prop = {
  name: string;
  description: string;
  ingredients: string;
  recipe: string[];
  category: string;
  glass: string;

}

const DrinkCard: React.FC = () => {
  const [errorname, setErrorname] = useState<string>('');
  const [errordescription, setErrordescription] = useState<string>('');
  const [errorrecipe, setErrorrecipe] = useState<string>('');
  const [erroringredients, setErroringredients] = useState<string>('');
  const [errorglass, setErrorglass] = useState<string>('');
  const [errorcategory, setErrorcategory] = useState<string>('');
  const [disable, setDisable] = useState(false)
  const [loading, setLoading] = useState(false)

  const [drinkInfo, setDrinkInfo] = useState<Prop>({
    name: "",
    description: "",
    recipe: [],
    ingredients: "",
    glass: "",
    category: "",
  })

  // useEffect(()=>{
  //   if(data){
  //     setDrinkInfo({
  //       ...drinkInfo,
  //       name: data.name || "",
  //       description: data.description || "",
  //       recipe: data.recipe || [],
  //       ingredients: data.recipe || "",
  //       glass: data.glass || "",
  //       category: data.category || ""
  
  //     })
  //   }
  
  // },[data])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setDrinkInfo((prevdrinkInfo) => ({
      ...prevdrinkInfo,
      name: value,
    }));
    
    setErrorname('')
    setErrordescription('')
    setErrorrecipe('')
    setErroringredients('')
    setErrorcategory('')
    setErrorglass('')
    
  };

   function save() {
    if (drinkInfo.name === "") {
      setErrorname('Name is required*')
      return
    }

    if (drinkInfo.description === '') {
      setErrordescription('description is requied*')
      return
    }

    if (!drinkInfo.recipe) {
      setErrorrecipe('recipe is required*')
      return
    }
    if (drinkInfo.glass === "") {
      setErrorglass('Glass is required*')
      return
    }
    if (drinkInfo.category === "") {
      setErrorcategory('Room is required*')
      return
    }
  
    setDisable(true)
    setLoading(false)
  }

  return (

    <div className="p-4 shadow shadow-blue rounded-lg bg-neutral-700">
      <h3 className="text-xl font-semibold mb-2">Adding Drinks</h3>

      <div className='flex justify-between items-center'>
        <div className="my-4 w-[45%]">
          <label htmlFor="propertySize" className="block">
            Name*
          </label>
          <input
            type="text"
            name="name"
            value={drinkInfo.name}
            id="propertySize"
            className="border border-gray-200 px-4 py-3 rounded-md w-full"
            onChange={handleInputChange}
            required
          />
          {errorname && <p className="text-red-500 text-sm py-2">{errorname}</p>}
        </div>

        <div className="mb-4 w-[45%]">
          <label htmlFor="bedrooms" className="block">
            Glass*
          </label>
          <select className="border border-gray-200 px-4 py-3 rounded-md w-full"
          name="glass"
          value={drinkInfo.glass}
          onChange={ handleInputChange}>
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
      <div className='flex justify-between'>
        <div className="mb-4 w-[45%]">
          <label htmlFor="bathrooms" className="block">
            Category*
          </label>
          <select className="border border-gray-200 px-4 py-3 rounded-md w-full"
          name="category"
          value={drinkInfo.category}
           onChange={handleInputChange}>
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
          <select className="border border-gray-200 px-4 py-3 rounded-md w-full" onChange={handleInputChange}>
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
          name="ingredients"
          value={drinkInfo.ingredients}
          onChange={handleInputChange}
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
          name="recipe"
          value={drinkInfo.recipe}
          // onChange={handleInputChangerecipe}
          required
        />
      </div>
      {errorrecipe && <p className="text-red-500 text-sm py-2">{errorrecipe}</p>}

      <button disabled={disable} className='text-white w-40 bg-blue px-4 py-2 rounded-md mt-5 mb-3' onClick={save}>Save</button>

    </div>

  );
};
export default DrinkCard