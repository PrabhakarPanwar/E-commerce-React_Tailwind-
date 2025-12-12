import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import ProductItems from '../components/ProductItems';

const CollectionPractice = () => {
    const { products } = useContext(UserContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [category, setCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');

    // const toggleCategory = (e) => {
    //     const value = e.target.value;
    //     setCategory((prev) =>
    //         prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    //     );
    // };

    const CategorySave = (e) => {
        const v = e.target.value
        console.log(v)
        setCategory(i => i.includes(v) ? i.filter(it => it !== v) : [...i, v])
    }



    useEffect(() => {
        let updatedProducts = products;

        if (category.length > 0) {
            // updatedProducts = updatedProducts.filter((product) =>
            //     category.includes(product.category)
            // );
            updatedProducts =updatedProducts.filter(i=>category.includes(i.category))
            console.log(category)
            console.log("new ",updatedProducts)
        }


        setFilteredProducts(updatedProducts);
    }, [category, products]);

    return (
        <div className='flex justify-center gap-10 my-4'>
            <div className=''>
                <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                    <label>
                        <input type="checkbox" className='w-3' value="Men" onChange={CategorySave} /> Men
                    </label>
                    <label>
                        <input type="checkbox" className='w-3' value="Women" onChange={CategorySave} /> Women
                    </label>
                    <label>
                        <input type="checkbox" className='w-3' value="Kids" onChange={CategorySave} /> Kids
                    </label>
                </div>
                <div className="border border-gray-300 pl-5 py-3 my-5">
                    <p className='mb-3 text-sm font-medium'>SEARCH</p>
                    <input
                        type="text"
                        className='w-full px-2 py-1 border border-gray-400'
                        placeholder='Search products...'

                    />
                </div>
                <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                    <label>
                        <input type="checkbox" className='w-3' value="Topwear" /> Topwear
                    </label>
                    <label>
                        <input type="checkbox" className='w-3' value="Bottomwear" /> Bottomwear
                    </label>
                    <label>
                        <input type="checkbox" className='w-3' value="Winterwear" /> Winterwear
                    </label>
                </div>
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    {/* Sorting Dropdown */}
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className='border-2 border-gray-300 text-sm px-2'>
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <ProductItems id={product._id} name={product.name} image={product.image} price={product.price} />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div >
    )
}
export default CollectionPractice
