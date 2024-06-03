import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa6';
import Loader from './Loader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="md:ml-52 p-4 overflow-x-hidden">
      {loading ? (
        <div className='flex justify-center items-center -mx-36  h-screen w-screen'>
           <Loader/>
          </div>
       
      ) : (
        <>
          <h1 className='font-bold text-2xl py-5 md:px-10'>It's time to create something</h1>
          <div className='md:w-[80%] md:h-96 w-96 h-60 rounded-md shadow-md bg-yellow-400 md:mx-10 py-5'>
            <div className='md:flex md:justify-center md:py-20 px-28'>
              <div className='h-28 w-36 md:w-36 md:h-36 bg-gray-300 flex justify-center items-center'>
                <FaPlus className='text-5xl' />
              </div>
            </div>
            <button className='w-48 h-12 mx-24 my-10 md:my-0 md:w-[45%] md:h-14 bg-white md:mx-[27%] shadow-lg rounded-md font-bold'>
              Create Your Product
            </button>
          </div>

          <h1 className='font-bold text-2xl md:px-10 py-5'>Analytics</h1>
          <div className='md:w-[1080px] border border-gray-300 shadow-xl w-[1300px] md:mx-10 rounded-lg'>
            <img className='w-96 h-60 md:w-[1080px] md:h-full' src='/836845_preview.jpg' alt='Analytics' />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
