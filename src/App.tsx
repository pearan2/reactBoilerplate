import React, { Suspense } from "react";
import ErrorBoundary from "./lib/asyncBounrdary/errorBoundary";
import "antd/dist/antd.less";
import "./antDesignCustom.css";
import TDLayout from "./0_presentation/core/layout/tdLayout";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <TDLayout></TDLayout>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
