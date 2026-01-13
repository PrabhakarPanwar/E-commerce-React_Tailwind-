import React, { useContext } from 'react'
import ProductItems from './ProductItems'
import { UserContext } from '../context/UserContext'

function RelatedProducts() {
    const { products } = useContext(UserContext)
    return (
        <div className='my-8'>
            <p className='text-center text-xl'><strong>RELATED PRODUCTS</strong></p>
            <div className='flex flex-wrap justify-center gap-3 my-8'>
                {products.map((i) => (
                    <ProductItems key={i.id} id={i.id} image={i.image[0]} price={i.price} name={i.name} />
                )).slice(0, 5)}

            </div>
        </div>
    )
}

export default RelatedProducts