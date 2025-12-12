import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function OurPolicy() {
  const { assets } = useContext(UserContext)
  return (
    <div className='flex justify-evenly my-6 text-center'>
      <div className=''>
        <img className='w-10 h-10 m-auto mb-5' src={assets.exchange_icon} alt="exchange" />
        <p>Easy Exchange Policy</p>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div>
        <img className='w-10 h-10 m-auto mb-5' src={assets.quality_icon} alt="profile" />
        <p>7 days return Policy</p>
        <p>We Provide 7 days free return Policy</p>
      </div>
      <div>
        <img className='w-10 h-10 m-auto mb-5' src={assets.support_img} alt="support" />
        <p>Best Customer Support</p>
        <p>We provide 24X7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy