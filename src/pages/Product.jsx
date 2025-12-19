import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useParams } from 'react-router-dom'
import RelatedProducts from '../components/RelatedProducts'

function Product() {
    const { products, assets, addToCart } = useContext(UserContext)
    const [productData, setProductData] = useState(false)
    const [size, setSize] = useState("");
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
                        <div>
                            {productData.sizes.map((i) => (
                                <button key={i} className={`outline-none border-2 h-10 w-10 mr-2 bg-gray-100 ${i == size ? "border-orange-500" : ""}`} onClick={() => setSize(i)} >{i}</button>
                            ))}
                        </div>
                        <button onClick={() => addToCart(productData.id, size)} className='bg-black text-white w-[30%] py-3'>ADD TO CART</button>
                        <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                            <p>100% original product.</p>
                            <p>Cash on delivery is available on this product.</p>
                            <p>Easy return and exchange policy within 7 days</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <div className="flex">
                    <p className="border px-5 py-3 text-sm">Description</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 border p-6 text-sm text-gray-500">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla optio
                    voluptatibus nemo consequatur illum a rem unde obcaecati dolore
                    deleniti impedit recusandae ipsum, harum incidunt? Recusandae quisquam
                    optio ab assumenda culpa amet, asperiores totam! Omnis expedita
                    molestiae, nisi labore exercitationem recusandae ullam! Corrupti, rem
                    inventore placeat cum facere nisi suscipit?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla optio
                    voluptatibus nemo consequatur illum a rem unde obcaecati dolore
                    deleniti impedit recusandae ipsum, harum incidunt? Recusandae quisquam
                    optio ab assumenda culpa amet, asperiores totam! Omnis expedita
                    molestiae, nisi labore exercitationem recusandae ullam! Corrupti, rem
                    inventore placeat cum facere nisi suscipit?
                </p>
            </div>
            {/* cards end here */}
            <RelatedProducts />
        </div>
    ) : (<h1>No Product Found</h1>)
}

export default Product