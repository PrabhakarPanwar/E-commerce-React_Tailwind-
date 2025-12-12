import React from 'react'

function ProductItems(props) {
  return (
    <div>
      <div className='flex flex-col gap-2 w-[200px]'>
        <img className='w-[200px] h-[250px]' src={props.image} alt="" />
        <p>{props.name}</p>
        <p>${props.price}</p>
      </div>
    </div>
  )
}

export default ProductItems