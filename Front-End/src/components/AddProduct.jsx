import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import axios from "axios"

function AddProduct() {

    //Product Image

    const [img1, setImg1] = useState(false)
    const [img2, setImg2] = useState(false)
    const [img3, setImg3] = useState(false)
    const [img4, setImg4] = useState(false)


    //Product 

    const [name, setName] = useState('')
    const [desc, setDesc] = useState("")

    //Category

    const [cat, setCat] = useState("")
    const [subCat, setSubCat] = useState("")

    const [price, setPrice] = useState("")
    const [sizes, setSizes] = useState([])

    const toggleSize = (i) => {
        setSizes((back) =>
            back.includes(i) ? back.filter((s) => s !== i) : [...back, i]
        )
    }
    async function dataSend(e) {
        e.preventDefault()
        let formData = new FormData()
        console.log(name)
        formData.append("Name", name)
        formData.append("Description", desc)
        formData.append("Category", cat)
        formData.append("SubCategory", subCat)
        formData.append("Price", price)
        formData.append("Size", JSON.stringify(sizes))
        img1 && formData.append("img1", img1)
        img2 && formData.append("img2", img2)
        img3 && formData.append("img3", img3)
        img4 && formData.append("img4", img4)
        console.log(formData)
        try {
            let res = await axios.post("http://localhost:8000/dashboard", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <main className='flex bg-gray-100 border-gray-500 border-b-2'>
            <section className='w-[15%] flex flex-col gap-4'>
                <p className='cursor-pointer border-y-2 p-2'>Add Items</p>
                <p className='cursor-pointer border-y-2 p-2'>List Items</p>
                <p className='cursor-pointer border-y-2 p-2'>Order Items</p>
            </section>
            <section className='w-[70%] border-gray-500 border-l-2 pl-10'>
                <form className='py-3' onSubmit={dataSend}>
                    <p>Upload Images</p>
                    <div className="flex gap-4">
                        <label htmlFor="img1">
                            <img className='cursor-pointer w-20 object-cover h-20' src={`${img1 ? URL.createObjectURL(img1) : assets.upload}`} alt="" />
                            <input className='hidden' type="file" name="" id="img1" accept='image/*' onChange={(i) => setImg1(i.target.files[0])} />
                        </label>
                        <label htmlFor="img2">
                            <img className='cursor-pointer w-20 object-cover h-20' src={`${img2 ? URL.createObjectURL(img2) : assets.upload}`} alt="" />
                            <input className='hidden' type="file" name="" id="img2" accept='image/*' onChange={(i) => setImg2(i.target.files[0])} />
                        </label>
                        <label htmlFor="img3">
                            <img className='cursor-pointer w-20 object-cover h-20' src={`${img3 ? URL.createObjectURL(img3) : assets.upload}`} alt="" />
                            <input className='hidden' type="file" name="" id="img3" accept='image/*' onChange={(i) => setImg3(i.target.files[0])} />
                        </label>
                        <label htmlFor="img4">
                            <img className='cursor-pointer w-20 object-cover h-20' src={`${img4 ? URL.createObjectURL(img4) : assets.upload}`} alt="" />
                            <input className='hidden' type="file" name="" id="img4" accept='image/*' onChange={(i) => setImg4(i.target.files[0])} />
                        </label>
                    </div>
                    <p>Product Name</p>
                    <input className='p-2 w-[60%] border-gray-300 border-2' type="text" placeholder='Type Here' onChange={(i) => setName(i.target.value)} />
                    <p>Product Description</p>
                    <textarea className='p-2 w-[60%] border-gray-300 border-2' name="" id="" placeholder='Type Here' onChange={(i) => setDesc(i.target.value)} cols="50"></textarea>
                    <div className='flex gap-5'>
                        <section>
                            <p>Product Category</p>
                            <select className='p-2 border-gray-300 border-2' name="" id="" onChange={(i) => setCat(i.target.value)}>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="kid">Kid</option>
                            </select>
                        </section>
                        <section>
                            <p>Product Sub-Category</p>
                            <select className='p-2 border-gray-300 border-2' name="" id="" onChange={(i) => setSubCat(i.target.value)}>
                                <option value="topwear">Topwear</option>
                                <option value="bottomwear">Bottomwear</option>
                                <option value="upperware">Upperware</option>
                            </select>
                        </section>
                        <section>
                            <p>Price</p>
                            <input className='w-[50%] border-gray-300 border-2 p-2' type="text" name="" id="" onChange={(i) => setPrice(i.target.value)} />
                        </section>
                    </div>
                    <p>Product Sizes</p>
                    <div className='flex gap-3 pb-5'>
                        {["S", "M", "L", "XL", "XXL"].map((i, index) => (
                            <div key={index} onClick={() => toggleSize(i)} className={`w-10 h-10 flex items-center justify-center ${sizes.includes(i) ? "bg-gray-400" : ""} `}>
                                <p>{i}</p>
                            </div>
                        ))}
                    </div>
                    <button className='px-10 py-3 bg-black text-white' type="submit" >Add</button>

                </form>
                <form></form>
                <form></form>
            </section>
        </main>
    )
}

export default AddProduct