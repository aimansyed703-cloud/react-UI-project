
import React from 'react'

const LeftContent = () => {
  return (    

    <div className='h-full flex flex-col justify-between w-full lg:w-1/3'>
      
      <div className='p-6'>
        <h3 className='mb-7 leading-[1.1] text-4xl sm:text-5xl lg:text-7xl font-bold'>
          Prospective <br /> 
          <span>Customer</span> <br />
          segmentation
        </h3>

        <p className='text-base sm:text-lg lg:text-xl w-full lg:w-[90%] font-medium text-gray-600'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Consequatur unde ad doloribus quisquam.
          Harum ipsum assumenda debitis, eius ea porro.
        </p>
      </div>

      <div className="text-7xl sm:text-8xl lg:text-9xl">
        <img
          src='https://cdn-icons-png.flaticon.com/128/14440/14440636.png'
          className="w-18 h-18"
        />
      </div>

    </div>

  )
}

export default LeftContent