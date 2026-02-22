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
            <Hero />
            <LatestCollection />
            <BestSeller />
            <OurPolicy />
            <NewsLetterBox />
        </div>
    )
}

export default Home