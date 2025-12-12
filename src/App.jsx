import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Collection33 from "./pages/Collection33";
import CollectionPractice from "./pages/CollectionPractice";
function App() {
  return (

    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collectionPrac" element={<CollectionPractice />} />
        <Route path="/collection33" element={<Collection33 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />

    </div>

  )
}

export default App