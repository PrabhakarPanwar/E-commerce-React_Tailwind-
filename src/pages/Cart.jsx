import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import CartItems from '../components/CartItems'
import CartTotal from '../components/CartTotal'

function Cart() {
  const { products, cartItem } = useContext(UserContext)
  const [productData, setProductData] = useState([])
  console.log(cartItem)
  useEffect(() => {
    let tempData = []
    for (let id in cartItem) {
      for (let size in cartItem[id]) {
        if (cartItem[id][size] > 0) {
          tempData.push({
            _id: id,
            size: size,
            quantity: cartItem[id][size]
          })
        }
      }
    }
    setProductData(tempData)

    // console.log(productData)
  }, [cartItem])
  return (
    <div>
      <p className='text-2xl mb-5'>Your <strong>Cart</strong></p>
      <div className='flex flex-wrap'>
        {
          productData.map((itemid, ind) => {
            let product = products.find((i) => i.id == itemid._id)
            console.log(product)

            return (
              <CartItems image={product.image[0]} id={product.id} name={product.name} price={product.price} size={itemid.size} qty={itemid.quantity} />

            )
          })
        }
      </div>
      <div className='flex justify-end my-10 '>
        <div className='w-[50%]'>
          <CartTotal button={"PROCEED TO CHECKOUT"} />
        </div>
      </div>
    </div>
  )
}

export default Cart