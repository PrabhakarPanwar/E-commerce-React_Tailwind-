import React from 'react'

function NewsLetterBox() {
  return (
    <div className='text-center flex flex-col my-20 gap-7'>
      <p className='text-2xl font-semibold'>Subscribe now & get 20% off</p>
      <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='flex justify-center items-center'>
        <input className='h-10 w-[250px] pl-3 border' type="text" placeholder='Enter your email' />
        <button className='text-gray-400 bg-black h-10 text-[12px] px-8 uppercase '>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetterBox