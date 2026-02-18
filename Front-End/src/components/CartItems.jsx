import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function CartItems(props) {
    const { assets,updateCart } = useContext(UserContext)
    console.log(props)
    return (
        <div className='flex items-center w-full justify-between border-y-2 py-5 px-2'>
            <div className='flex items-center gap-5 w-[40%]'>
                <div>
                    <img className="h-24 w-15" src={props.image} alt={props.name} />
                </div>
                <div className='font-medium'>
                    <p className='mb-4'>{props.name}</p>
                    <div className='flex gap-5'>
                        <p>${props.price}</p>
                        <p><strong>Size  -  </strong>{props.size}</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <input onChange={(e)=>updateCart(props.id,props.size,Number(e.target.value))} className='border text-center w-14' type="number" min={0} defaultValue={props.qty} />
            </div>
            <div className=''>
                <button onClick={()=>updateCart(props.id,props.size,0)} className='h-5 w-5'><img src={assets.bin_icon} alt="" /></button>
            </div>
        </div>
    )
}

export default CartItems