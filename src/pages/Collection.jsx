import React, { useContext, useState } from "react";
import ProductItems from "../components/ProductItems";
import { UserContext } from "../context/UserContext";

function Collection() {
  const { products } = useContext(UserContext);
// done
  const [inputVal, setInputVal] = useState("");
  const [selectVal, setSelectVal] = useState("low");

  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [kids, setKids] = useState(false);
  const [topwear, setTopwear] = useState(false);
  const [bottomwear, setBottomwear] = useState(false);
  const [winterwear, setWinterwear] = useState(false);

  const filteredProducts = products
    .filter((i) => {

      const matchesSearch = i.name.toLowerCase().includes(inputVal.toLowerCase());


      const matchesCategory =
        (!men && !women && !kids) ||
        (men && i.category.toLowerCase() === "men") ||
        (women && i.category.toLowerCase() === "women") ||
        (kids && i.category.toLowerCase() === "kids");


      const matchesSubCategory =
        (!topwear && !bottomwear && !winterwear) ||
        (topwear && i.subCategory.toLowerCase() === "topwear") ||
        (bottomwear && i.subCategory.toLowerCase() === "bottomwear") ||
        (winterwear && i.subCategory.toLowerCase() === "winterwear");

      return matchesSearch && matchesCategory && matchesSubCategory;
    })
    .sort((a, b) => {
      if (selectVal === "high") return b.price - a.price;
      if (selectVal === "low") return a.price - b.price;
      return 0;
    });

  return (
    <div className="flex justify-center my-10">
      <div className="flex justify-center">

        <div className="flex flex-col gap-5">
          <p><strong className="">FILTER</strong></p>
          <button className="sm:hidden bg-black text-white">FILTER</button>


          <div className="flex flex-col border p-3">
            <p className="p-1"><strong>CATEGORIES</strong></p>
            <label className="text-gray-600">
              <input type="checkbox" checked={men} onChange={(e) => setMen(e.target.checked)} /> Men
            </label>
            <label className="text-gray-600">
              <input type="checkbox" checked={women} onChange={(e) => setWomen(e.target.checked)} /> Woman
            </label>
            <label className="text-gray-600">
              <input type="checkbox" checked={kids} onChange={(e) => setKids(e.target.checked)} /> Kids
            </label>
          </div>


          <div className="border p-3">
            <p className="p-1"><strong>SEARCH</strong></p>
            <input
              className="border p-1"
              type="text"
              placeholder="Search products..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
          </div>


          <div className="flex flex-col border p-3">
            <p className="p-1"><strong>SUB-CATEGORIES</strong></p>
            <label className="text-gray-600">
              <input type="checkbox" checked={topwear} onChange={(e) => setTopwear(e.target.checked)} /> Topwear
            </label>
            <label className="text-gray-600">
              <input type="checkbox" checked={bottomwear} onChange={(e) => setBottomwear(e.target.checked)} /> Bottomwear
            </label>
            <label className="text-gray-600">
              <input type="checkbox" checked={winterwear} onChange={(e) => setWinterwear(e.target.checked)} /> Winterwear
            </label>
          </div>
        </div>


        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center px-3">
            <p>ALL <strong>COLLECTIONS</strong></p>
            <select
              className="border w-32 p-1"
              value={selectVal}
              onChange={(e) => setSelectVal(e.target.value)}
            >
              <option value="high">High to Low</option>
              <option value="low">Low to High</option>
            </select>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {filteredProducts.map((i) => (
              <ProductItems id={i.id} image={i.image[0]} price={i.price} name={i.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;