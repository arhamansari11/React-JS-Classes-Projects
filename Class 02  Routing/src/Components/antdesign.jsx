import React from "react";
import { Button, Popover } from "antd";
import { NotificationOutlined } from "@ant-design/icons";
import { Badge, Space } from "antd";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const Antdesign = () => {
  return (
    <>
      <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
      <Space>
        <Badge dot>
          <NotificationOutlined
            style={{
              fontSize: 16,
            }}
          />
        </Badge>
        <Badge dot>
          <a href="https://www.linkedin.com/in/arhamansari11/">
            Link something
          </a>
        </Badge>
      </Space>
    </>
  );
};

export default Antdesign;
