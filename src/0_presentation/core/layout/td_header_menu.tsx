import { Menu } from "antd";

export interface TDMenuItem {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: TDMenuItem[];
  popupOffset?: [number, number];
  type?: "group";
}

export interface TDHeaderMenuProps {
  items: TDMenuItem[];
}

const TDHeaderMenu: React.FC<TDHeaderMenuProps> = (props) => {
  const menuItemClickHandler = (t: any) => {
    console.log(t);
  };

  return (
    <Menu
      triggerSubMenuAction="click"
      style={{ width: "100%" }}
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={props.items}
      onClick={menuItemClickHandler}
    />
  );
};

export default TDHeaderMenu;
