import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function BestSeller() {
  const { header } = useContext(UserContext)
  return (
    <div>
      <p className='text-center text-3xl my-3'>{header.best}</p>
      <p className='text-center text-lg text-gray-600'>{header.para}</p>
    </div>
  )
}

export default BestSeller