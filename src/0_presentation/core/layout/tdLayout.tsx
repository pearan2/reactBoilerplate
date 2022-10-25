import { ReactNode } from "react";
import { Layout } from "antd";
import TDHeaderMenu from "./tdHeaderMenu";
const { Header, Content, Footer } = Layout;

interface LayoutProps {
  children?: ReactNode;
}

const makeListItem = () => {
  return new Array(30).fill(null).map((_, idx) => {
    return <li key={idx}>{idx}</li>;
  });
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
        <TDHeaderMenu></TDHeaderMenu>
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
