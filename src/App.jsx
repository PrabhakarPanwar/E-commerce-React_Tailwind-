import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import PlaceOrder from "./pages/PlaceOrder";
import Login from "./pages/Login";
function App() {
  return (

    <div className="mx-auto w-[70%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />

    </div>

  )
}

export default App