import React from 'react'
import { Link } from 'react-router-dom'

function ProductItems(props) {
  return (
    <Link to={`/product/${props.id}`}>
      <div className='flex flex-col gap-2 p-2 w-[250px] h-[350px] hover:shadow-xl rounded-lg'>
        <img className='w-full rounded-lg h-[250px] ' src={props.image} alt="" />
        <p>{props.name}</p>
        <p>${props.price}</p>
      </div>
    </Link>
  )
}

export default ProductItems