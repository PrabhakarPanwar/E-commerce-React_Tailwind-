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
import DashBoard from "./pages/DashBoard";
import PageNotFound from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-[70%] overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />

        <ToastContainer />

      </div>
    </div>

  )
}

export default App