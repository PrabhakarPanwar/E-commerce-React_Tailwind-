import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Title from './Title'

function Hero() {
  const { assets } = useContext(UserContext)
  return (
      <div className='flex justify-between items-center'>
        <div className='w-[100%] flex flex-col shadow-md shadow-slate-400 sm:flex-row'>
          <div className='w-[100%] flex flex-col items-center justify-center'>
            <Title />
          </div>
          <div className='object-cover'><img className='' src={assets.hero_img} alt="" /></div>
        </div>
      </div>
  )
}

export default Hero