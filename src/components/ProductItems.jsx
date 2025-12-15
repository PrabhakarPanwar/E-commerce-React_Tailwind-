import React from 'react'
import { Link } from 'react-router-dom'

function ProductItems(props) {
  return (
    <Link to={`/product/${props.id}`}>
      <div className='flex flex-col gap-2 w-[200px]'>
        <img className='w-[200px] h-[250px]' src={props.image} alt="" />
        <p>{props.name}</p>
        <p>${props.price}</p>
      </div>
    </Link>
  )
}

export default ProductItems