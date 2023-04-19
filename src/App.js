import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import ScrollToTopNav from "./components/ScrollToTopNav";
// import Carousel from "./components/carousel/Carousel";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/login_Sign/Login";
import SignUp from "./pages/login_Sign/SignUp";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Sell from "./pages/sellOnKazodo/Sell";
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
          <Route path="/sell-on-kazodo" element={<Sell />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* <LandingPage /> */}
      <ToastContainer />

      {/* <Carousel/> */}
    </div>
  );
}

export default App;
