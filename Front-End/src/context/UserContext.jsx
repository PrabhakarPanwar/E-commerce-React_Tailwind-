import { createContext, useEffect, useState } from "react";
import { assets, header, products } from "../assets/frontend_assets/assets.js";

export const UserContext = createContext()

function UserProvider({ children }) {
    const [cartItem, setCartItem] = useState({})


    const addToCart = (id, size) => {
        if (!size) {
            return "Choose size"
        }
        let cartData = structuredClone(cartItem)
        if (cartData[id]) {
            if (cartData[id][size]) {
                cartData[id][size] += 1
            } else {
                cartData[id][size] = 1
            }
        } else {
            cartData[id] = {}
            cartData[id][size] = 1
        }
        // console.log(cartData)

        setCartItem(cartData)

        // console.log(cartItem)

    }


    const getTotalCount = () => {
        let totalCount = 0
        try {

            // let cartData = structuredClone(cartItem)
            for (let id in cartItem) {
                // console.log(id)
                for (let size in cartItem[id])
                    // console.log(size)
                    if (cartItem[id][size] > 0) {
                        // console.log("number of item ",cartItem[id][size])
                        totalCount += cartItem[id][size]

                    }
            }


            return totalCount
        }
        catch (error) {
            console.log(error)
        }
    }


    const getTotalAmount = () => {
        let totalAmount = 0;
        for (let id in cartItem) {
            let itemInfo = products.find(i => i.id == id)
            for (let s in cartItem[id]) {
                if (cartItem[id][s]) {
                    totalAmount += itemInfo.price * cartItem[id][s]
                }
            }
        }
        return totalAmount
    }


    const updateCart = (id, size, qty) => {
        let updateItem = structuredClone(cartItem)
        console.log(updateItem)
        console.log(`id ${id} size ${size} qty ${qty}`)
        updateItem[id][size] = qty
        setCartItem(updateItem)
        console.log(cartItem)
    }

    useEffect(() => {
        // console.log(cartItem)
        getTotalCount()
        getTotalAmount()
    }, [addToCart, getTotalAmount])
    const obj = {
        assets, products, header, addToCart, getTotalCount, cartItem, updateCart, getTotalAmount
    }
    return (
        <UserContext.Provider value={obj}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider