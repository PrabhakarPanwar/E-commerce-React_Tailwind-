import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

function Footer() {
  const { assets } = useContext(UserContext)
  return (
    <div className='mt-36'>
      <div className='flex justify-center '>
        <div className='flex flex-wrap gap-5'>
          <div className='flex-1'>
            <img className='h-10 mb-4' src={assets.logo} alt="" />
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rationes</p>
          </div>
          <div className='flex-1 ml-10'>
            <p className='mb-4'><strong>Company</strong></p>
            <div className='flex flex-col'>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="">Delivery</Link>
              <Link to="">Privacy Policy</Link>
            </div>
          </div>

          <div className='flex-1'>
            <p className='mb-4 uppercase'><strong>get in touch</strong></p>
            <p>+678-989-090</p>
            <p>contact@onlinestore.com</p>
          </div>
        </div>
      </div>
      <p className='my-10 font-semibold text-center'>Copyright 2025@ codewareitpvt@onlinestore.com - All Right Reserved</p>
    </div>


  )
}

export default Footer