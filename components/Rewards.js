import React from 'react'
import { Link } from 'react-router-dom'

const Rewards = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='w-full h-[70%] bg-[#212121]'>
<nav className='flex justify-between'>
  <div>
    <Link to={'/'}>
     <h3 className='font-bold text-lg  md:text-lg  mx-4 md:mx-14 my-5 md:my-10 hover:text-yellow-300  cursor-pointer text-white'>Create and Sell</h3>

    </Link>
    
  </div>
  <div className='flex font-bold text-white md:gap-10 my-5 mx-4 gap-5 md:my-10 md:mx-10 '>
    <p className='hover:text-yellow-300'>COMMUNITY</p>
    <p className='hover:text-yellow-300'>EXPLORE</p>
    <p className='hidden md:block hover:text-yellow-300'>CREATOR</p>
    <p className='hidden md:block hover:text-yellow-300'>JOIN</p>

  </div>
     
    </nav>

    <div className='md:flex md:flex-row flex flex-col-reverse justify-between '>
    <div>

       <h1 className='text-4xl mx-14 md:mt-20 font-semibold text-white'><span className='font-bold text-4xl text-yellow-300 mr-3 '>CLAMIO</span>Rewards Program</h1>
       <p className='text-md text-white md:my-5 my-3 mx-14'>Refer CLAMIO to fellow creators or sell 100 Digital Products througth CLAMIO</p>

       <h3 className='font-bold text-3xl mx-14 text-yellow-300'>earn Rs. 50000*</h3>
    </div>
    <div>
      <img className='md:w-[45rem] md:h-[40.5rem] h-80 h-80 mx-20' src='\pngegg (21).png'></img>
    </div>

    </div>

   

      </div>

      <div>

        <h1 className='font-bold text-3xl text-center my-20'>Getting Started is Easy</h1>

        <div className='flex justify-center '>
        <img className='w-[70rem]' src='\Screenshot 2024-06-03 121447.png'></img>
        </div>

      </div>

      <div className='flex justify-center my-20'>
        <img className='w-[80rem]' src='\Screenshot 2024-06-03 121615.png'></img>
      </div>

<div className='flex justify-center my-20'>
  <img className='w-[80rem]' src='\Screenshot 2024-06-03 121833.png'></img>
</div>
    

    </div>
  )
}

export default Rewards