
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-5 sm:py-6 lg:py-8 px-4 sm:px-8 lg:px-18">
        
        <h4 className='bg-black text-white uppercase py-2 px-4 sm:px-5 lg:px-6 rounded-full text-xs sm:text-sm'>
          Target Audience
        </h4>

        <button className='bg-gray-200 px-4 sm:px-5 lg:px-6 py-2 uppercase rounded-full tracking-wider text-xs sm:text-sm'>
          Digital Banking Platform
        </button>

      </div>
    </div>
  )
}

export default Navbar
