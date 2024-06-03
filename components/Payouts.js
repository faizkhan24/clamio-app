import React from 'react'

const Payouts = () => {
  return (
    <div className='md:ml-52 p-4 w-screen h-screen overflow-x-hidden'>

      <div className='md:flex flex flex-col items-center gap-5 md:justify-between my-7 '>
        <h1 className='font-bold text-3xl mx-10 '>Payouts</h1>
        <button className='bg-yellow-300 rounded-lg font-bold text-md w-52 h-12'>Settings</button>
      </div>

      <div className='mx-10 my-20 flex  flex-col md:flex md:flex-row gap-10 items-center md:gap-36 md:justify-center'>
        <div className='w-48 h-36  rounded-lg border border-black '>
          <p className='text-blue-800 font-bold text-xl mx-3 my-5'>Last 7 Days</p>
          <p className='font-bold text-2xl font-bold mx-3 my-10'>Rs.25</p>
        </div>
        <div className='w-48 h-36  rounded-lg border border-black '>
          <p className='text-blue-800 font-bold text-xl mx-3 my-5'>Last 30 Days</p>
          <p className='font-bold text-2xl font-bold mx-3 my-10'>Rs.700</p>
        </div>
        <div className='w-48 h-36  rounded-lg border border-black '>
          <p className='text-blue-800 font-bold text-xl mx-3 my-5'>Total Earnings</p>
          <p className='font-bold text-2xl font-bold mx-3 my-10'>Rs.5977</p>
        </div>
       
      </div>

      <h1 className='text-4xl font-bold my-10 mx-10'>Payout History</h1>
      <div className='md:w-[1080px] border border-gray-300 shadow-xl w-[1300px] md:mx-10 rounded-lg'>
            <img className='w-96 h-60 md:w-[1080px] md:h-full' src='/836845_preview.jpg' alt='Analytics' />
          </div>


    </div>
  )
}

export default Payouts