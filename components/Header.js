import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import {toggleMenu} from '../utils/appSlice'
const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = ( ) =>{
    dispatch(toggleMenu())
  }

  return (
    <>
    
    
  
    <div className='bg-white text-black border z-20 border-b-gray-300 overflow-x-hidden md:w-screen h-16 sticky top-0 flex justify-between px-5 shadow-md'>
        <div className='flex gap-4 items-center '>
            <GiHamburgerMenu onClick={()=> toggleMenuHandler()} className='text-2xl ' />
             <div className='rounded-full bg-yellow-300 w-10 w-10 md:w-8 md:h-8'></div> 
             <h2 className=' md:text-md font-bold hidden md:block'>User Name</h2>
        </div>
        <div className='flex gap-8 mx-5 items-center font-bold'>
          <p>Go to Explore</p>
          <p>Refer and Earn</p>  
        </div>
      

    </div>
   
   
    </>
  )
}

export default Header