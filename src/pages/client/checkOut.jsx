import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTotal, removeCart } from "../../slice/cartSlice";
import { addToOrder } from "../../slice/checkOutSlice";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);
  const handleRemoveCart = (cartItem) => {
    const cf = window.confirm("Bạn có muốn xóa sản phẩm");
    if (cf) {
      dispatch(removeCart(cartItem));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const infoOrder = {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      city: data.city,
      district: data.district,
      street: data.street,
      address: data.address,
      notes: data.notes,
    };
    const totalPrice = cart.cartTotal;
    const orderItems = cart.cartItems;
    const order = { infoOrder, orderItems, totalPrice };
    localStorage.getItem("order", JSON.stringify(order));
    dispatch(addToOrder(order));
    console.log("1234", order);
  };
  return (
    <div>
      <div className="pb-10 ">
        <div className="mt-20 lg: mt-10">
          <h1 className="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
            Thanh Toán Đơn Hàng
          </h1>
        </div>
        {cart.cartItems.length === 0 && (
          <div className="my-10 text-lg text-center">
            <span className="">Không có sản phẩm ở giỏ hàng để thanh toán</span>
            <NavLink className="px-1 text-blue-700" to="/">
              Mua hàng
            </NavLink>
          </div>
        )}
        {cart.cartItems.length !== 0 && (
          <div className="container p-12 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
              <div className="flex flex-col md:w-full">
                <h2 className="mb-4 font-bold md:text-xl text-heading ">Thông tin giao hàng</h2>
                <form className="justify-center w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-input">
                    <div className="space-x-0 lg:flex lg:space-x-4">
                      <div className="w-full">
                        <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">
                          Họ Tên
                        </label>
                        <input
                          type="text"
                          placeholder="Họ"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                          {...register("fullName", { required: true })}
                        />
                        {errors.fullName && errors.fullName.type === "required" && (
                          <span className="text-red-500 text-lg font-lg">không được bỏ trống trường</span>
                        )}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="w-full">
                        <label htmlFor="Email" className="block mb-3 text-sm font-semibold text-gray-500">
                          Email
                        </label>
                        <input
                          type="text"
                          placeholder="Email"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                          {...register("email", { required: true })}
                        />
                        {errors.email && errors.email.type === "required" && (
                          <span className="text-red-500 text-lg font-lg">không được bỏ trống trường</span>
                        )}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="w-full">
                        <label htmlFor="Email" className="block mb-3 text-sm font-semibold text-gray-500">
                          Số điện thoại
                        </label>
                        <input
                          type="number"
                          placeholder="Số điện thoại"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                          {...register("phoneNumber", { required: true })}
                        />
                        {errors.phoneNumber && errors.phoneNumber.type === "required" && (
                          <span className="text-red-500 text-lg font-lg">không được bỏ trống trường</span>
                        )}
                      </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4 mt-4">
                      <div className="w-full lg:w-1/2">
                        <label htmlFor="city" className="block mb-3 text-sm font-semibold text-gray-500">
                          Thành Phố
                        </label>
                        <input
                          type="text"
                          placeholder="Thành Phố "
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                          {...register("city", { required: true })}
                        />
                        {errors.city && errors.city.type === "required" && (
                          <span className="text-red-500 text-lg font-lg">không được bỏ trống trường</span>
                        )}
                      </div>
                      <div className="w-full lg:w-1/2 ">
                        <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                          Quận / Huyện
                        </label>
                        <input
                          type="text"
                          placeholder="Quận / Huyện"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                          {...register("district", { required: true })}
                        />
                        {errors.district && errors.district.type === "required" && (
                          <span className="text-red-500 text-lg font-lg">không được bỏ trống trường</span>
                        )}
                      </div>
                      <div className="w-full lg:w-1/2 ">
                        <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                          Phường / Xã
                        </label>
                        <input
                          type="text"
                          placeholder="Phường / Xã"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                          {...register("street", { required: true })}
                        />
                        {errors.street && errors.street.type === "required" && (
                          <span className="text-red-500 text-lg font-lg">không được bỏ trống trường</span>
                        )}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="w-full">
                        <label htmlFor="Address" className="block mb-3 text-sm font-semibold text-gray-500">
                          Thông tin địa chỉ
                        </label>
                        <textarea
                          className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                          cols={20}
                          rows={4}
                          placeholder="Ngõ, ngách, số nhà...."
                          {...register("address", { required: true })}
                        />
                        {errors.address && errors.address.type === "required" && (
                          <span className="text-red-500 text-lg font-lg">không được bỏ trống trường</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <label className="flex items-center text-sm group text-heading">
                        <input
                          type="checkbox"
                          className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                        />
                        <span className="ml-2">Lưu thông tin cho lần mua hàng tiếp theo</span>
                      </label>
                    </div>
                    <div className="relative pt-3 xl:pt-6">
                      <label htmlFor="note" className="block mb-3 text-sm font-semibold text-gray-500">
                        Ghi chú
                      </label>
                      <textarea
                        className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                        rows={4}
                        placeholder="Ghi chú"
                        {...register("notes")}
                      />
                    </div>
                    <div className="mt-4">
                      <button className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">
                        Thanh toán
                      </button>
                    </div>
                  </div>
                </form>

                {/* sản phẩm */}
              </div>
              <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                <div className="pt-12 md:pt-0 2xl:ps-4">
                  <h2 className="text-xl font-bold">Giỏ hàng có {cart.cartItems.length} sản phẩm</h2>
                  <div className="mt-8">
                    <div className="flex flex-col space-y-4">
                      {cart.cartItems?.map((item, index) => (
                        <div className="flex space-x-4 " key={index}>
                          <div>
                            <img src={item.img} alt="image" className="w-60" />
                          </div>
                          <div>
                            <h2 className="text-lg font-bold">{item.name}</h2>
                            <div className="flex justify-between">
                              <span className="text-lg font-bold text-red-600">{item.price}</span>
                              <span className="font-bold">x {item.quantity}</span>
                            </div>
                          </div>
                          <div>
                            <button onClick={() => handleRemoveCart(item)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex p-4 mt-4"></div>
                  <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Giá tiền<span className="ml-2 text-lg">{cart.cartTotal}</span>
                  </div>
                  <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Ship<span className="ml-2 text-lg">$10</span>
                  </div>
                  <div className="flex items-center w-full py-4 text-2xl font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Tổng tiền:<span className="ml-2 text-red-500">{cart.cartTotal} VNĐ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
