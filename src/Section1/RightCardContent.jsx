import React from 'react'

const RightCardContent = (props) => {
  return (
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
          <p className='text-xl text-shadow-2xs  leading-relaxed
          text-white mb-14'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam sit assumenda, minus sunt dolore.
          </p>
          <div className="flex justify-between items-center gap-2 mt-3">
            <button style={{background:props.color}} className=' text-white font-medium
            px-8 py-2 rounded-full'>{props.tag}</button>
            <button className=' text-white font-medium
            px-4 py-3 rounded-full'>
              <img
                src="https://cdn-icons-png.flaticon.com/128/14391/14391805.png"
                className="h-5.5 w-5"
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
