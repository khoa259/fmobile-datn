import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="red-10">
            <Link to="/">Back Home</Link>
          </Button>
        }
      />
    </div>
  );
};

export default Page404;
