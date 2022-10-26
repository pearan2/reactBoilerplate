import { ReactNode } from "react";
import { Layout } from "antd";
import TDHeaderMenu from "./tdHeaderMenu";
import TDHeaderLogo from "./tdHeaderLogo";
import TDContent from "./tdContent";
const { Header, Content } = Layout;

interface LayoutProps {
  children?: ReactNode;
}

const TDLayout: React.FC<LayoutProps> = (props) => {
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <TDHeaderLogo></TDHeaderLogo>
        <TDHeaderMenu></TDHeaderMenu>
      </Header>
      <Content>
        <TDContent></TDContent>
      </Content>
    </Layout>
  );
};

export default TDLayout;
