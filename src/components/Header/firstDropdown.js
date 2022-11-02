import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: <span>1st menu item</span>
      },
      {
        key: "2",
        label: <span>2nd menu item</span>
      }
    ]}
  />
);
export const FirstDropdown = () => {
  return (
    <Dropdown overlay={menu} className="headerMenu_dd">
      <a href="/#">
        <Space>
          Mega Menu
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
