import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

function CartTotal() {
  const { getTotalAmount, assets } = useContext(UserContext)
  const [select, setSelect] = useState()
  // console.log(getTotalAmount())
  const handleSelect = (id) => {
    setSelect(id);
  };

  return (
    <div className=''>
      <p className='my-2 text-2xl uppercase'>Cart <strong>total</strong></p>
      <div className='flex py-2 justify-between border-b-2'>
        <p>Subtotal</p>
        <p>${getTotalAmount()}</p>
      </div>
      <div className='flex py-2 justify-between border-b-2'>
        <p>Shipping Fee</p>
        <p>${10}</p>
      </div>
      <div className='flex py-2 justify-between '>
        <p><strong>Total</strong></p>
        <p>${getTotalAmount() + 10}</p>
      </div>
      <div>
        <p className='my-2 text-xl uppercase'>Payment <strong>Method</strong></p>
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-5  '>
          <label htmlFor="raz" className='flex items-center gap-1 flex-1'>
            <input type="radio" name="payment" id="raz" />
            <img className='h-8 py-1 border  rounded-md cursor-pointer p-2 object-contain' src={assets.razorpay_logo} alt="razorpay" />
          </label>
          <label htmlFor="strip" className='flex items-center gap-1 flex-1'>
            <input type="radio" name="payment" id="strip" />
            <img className='h-8 py-1 border  rounded-md cursor-pointer p-2 object-contain' src={assets.stripe_logo} alt="stripe" />
          </label>
          <label htmlFor="cod" className='flex items-center gap-1 flex-1'>
            <input type="radio" name="payment" id="cod" />
            <p className='h-8 border  rounded-md cursor-pointer content-center text-[10px] ' >Cash On Delivery</p>
          </label>
        </div>
      </div>
      <Link to="/placeOrder" className='flex justify-end mt-4 mr-3'>
        <button className='bg-black uppercase font-semibold text-white sm:p-3 p-1 '>Proceed To Checkout</button>
      </Link>
    </div>
  )
}

export default CartTotal