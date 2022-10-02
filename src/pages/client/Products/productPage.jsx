import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Select } from "antd";
import { getProducts } from "../../../slice/productSlice";

const { Option } = Select;

const ProductPage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(getProducts())
      .unwrap()
      .then((value) => {
        setProducts(value);
      })
      .catch((err) => {});
  }, [dispatch]);
  return (
    <div>
      <div className="py-16">
        <h1 className="text-center text-4xl font-medium">iPhone</h1>
      </div>
      <div className="">
        <div className=" border-gray-200 border border-gray-200/50 mx-auto rounded-xl lg:max-w-7xl mb-32 drop-shadow">
          <div className="p-8 flex justify-end">
            <span className="pr-2 text-lg"> Sắp xếp theo:</span>
            <Select defaultValue="Tất cá" style={{ width: 150 }}>
              <Option value="">Bán chạy nhất</Option>
              <Option value="">Giá thấp đến cao</Option>
              <Option value="">Giá cao đến thấp</Option>
            </Select>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-10">
            {products &&
              products?.map((prd, index) => (
                <div className="px-16 mt-4" key={index}>
                  <NavLink to={`/products/${prd.id}`}>
                    <div className=" mx-0 overflow-hidden hover:scale-105 duration-300">
                      <img
                        src={prd.img}
                        alt="#"
                        className="h-80 object-cover object-center group-hover:opacity-75 mx-auto"
                      />
                    </div>
                    <div className="flex justify-center mt-4 ">
                      <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                      <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                      <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none" />
                    </div>
                    <h3 className="mt-3 text-center text-2xl font-bold text-gray-700">{prd.name}</h3>
                  </NavLink>
                  <div className="mx-auto w-fit cursor-pointer mt-4">
                    <ul className="bg-gray-200 rounded-md">
                      <li className="px-5 py-2 inline-block hover:bg-gray-600 duration-300 rounded-md hover:text-white">
                        <strong>128GB</strong>
                      </li>
                      <li className="px-5 py-2 inline-block hover:bg-gray-600 duration-300 rounded-md hover:text-white">
                        <strong>256GB</strong>
                      </li>
                      <li className="px-5 py-2 inline-block hover:bg-gray-600 duration-300 rounded-md hover:text-white">
                        <strong>512GB</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-xl text-gray-600 pr-2">Giá chỉ</span>
                    <span className="mt-1 text-xl font-medium text-red-500">{prd.price} đ</span>
                  </div>
                  <div className="text-center mt-5">
                    <Link
                      className="mt-8 py-2 px-6 text-lg border-2 w-48 rounded-md hover:bg-gray-500 hover:text-white duration-500"
                      to={`/products/${prd.id}`}
                    >
                      XEM CHI TIẾT
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
