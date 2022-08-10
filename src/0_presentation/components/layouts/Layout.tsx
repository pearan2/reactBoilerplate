import { Suspense } from "react";
import Header from "./Header";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Suspense fallback={<div>LoadingHeader...</div>}>
        <Header></Header>
      </Suspense>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
