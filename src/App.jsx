import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import WebsiteLayout from "./Layout/WebsiteLayout";
import HomePage from "./pages/client/homePage/HomePage";
import ShopppingCart from "./pages/client/shoppingCart";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from "./pages/client/productDetail";
import { ToastContainer } from "react-toastify";
import AdminLayout from "./Layout/adminLayout";
import CheckOut from "./pages/client/checkOut";
import ProductPage from "./pages/client/Products/productPage";
import Page404 from "./pages/404";
import AddProducts from "./pages/admin/products/addProducts";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/iphone" element={<ProductPage />} />
          <Route path="/mac" element={<h1>MacBook page</h1>} />
          <Route path="/imac" element={<h1>Imac page</h1>} />
          <Route path="/apple-watch" element={<h1>Apple Watch</h1>} />
          <Route path="/phu-kien" element={<h1>Phu kien page</h1>} />
          <Route path="/tin-tuc" element={<h1>Tin Tuc</h1>} />
          <Route path="/dich-vu" element={<h1>Dich vu</h1>} />
          <Route path="/cart" element={<ShopppingCart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
        {/* Router cart */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
          <Route path="products">
            <Route path="add" element={<AddProducts />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
