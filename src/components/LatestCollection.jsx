import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function LatestCollection() {
  const { header } = useContext(UserContext)
  return (
    <div>
      <p className='text-center text-3xl my-3'>{header.latest}</p>
      <p className='text-center text-lg text-gray-600'>{header.para}</p>
    </div>
  )
}

export default LatestCollection