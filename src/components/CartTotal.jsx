import React from 'react'
import { Link } from 'react-router-dom'

function CartTotal(props) {
  return (
    <div className=''>
      <p className='my-2 text-2xl uppercase'>Cart <strong>total</strong></p>
      <div className='flex py-2 justify-between border-b-2'>
        <p>Subtotal</p>
        <p>${ }</p>
      </div>
      <div className='flex py-2 justify-between border-b-2'>
        <p>Shipping Fee</p>
        <p>${ }</p>
      </div>
      <div className='flex py-2 justify-between '>
        <p><strong>Total</strong></p>
        <p>${ }</p>
      </div>
      <div>
        <p className='my-2 text-xl uppercase'>Payment <strong>Method</strong></p>
        <div className='flex gap-3'>
          <img className='border cursor-pointer px-8 py-1' src={props.razor} alt="" />
          <img className='border cursor-pointer px-8 py-1' src={props.stripe} alt="" />
          <p className='border cursor-pointer px-8 py-1 text-sm'>{props.cod}</p>
        </div>
      </div>
      <Link to="/placeOrder" className='flex justify-end mt-4 mr-3'>
        <button className='bg-black uppercase font-semibold text-white w-[45%] py-3'>{props.button}</button>
      </Link>
    </div>
  )
}

export default CartTotal