import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import BestSeller from '../components/BestSeller'
import ProductItems from '../components/ProductItems'
import NewsLetterBox from '../components/NewsLetterBox'

function Home() {
    const { products } = useContext(UserContext)
    return (
        <div>
            <div className='flex flex-col gap-3 my-3'>
                <Hero />

                <LatestCollection />

                <div className='flex justify-center'>
                    <div className='flex flex-wrap justify-center gap-3 my-3 w-[80%]'>

                        {products.map((i) => (
                            <ProductItems name={i.name} price={i.price} image={i.image} />)).slice(0, 10)}
                    </div >
                </div>
            </div>
            <div className='flex flex-col gap-3 my-3'>

                <BestSeller />

                <div className='flex justify-center'>
                    <div className='flex flex-wrap justify-center gap-3 my-3 w-[80%]'>

                        {products.map((i) => (
                            <ProductItems name={i.name} price={i.price} image={i.image} />)).slice(10, 15)}
                    </div >
                </div>
            </div>
            <OurPolicy />
            <NewsLetterBox/>
        </div>
    )
}

export default Home