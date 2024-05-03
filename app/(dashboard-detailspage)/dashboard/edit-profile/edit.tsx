'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import DbLayout from '@/components/db-header';

interface FormData {
  imageUrl: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  bio: string;
}

const EditProfile: React.FC = (): JSX.Element | null => {
  const [error, setError] = useState("")
  const [errorn, setErrorn] = useState("")
  const [errorb, setErrorb] = useState("")
  const [errorf, setErrorf] = useState("")
  const [errorl, setErrorl] = useState("")
  const [errore, setErrore] = useState("")
  const [formData, setFormData] = useState<FormData>({
    imageUrl: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    bio: ''
  });

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const storedFormData = localStorage.getItem('agentData');
      if (storedFormData) {
        setFormData(JSON.parse(storedFormData));
      }
    }
  }, []);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('agentData', JSON.stringify(formData));
    }

    if(formData.username === ""){
      setError("username is required*")
    }
    if(formData.lastName === ""){
      setErrorl("lastName is required*")
    }
    if(formData.firstName === ""){
      setErrorf("firstName is required*")
    }
    if(formData.phoneNumber === ""){
      setErrorn("PhoneNumber is required*")
    }
    if(formData.phoneNumber === ""){
      setErrore("email is required*")
    }
    if(formData.firstName === ""){
      setErrorb("Bio is required*")
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, imageUrl: reader.result as string });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  return (
    <div>
      <DbLayout header="Edit Profile">
        <div className="mx-auto container py-10 px-20 mb-10 bg-neutral-700">

          <Image
            src={formData?.imageUrl || '/default-profile-picture.jpg'}
            alt="DP"
            layout="fixed"
            height={200}
            width={200}
            className="rounded-full object-cover border"
            style={{ width: "120px", height: "120px" }}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-4 text-xs"
          />

          < div className="mb-4 mt-8">
            <label htmlFor="username" className="block font-medium">
              Username*
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username || ''}
              onChange={handleInputChange}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
              required />
                {error && <p className="text-red-600 text-sm py-4">{error}</p>}
          </div>

          <div className='flex justify-between'>
            <div className="mb-4 w-[45%]">
              <label htmlFor="firstName" className="block font-medium">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                required />
                  {errorl && <p className="text-red-600 text-sm py-4">{errorl}</p>}
            </div>

            <div className="mb-4 w-[45%]">
              <label htmlFor="lastName" className="block font-medium">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
              />
            </div>
            {errorl && <p className="text-red-600 text-sm py-4">{errorl}</p>}
          </div>

          <div className='flex justify-between'>
            <div className="mb-4 w-[45%]">
              <label htmlFor="email" className="block font-medium">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                onChange={handleInputChange}
              />
                {errore && <p className="text-red-600 text-sm py-4">{errore}</p>}
            </div>

            <div className="mb-4 w-[45%]">
              <label htmlFor="phoneNumber" className="block font-medium">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                onChange={handleInputChange}
                required />
                  {errorn && <p className="text-red-600 text-sm py-4">{errorn}</p>}
            </div>
          </div>

          <div className="mb-10">
            <label htmlFor="bio" className="block font-medium">
              Bio*
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
              required></textarea>
                {errorb && <p className="text-red-600 text-sm py-4">{errorb}</p>}
          </div>
          <Link href={"/dashboard/vieww"}>
            <button className='text-white w-40 bg-blue px-4 py-2 rounded-md mr-16' type="submit" onClick={handleSubmit}>Save</button>
          </Link>
        </div>
      </DbLayout>
    </div>
  )
}

export default EditProfile;
