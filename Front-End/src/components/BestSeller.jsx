import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import ProductItems from './ProductItems'

function BestSeller() {
  const { header, products } = useContext(UserContext)
  return (
    <div className='py-5 flex flex-col justify-center items-center gap-3'>
      <p className='text-3xl '>{header.best}</p>
      <p className='text-lg text-gray-600'>{header.para}</p>

      <div className='flex flex-wrap justify-center gap-5'>

        {products.map((i, index) => (
          <ProductItems key={index} id={i.id} name={i.name} price={i.price} image={i.image[0]} />)).slice(10, 14)}
      </div>
    </div>
  )
}

export default BestSeller