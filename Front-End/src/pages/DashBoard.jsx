import React, { useState } from 'react'
import AddProduct from '../components/AddProduct'
import ListProduct from '../components/ListProduct'
import OrderProduct from '../components/OrderProduct'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";

function DashBoard() {
    const [tab, setTab] = useState("add")

    async function verification() {
        let token = window.localStorage.getItem("token")
        console.log(token)
        let res = await axios.get("https://e-commerce-backend-kgrj.onrender.com/verify", {
            headers: { token },
        })
        if (res.data.success) {
            toast.success(res.data.msg)
        }
        if (!res.data.success) {
            toast.error(res.data.msg)
            setTimeout(() => {
                window.location.href = "/"
            }, 1500)
        }
    }
    useEffect(() => {
        verification()
    }, [])
    return (
        <div className='flex justify-center'>
            <section className='w-[15%] flex-col gap-4'>
                <p onClick={() => setTab("add")} className='cursor-pointer border-y-2 p-2'>Add Items</p>
                <p onClick={() => setTab("list")} className='cursor-pointer border-y-2 p-2'>List Items</p>
                <p onClick={() => setTab("order")} className='cursor-pointer border-y-2 p-2'>Order Items</p>
            </section>
            <section className='w-[85%]'>
                {tab == "add" && <AddProduct />}
                {tab == "list" && <ListProduct />}
                {tab == "order" && <OrderProduct />}

            </section>

        </div>
    )
}

export default DashBoard