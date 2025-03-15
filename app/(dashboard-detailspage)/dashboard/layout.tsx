import React from 'react';
import { Inter as FontSans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/organisms/nav';


const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <><Navbar /><div className={`${fontSans.className} flex h-screen bg-zinc-700`}>
      <div className="bg-primary-color w-[15%] border-r border-gray-300 p-4">
        <div className='pt-24'>
          <ul className=' space-y-6 flex md:flex-col md:flex-none'>
            <div className=' flex  gap-4 align-middle '>
              <Image src="" width={22} height={5} alt='Vector' className=' object-cover rounded-t-full' />
              <li className=' text-cream-color text-lg font-serif'>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </div>
            <div className='flex  gap-4 align-middle'>
              {/* <Image src={vector5} width={30} height={5} alt='Vector' className=' object-cover' /> */}
              {/* <FaPerbyte  className='text-cream-color  text-lg'/> */}

              <li className=' text-cream-color  text-lg '>
                <Link href="/signup">All Tasks</Link>
              </li>
            </div>
            <div className=' flex gap-4'>
              {/* <FaPlus className=' text-cream-color text-lg'/> */}

              <li className=' text-cream-color text-lg'>
                <Link href="/signup">Task Completed</Link>
              </li>
            </div>
            <div className=' flex gap-4'>
              {/* <FaPlus className=' text-cream-color text-lg'/> */}
              <li className=' text-cream-color text-lg'>
                <Link href="/signup">Add A Task</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div></>
  );
};

export default DashboardLayout;