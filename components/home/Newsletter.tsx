import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full h-48 mb-36 '>
      <div className='max-w-6xl mx-auto border-t-2 py-6 px-12 md:px-0 '>
        <h3 className='text-2xl font-semibold'>Get lightining fast updates from us </h3>
        <div className='w-full flex flex-col md:flex-row h-16 border-2 border-black my-6 gap-4'>
          <input type="text" className='flex-1 p-4 text-xl outline-none'/>
          <button className='bg-black font-semibold text-lg text-white py-6 md:py-0 px-12'>Subscribe to our Newsletter</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter