import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Hero() {
  const { assets } = useContext(UserContext)
  return (
    <div className='flex justify-between items-center'>
      <div className='w-[100%] flex flex-col shadow-md shadow-slate-400 md:flex-row'>
        <div className='w-[100%] flex flex-col items-center justify-center'>
          <div className='flex h-[100%] justify-center items-center md:flex-col gap-3'>
            <p className='md:text-xl md:flex hidden'>OUR BESTSELLERS</p>
            <p className='md:text-3xl text-[18px]'>LATEST ARRIVALS</p>
            <p className='md:text-xl md:flex hidden'>SHOP NOW</p>
          </div>
        </div>
        <div className='object-cover'><img className='' src={assets.hero_img} alt="" /></div>
      </div>
    </div>
  )
}

export default Hero