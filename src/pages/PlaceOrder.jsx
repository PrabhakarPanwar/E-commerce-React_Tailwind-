import React, { useContext } from 'react'
import CartTotal from '../components/CartTotal'
import { UserContext } from '../context/UserContext'

function PlaceOrder() {
  const { assets } = useContext(UserContext)
  return (
    <div>
      <div className='flex gap-4'>
        <form className='flex gap-4 flex-col flex-1'>
          <p className='uppercase text-2xl my-4'>Delivery <strong>information</strong></p>
          <div className='flex gap-3'>
            <input className='border p-2 w-full' type="text" placeholder='First Name' />
            <input className='border p-2 w-full' type="text" placeholder='Last Name' />
          </div>
          <input className='border p-2' type="email" placeholder='Email' />
          <input className='border p-2' type="text" placeholder='Street' />
          <div className='flex gap-3'>
            <input className='border p-2 w-full' type="text" placeholder='City' />
            <input className='border p-2 w-full' type="text" placeholder='State' />
          </div>
          <div className='flex gap-3'>
            <input className='border p-2 w-full' type="number" placeholder='Zip/Pin Code' />
            <input className='border p-2 w-full' type="text" placeholder='Country' />
          </div>
          <input className='border p-2' type="tel" pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' placeholder='Phone Number' />
        </form>
        <div className='flex-1'>
          <CartTotal razor={assets.razorpay_logo} stripe={assets.stripe_logo} cod={"CASH ON DELIVERY"} button={"Place Order"} />
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder