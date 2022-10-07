import { Space, Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div>
      <Space>
        <Spin size="large"></Spin>
      </Space>
    </div>
  );
};

export default Loading;
