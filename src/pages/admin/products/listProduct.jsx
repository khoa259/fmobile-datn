import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { List, Button } from "antd";
import { DeleteOutlined, PlusCircleOutlined, ToolOutlined } from "@ant-design/icons";
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
  return (
    <div className="w-4/5 mx-auto">
      <div className="title text-center mt-4">
        <h1 className=" font-bold text-blue-600 text-md lg:text-3xl">Danh sách sản phẩm</h1>
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
              <List.Item.Meta title={<a href={products.href}>{products.name}</a>} description={products.description} />
              <div>
                <span className="mt-1 text-xl font-medium text-red-500">{products.price} </span>
              </div>
              <Button icon={<ToolOutlined />}>
                <Link href={`/admin/products/${products.id}`}>Sửa</Link>
              </Button>
              <Button
                type="primary"
                danger
                style={{ marginLeft: 8 }}
                icon={<DeleteOutlined />}
                onClick={() => dispatch(deleteProduct(products.id))}
              >
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
