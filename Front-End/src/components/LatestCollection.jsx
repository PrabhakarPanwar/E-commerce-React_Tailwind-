import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import ProductItems from './ProductItems'


function LatestCollection() {
  const { header, products } = useContext(UserContext)
  return (
    <div className='py-5 flex flex-col justify-center items-center gap-3'>
      <p className='text-3xl'>{header.latest}</p>
      <p className='text-lg text-gray-600'>{header.para}</p>
      <div className='flex flex-wrap justify-center gap-5 my-3'>
        {products.map((i, index) => (
          <ProductItems key={index} name={i.name} price={i.price} image={i.image[0]} id={i.id} />)).slice(0, 4)}
      </div>
    </div>
  )
}

export default LatestCollection