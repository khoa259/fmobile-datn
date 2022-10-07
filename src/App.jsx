import "./App.css";
import { Suspense, lazy } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import WebsiteLayout from "./Layout/client/WebsiteLayout";
import HomePage from "./pages/client/homePage/HomePage";
import ShopppingCart from "./pages/client/shoppingCart";
import ProductDetail from "./pages/client/productDetail";
import AdminLayout from "./Layout/admin/adminLayout";
import CheckOut from "./pages/client/checkOut";
import ProductPage from "./pages/client/Products/productPage";
import Page404 from "./pages/404";
import AddProducts from "./pages/admin/products/addProducts";
import ListProducts from "./pages/admin/products/listProduct";
import Loading from "./components/loading";
import UpdateProduct from "./pages/admin/products/updateProduct";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Suspense fallback={<Loading />}>
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
              <Route index element={<ListProducts />} />
              <Route path="add" element={<AddProducts />} />
              <Route path=":id/edit" element={<UpdateProduct />} />
            </Route>
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
