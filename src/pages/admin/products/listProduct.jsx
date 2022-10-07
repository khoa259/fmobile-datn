import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { List, Button } from "antd";
import { deleteProduct, getProducts } from "../../../slice/productSlice";

const ListProducts = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(getProducts())
      .unwrap()
      .then((value) => {
        setProducts(value);
      })
      .catch((err) => {});
  }, []);
  const removeItem = (id) => {
    dispatch(deleteProduct(id));
    setProducts(products.filter((item) => item.id !== id));
  };
  return (
    <div className="w-4/5 mx-auto">
      <div className="title text-center mt-4">
        <h1 className=" font-bold text-blue-600 text-md lg:text-4xl">Danh sách sản phẩm</h1>
      </div>
      <div className="button mt-16">
        <button className="bg-blue-500 px-6 py-3 text-white text-lg rounded-lg hover:bg-blue-600">
          <NavLink className="text-white important">Thêm mới</NavLink>
        </button>
      </div>
      <div className="mt-10">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 8,
          }}
          dataSource={products}
          footer={
            <div>
              <b>Fmobile</b>
            </div>
          }
          renderItem={(products, index) => (
            <List.Item key={products.index} extra={<img width={130} alt="logo" src={products.img} />}>
              <List.Item.Meta
                title={
                  <h1 className="text-2xl font-semibold text-black important" to={products.id}>
                    {products.name}
                  </h1>
                }
                description={<p className="text-gray-700 text-lg">{products.description}</p>}
              />
              <div className="py-2">
                <span className=" text-2xl font-medium text-red-500">{products.price} VNĐ </span>
                <span className=" pl-5 text-lg font-medium text-gray-500 line-through">{products.sale_price}VNĐ</span>
              </div>
              <Button>
                <Link to={`/admin/products/${products.id}/edit`}>Sửa</Link>
              </Button>
              <Button type="primary" danger style={{ marginLeft: 8 }} onClick={() => removeItem(products.id)}>
                Xóa
              </Button>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ListProducts;
