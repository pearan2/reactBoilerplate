import { ReactNode } from "react";
import { Layout } from "antd";
import TDHeaderMenu, { TDMenuItem } from "./td_header_menu";
import { MailOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

interface LayoutProps {
  children?: ReactNode;
}

const makeListItem = () => {
  return new Array(30).fill(null).map((_, idx) => {
    return <li key={idx}>{idx}</li>;
  });
};

const makeMenuItem = (): TDMenuItem[] => {
  return [
    {
      key: "1",
      label: "EP.1",
      icon: <MailOutlined></MailOutlined>,
      popupOffset: [0, 0],
      children: [
        { key: "1-1", label: "EP.2" },
        { key: "1-2", label: "EP.3" },
        {
          key: "1-3",
          label: "EP.4",
          popupOffset: [0, 0],
          children: [
            { key: "1-3-1", label: "EP.2" },
            { key: "1-3-2", label: "EP.3" },
            { key: "1-3-3", label: "EP.4" },
          ],
        },
      ],
    },
    { key: "2", label: "EP.2" },
    { key: "3", label: "EP.3" },
    { key: "4", label: "EP.4" },
    { key: "5", label: "EP.5" },
    { key: "6", label: "EP.6" },
    { key: "7", label: "EP.7" },
  ];
};
const TDLayout: React.FC<LayoutProps> = (props) => {
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
          height={48}
          alt="starwarsLogo"
        ></img>
        <TDHeaderMenu items={makeMenuItem()}></TDHeaderMenu>
      </Header>
      <Content>
        <div className="site-layout-content">
          <ul>{makeListItem()}</ul>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default TDLayout;
