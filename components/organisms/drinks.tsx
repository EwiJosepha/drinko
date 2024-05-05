import React, { useState } from "react";
import DbLayout from "@/components/db-header";

type Prop = {
  name: string;
  description: string;
  ingredients: string;
  recipe: string[];
  category: string;
  glass: string;
};

const CreatDrink: React.FC = () => {
  const [errorname, setErrorname] = useState<string>("");
  const [errordescription, setErrordescription] = useState<string>("");
  const [errorrecipe, setErrorrecipe] = useState<string>("");
  const [erroringredients, setErroringredients] = useState<string>("");
  const [errorglass, setErrorglass] = useState<string>("");
  const [errorcategory, setErrorcategory] = useState<string>("");
  const [disable, setDisable] = useState(false);

  const [propertyInfo, setPropertyInfo] = useState<Prop>({
    name: "",
    description: "",
    recipe: [],
    ingredients: "",
    glass: "",
    category: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setPropertyInfo({
      ...propertyInfo,
      [name]: value,
    });
  };

  const save = () => {
    if (propertyInfo.name === "") {
      setErrorname("Name is required*");
      return;
    }

    if (propertyInfo.description === "") {
      setErrordescription("Description is required*");
      return;
    }

    if (!propertyInfo.recipe || propertyInfo.recipe.length === 0) {
      setErrorrecipe("Recipe is required*");
      return;
    }

    if (propertyInfo.glass === "") {
      setErrorglass("Glass is required*");
      return;
    }

    if (propertyInfo.category === "") {
      setErrorcategory("Category is required*");
      return;
    }

    setDisable(true);
  };

  return (
    <DbLayout header="Edit Drinks">
      <div className="p-4 shadow shadow-blue rounded-lg bg-neutral-700">
        <h3 className="text-xl font-semibold mb-2">Adding Drinks</h3>

        <div className="flex justify-between items-center">
          <div className="my-4 w-[45%]">
            <label htmlFor="propertySize" className="block">
              Name*
            </label>
            <input
              type="text"
              id="propertySize"
              className="border border-gray-200 px-4 py-3 rounded-md w-full"
              onChange={handleInputChange}
              name="name"
              required
            />
            {errorname && (
              <p className="text-red-500 text-sm py-2">{errorname}</p>
            )}
          </div>

          <div className="mb-4 w-[45%]">
            <label htmlFor="bedrooms" className="block">
              Description*
            </label>
            <input
              type="text"
              id="bedrooms"
              className="border border-gray-200 px-4 py-3 rounded-md w-full"
              onChange={handleInputChange}
              name="description"
              required
            />
            {errordescription && (
              <p className="text-red-500 text-sm py-2">{errordescription}</p>
            )}
          </div>
        </div>

        <div className="flex justify-between">
          <div className="mb-4 w-[45%]">
            <label htmlFor="category" className="block">
              Category*
            </label>
            <input
              type="text"
              id="category"
              className="border border-gray-200 px-4 py-3 rounded-md w-full"
              onChange={handleInputChange}
              name="category"
              required
            />
            {errorcategory && (
              <p className="text-red-500 text-sm py-2">{errorcategory}</p>
            )}
          </div>

          <div className="mb-4 w-[45%]">
            <label htmlFor="glass" className="block">
              Glass*
            </label>
            <input
              type="text"
              id="glass"
              className="border border-gray-200 px-4 py-3 rounded-md w-full"
              onChange={handleInputChange}
              name="glass"
              required
            />
            {errorglass && (
              <p className="text-red-500 text-sm py-2">{errorglass}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block">
            Ingredients*
          </label>
          <textarea
            id="ingredients"
            onChange={handleInputChange}
            className="border border-gray-200 px-4 py-3rounded-md w-full"
            name="ingredients"
            required
          ></textarea>
          {erroringredients && (
            <p className="text-red-500 text-sm py-2">{erroringredients}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="recipe" className="block">
            Recipe*
          </label>
          <textarea
            id="recipe"
            onChange={handleInputChange}
            className="border border-gray-200 px-4 py-3 rounded-md w-full"
            name="recipe"
            required
          ></textarea>
          {errorrecipe && (
            <p className="text-red-500 text-sm py-2">{errorrecipe}</p>
          )}
        </div>

        <button
          disabled={disable}
          className="text-white w-40 bg-blue px-4 py-2 rounded-md mt-5 mb-3"
          onClick={save}
        >
          Save
        </button>
      </div>
    </DbLayout>
  );
};

export default CreatDrink;