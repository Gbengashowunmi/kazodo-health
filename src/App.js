import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTopNav from "./components/ScrollToTopNav";
// import Carousel from "./components/carousel/Carousel";
import LandingPage from "./pages/landing/LandingPage";
import ProductDetail from "./pages/productDetail/ProductDetail";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* scroll to top of the page on new page  */}
      <ScrollToTopNav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
      {/* <LandingPage /> */}

      {/* <Carousel/> */}
    </div>
  );
}

export default App;
