// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Logo from '../../public/logo.jpg';
import {Menu} from "lucide-react"

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleNavbar = () =>{
    setIsOpen(!isOpen);
  }


  return (
    <div className='flex flex-row justify-between items-center px-2 md:px-4 py-2 border-4 2xl:px-8 2xl:py-4'>
      <div className=''>
        <img className='w-14 cursor-pointer' src={Logo} alt="" />
      </div>

      <div className='hidden md:flex text-xl gap-5 2xl:gap-10 justify-center cursor-pointer'>
        <a href='#' className='transition-all duration-500 ease-in-out underline-offset-4 hover:underline hover:underline-offset-8 hover:text-gray-500'>Home</a>
        <a href='#' className='transition-all duration-500 ease-in-out underline-offset-4 hover:underline hover:underline-offset-8 hover:text-gray-500'>Movies</a>
        <a href='#' className='transition-all duration-500 ease-in-out underline-offset-4 hover:underline hover:underline-offset-8 hover:text-gray-500'>Series</a>
      </div>



      <div>
        <a href='#' className='hidden md:flex transition-all duration-500 ease-in-out underline-offset-4 hover:underline hover:underline-offset-8 hover:text-gray-500 font-bold cursor-pointer text-2xl'>
          Login
        </a>

      </div>
     

         <div className='md:hidden cursor-pointer' onClick={toggleNavbar}>
            <Menu />
         </div>

         {isOpen && (
          <ul className='flex flex-col justify-between top-16 right-0 z-10 bg-white p-4 md:hidden absolute transition-all duration-1000 ease-in-out'>
          <li><a href='#' className='transition-all duration-500 ease-in-out underline-offset-4 hover:underline hover:underline-offset-8 hover:text-gray-500'>Home</a></li>
          <li><a href='#' className='transition-all duration-500 ease-in-out underline-offset-4 hover:underline hover:underline-offset-8 hover:text-gray-500'>Movies</a></li>
          <li><a href='#' className='transition-all duration-500 ease-in-out underline-offset-4 hover:underline hover:underline-offset-8 hover:text-gray-500'>Series</a></li>
          <li><a href='#' className='transition-all duration-500 ease-in-out underline-offset-4 hover:underline hover:underline-offset-8 hover:text-gray-500'>Login</a></li>
         </ul>
         )}
      </div>
    
  )
}

export default Navbar
