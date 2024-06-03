import React, { useEffect } from "react";
import { MdHomeFilled } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai"
import { FaCircleDollarToSlot } from "react-icons/fa6"
import { IoMdTrophy } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import AOS from 'aos'
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  useEffect(()=>{
        AOS.init();
    },[])
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

  if(!isMenuOpen) return null;
  
  return (
    <div className="border border-r-gray-300 bg-white opacity-2 w-52 px-7 py-8 h-screen fixed cursor-pointer shadow-lg" data-aos="fade-right" >
      <ul className="flex flex-col gap-5">
        <div className="flex gap-3 items-center ">
        <FaUser className="text-xl md:hidden block'" />
        <li className="text-md font-bold md:hidden block">User Name</li>  
        </div>
     
        <div className="flex gap-1 items-center">
            <MdHomeFilled className="text-2xl"/>
            <Link to={'/'}>
                <li >Home</li>
            </Link>
      
        </div>
        <div className="flex gap-1 items-center">
            <AiFillProduct className="text-2xl"/>
            <Link to={'product'}>
                <li className="text-md font-semibold">Product</li>
            </Link>
      
        </div>
        <div className="flex gap-1 items-center">
            <FaCircleDollarToSlot className="text-2xl"/>
            <Link to={'payouts'}>
            <li className="text-md font-semibold">Payouts</li>
            </Link>
          
        </div>
        <div className="flex gap-1 items-center">
        <IoMdTrophy className="text-2xl"/>
        <Link to={'rewards'}>
        <li className="text-md font-semibold">Rewards</li>
        </Link>
          
        </div>

       
      </ul>
    </div>
  );
};

export default Sidebar;
