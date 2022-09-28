import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearCart, decreaseCart, getTotal, increaseCart, removeCart } from "../../slice/cartSlice";

const ShopppingCart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  const handleRemoveCart = (cartItem) => {
    dispatch(removeCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(increaseCart(cartItem));
  };

  const hanleClearCart = () => {
    dispatch(clearCart());
  };

  if (cart.cartItems.length === 0) {
    return <div>Giỏ hàng của bạn trống</div>;
  } else {
    return (
      <>
        <div className="container w-full h-full">
          <div className="flex shadow-md ">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between ">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="font-semibold text-2xl">Items in Shopping Cart</h1>
                <span className="font-semibold text-2xl">{cart.cartItems.length}</span>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
              </div>

              {/* ----------------------------Map-item------------------- */}
              {cart.cartItems &&
                cart?.cartItems?.map((item, index) => (
                  <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={index + 1}>
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img className="h-24" src={item.img} alt />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{item.name}</span>
                        <NavLink
                          href="#"
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                          onClick={() => handleRemoveCart(item)}
                        >
                          Remove
                        </NavLink>
                      </div>
                    </div>

                    <div className="flex justify-center w-1/5">
                      <Button type="primary" onClick={() => handleDecreaseCart(item)}>
                        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                      </Button>
                      <input type="number" min={1} value={item.quantity} className="text-center w-20" />
                      <Button type="danger" onClick={() => handleIncreaseCart(item)}>
                        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                      </Button>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">{item.price}</span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      {(item.quantity * item.price).toLocaleString("vi-VN")} <u>đ</u>
                    </span>
                  </div>
                ))}
              <NavLink to={"/"} className="flex font-semibold text-indigo-600 text-sm mt-10">
                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </NavLink>
            </div>
            <div id="summary" className="w-1/4 px-8 py-10 bg-red-500">
              <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Total Items</span>
                <span className="font-semibold text-sm">{cart.cartItems.length}</span>
              </div>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Tax</span>
                <span className="font-semibold text-sm">
                  {cart.cartThue.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="py-10">
                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
                  Promo Code
                </label>
                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>
                    {cart.cartTotal.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ShopppingCart;
