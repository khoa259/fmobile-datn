import "./App.css";
import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "./Layout/WebsiteLayout";
import HomePage from "./pages/client/HomePage";
import ShopppingCart from "./pages/client/shoppingCart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/iphone" element={<h1>Iphone Page</h1>} />
          <Route path="/mac" element={<h1>MacBook page</h1>} />
          <Route path="/imac" element={<h1>Imac page</h1>} />
          <Route path="/apple-watch" element={<h1>Apple Watch</h1>} />
          <Route path="/phu-kien" element={<h1>Phu kien page</h1>} />
          <Route path="/tin-tuc" element={<h1>Tin Tuc</h1>} />
          <Route path="/dich-vu" element={<h1>Dich vu</h1>} />
        </Route>
        {/* Router cart */}
        <Route path="/cart" element={<ShopppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
