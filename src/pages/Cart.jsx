import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import CartItems from '../components/CartItems'
import CartTotal from '../components/CartTotal'

function Cart() {
  const { products } = useContext(UserContext)
  return (
    <div>
      <p className='text-2xl mb-5'>Your <strong>Cart</strong></p>
      <div className='flex flex-wrap'>
        {products.map((i =>
          <CartItems image={i.image[0]} id={i.id} name={i.name} price={i.price} size={i.sizes} />
        )).slice(0, 3)} </div>
      <div className='flex justify-end my-10 '>
        <div className='w-[50%]'>
          <CartTotal button={"PROCEED TO CHECKOUT"}/>
        </div>
      </div>
    </div>
  )
}

export default Cart