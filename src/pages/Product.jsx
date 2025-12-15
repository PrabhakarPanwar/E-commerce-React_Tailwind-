import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useParams } from 'react-router-dom'
import ProductItems from '../components/ProductItems'

function Product() {
    const { products, assets } = useContext(UserContext)
    const [productData, setProductData] = useState(false)
    const [size, setSize] = useState("")
    const [image, setImage] = useState("")
    const { id } = useParams()

    const fetchData = () => {
        const pro = products.find((e) => e.id === id)
        if (pro) {
            setProductData(pro)
            setImage(pro.image[0])
        }
    }

    useEffect(() => {
        fetchData()
    }, [products, id])
    return productData ? (
        <div>
            <div className='flex justify-center'>
                <div className='flex gap-10'>
                    <div className='flex gap-3 flex-1'>
                        <div className='flex flex-col gap-2'>
                            {productData.image.map((i, index) => (
                                <img onClick={() => setImage(i)} src={i} className="w-20 h-25 cursor-pointer" key={index} />
                            ))}
                        </div>
                        <div className=''>
                            <img className='h-[70vh]' src={image} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col flex-1 gap-5'>
                        <h1 className='text-xl'><strong>{productData.name}</strong></h1>
                        <div className='flex gap-1 items-center'>
                            <img className='w-4 h-4' src={assets.star_icon} alt={productData.name} />
                            <img className='w-4 h-4' src={assets.star_icon} alt={productData.name} />
                            <img className='w-4 h-4' src={assets.star_icon} alt={productData.name} />
                            <img className='w-4 h-4' src={assets.star_icon} alt={productData.name} />
                            <img className='w-4 h-4' src={assets.star_dull_icon} alt={productData.name} />
                            <p>({productData.rating})</p>
                        </div>
                        <p className='text-2xl'><strong>${productData.price}</strong></p>
                        <p className='w-[70%]'>{productData.description}</p>
                        <strong>Select Size</strong>
                        <button className='bg-black text-white w-[30%] py-3'>ADD TO CART</button>
                    </div>
                </div>
            </div>
            {/* cards end here */}
            <div className='my-8'>
                <p className='text-center text-xl'><strong>RELATED PRODUCTS</strong></p>
                <div className='flex gap-3 my-8'>
                    {products.map((i) => (
                        <ProductItems id={i.id} image={i.image[0]} price={i.price} name={i.name} />
                    )).slice(0, 5)}

                </div>
            </div>
        </div>
    ) : (<h1>No Product Found</h1>)
}

export default Product