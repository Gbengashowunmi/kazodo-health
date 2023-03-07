import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Carousel from "./components/carousel/Carousel";
// import LandingPage from "./pages/landing/LandingPage";
import ProductDetail from "./pages/productDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductDetail />} />
          {/* <Route path="/products/:id" element={</>} /> */}
        </Routes>
      </BrowserRouter>
      {/* <LandingPage /> */}

      {/* <Carousel/> */}
    </div>
  );
}

export default App;
