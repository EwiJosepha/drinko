"use client"

import React, { useState } from "react";
import DbLayout from "@/components/db-header";
import { base_url } from "@/app/service/util";

type Prop = {
  name: string;
  description: string;
  imageUrl: string;
  ingredients: string;
  recipe: string[];
  category: string;
  glass: string;
};

const CreatDrink: React.FC = () => {
  const [errorname, setErrorname] = useState<string>("");
  const [errordescription, setErrordescription] = useState<string>("");
  const [errorrecipe, setErrorrecipe] = useState<string>("");
  const [errorm, setErrorm] = useState<string>("");
  const [erroringredients, setErroringredients] = useState<string>("");
  const [errorglass, setErrorglass] = useState<string>("");
  const [errorcategory, setErrorcategory] = useState<string>("");
  const [disable, setDisable] = useState(false);
  const [img, setImg] = useState("");

  const [drink, setDrink] = useState<Prop>({
    name: "",
    description: "",
    imageUrl: img,
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
    setDrink({
      ...drink,
      [name]: value,
    });
  };


  function imagehandle(e: React.ChangeEvent<HTMLInputElement>) {
    const fileName = e.target.files?.[0];
    if (fileName) {
      const loadimg = new FileReader();
      loadimg.onload = () => {
        const targetImg = loadimg.result as string;
        setImg(targetImg);
        // localStorage.setItem("targetimg", targetImg);
      };
      loadimg.readAsDataURL(fileName);
      loadimg.onloadend = () => {
        setImg(loadimg.result as string)
      }
    }
  }

  console.log(img);
  

  // async function imagehandle(e: React.ChangeEvent<HTMLInputElement>) {
  //   const fileName = e.target.files?.[0];
  //   if (fileName) {
  //     try {
  //       const formData = new FormData();
  //       formData.append("file", fileName);
  //       formData.append("upload_preset", "real-estate-preset");
  
  //       const uploadResponse = await fetch(
  //         "https://api.cloudinary.com/v1_1/beri-cloud/image/upload",
  //         {
  //           method: "POST",
  //           body: formData,
  //         }
  //       );
  
  //       if (!uploadResponse.ok) {
  //         throw new Error("Failed to upload image");
  //       }
  
  //       const uploadedImageData = await uploadResponse.json();
  //       const imageUrl = uploadedImageData.secure_url;
        
  //       // Use the imageUrl as needed (e.g., setImg(imageUrl), store in localStorage, etc.)
  //       console.log("Image URL:", imageUrl);
  //     } catch (error) {
  //       console.error("Error uploading image:", error);
  //       // Handle the error, e.g., display an error message to the user
  //     }
  //   }
  // }

  console.log(drink);
  


  const createDrink = () => {
    if (drink.name === "") {
      setErrorname("Name is required*");
      return;
    }

    if (drink.description === "") {
      setErrordescription("Description is required*");
      return;
    }

    if (!drink.recipe || drink.recipe.length === 0) {
      setErrorrecipe("Recipe is required*");
      return;
    }

    if (drink.glass === "") {
      setErrorglass("Glass is required*");
      return;
    }

    if (drink.category === "") {
      setErrorcategory("Category is required*");
      return;
    }
    // if (drink.imageUrl === "") {
    //   setErrorm("image Url is required*");
    //   return;
    // }

    fetch(base_url + "post/create/drinks", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(drink)
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
    });
    setDisable(true);
  };

  
  


  return (
    <DbLayout header="Create Drinks">
      <div className="p-4 shadow shadow-blue rounded-lg bg-neutral-700  pl-96">
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
        <div className="mb-4">
          <label htmlFor="Image" className="block">
            Image*
          </label>
          <input
            id="image"
            onChange={imagehandle}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            name="imageUrl"
            type="file"
            required
          ></input>
          {errorm && (
            <p className="text-red-500 text-sm py-2">{errorm}</p>
          )}
        </div>


        <button
          disabled={disable}
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
          onClick={createDrink}
        >
          Save
        </button>
      </div>
    </DbLayout>
  );
};

export default CreatDrink;