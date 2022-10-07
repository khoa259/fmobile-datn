import { PlusOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../../api/products";
import { updateProduct } from "../../../slice/productSlice";

const UpdateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const getOneProducts = async () => {
      const { data } = await getProduct(id);
      console.log("get Data", data);
      reset(data);
    };
    getOneProducts();
  }, []);
  const onSubmit = async (dataForm) => {
    await dispatch(updateProduct(dataForm));
    console.log("data Form", dataForm);
    navigate("/admin/products");
  };

  return (
    <div className="w-4/5 mx-auto">
      <div className="title text-center mt-4">
        <h1 className=" font-bold text-blue-600 text-md lg:text-3xl">Cập nhật sản phẩm</h1>
      </div>
      <div className="form-input mt-10">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="py-4">
            <label className="px-2 text-lg">Ảnh sản phẩm</label>
            <div className="flex ">
              <input
                type="text"
                className="block p-2 w-full text-gray-900 bg-gray-50 border  sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("img", { required: true })}
              />
              {errors.img?.type === "required" && (
                <span className="text-red-500 text-lg font-lg">không được bỏ trống trường mục hình ảnh</span>
              )}
              <label
                htmlFor="dropzone-file"
                className="flex mx-2 flex-col justify-center items-center w-24 h-24 bg-gray-50 border border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <PlusOutlined />
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
              <label
                htmlFor="dropzone-file"
                className="flex mx-2 flex-col justify-center items-center w-20 h-20 bg-gray-50 border border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <PlusOutlined />
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
              <label
                htmlFor="dropzone-file"
                className="flex mx-2 flex-col justify-center items-center w-20 h-20 bg-gray-50 border border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <PlusOutlined />
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
              <label
                htmlFor="dropzone-file"
                className="flex mx-2 flex-col justify-center items-center w-20 h-20 bg-gray-50 border border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <PlusOutlined />
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <div className="py-4">
              <label className="px-2 text-lg">Tên sản phẩm</label>
              <input
                type="text"
                className="block p-2 w-full text-gray-900 bg-gray-50 border  sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <span className="text-red-500 text-lg font-lg">không được bỏ trống tên sản phẩm</span>
              )}
            </div>
          </div>
          <div className="py-4">
            <label className="px-2 text-lg">Danh mục sản phẩm</label>
            <select
              {...register("category", { required: true })}
              className="block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 border  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue>Danh Mục</option>
              <option value="">iPhone</option>
              <option value="">iPad</option>
              <option value="">iMac</option>
              <option value="">Apple Watch</option>
              <option value="">Phụ Kiện</option>
            </select>
          </div>
          <div className="py-4">
            <label className="px-2 text-lg">Giá tiền</label>
            <input
              type="number"
              className="block p-2 w-full text-gray-900 bg-gray-50 border  sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("price", { required: true })}
            />
            {errors.price?.type === "required" && (
              <span className="text-red-500 text-lg font-lg">không được bỏ trống giá tiền </span>
            )}
          </div>
          <div className="py-4">
            <label className="px-2 text-lg">Mô tả</label>
            <textarea
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mô tả sản phẩm...."
              {...register("description")}
            ></textarea>
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Cập nhật sản phẩm
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
