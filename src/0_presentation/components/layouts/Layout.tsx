import { Suspense } from "react";
import Header, { HeaderFallback } from "./Header";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Suspense fallback={<HeaderFallback></HeaderFallback>}>
        <Header></Header>
      </Suspense>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
