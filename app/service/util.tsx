"use client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const base_url = "http://localhost:3000/"

export let updglassId: any

if (typeof localStorage !== "undefined") {
  updglassId = JSON.parse(localStorage.getItem("glassId") as string)
  Number(updglassId)
  console.log(updglassId);
  
}

export let updcategoryId: any

if (typeof localStorage !== "undefined") {
  updcategoryId = JSON.parse(localStorage.getItem("categoryId") as string)
  Number(updcategoryId)
  console.log(updcategoryId);
  
}

export const updateUrl = base_url + `put/update/glasses/${updglassId}`

export const updateCatUrl =base_url + `put/update/categories/${updcategoryId}`



export const getOneGlass = () => {
  return useQuery({
    queryKey: ['oneglass'],
    queryFn: async () => {
      const { data } = await axios.get(base_url + `get/read/glasses/${updglassId}`)
      return data.data
    }
    
  })
}

export const getOnecategory = () => {
  return useQuery({
    queryKey: ['onecategory'],
    queryFn: async () => {
      const { data } = await axios.get(base_url + `get/read/categories/${updcategoryId}`)
      return data.data
    }
    
  })
}



