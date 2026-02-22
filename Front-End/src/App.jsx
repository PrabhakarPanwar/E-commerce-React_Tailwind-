import { Route, Routes, useLocation } from "react-router-dom";
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
import DashBoard from "./pages/DashBoard";
import PageNotFound from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";
function App() {
  const { pathname } = useLocation()
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/admin/dashboard" element={<DashBoard />} />
      </Routes>
      <div className="mx-auto w-[70%] overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <ToastContainer />
        {pathname !== "/login" ? (<Footer />) : ""}

      </div>
    </div>

  )
}

export default App