import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./0_presentation/components/layouts/Layout";
import Home from "./0_presentation/pages/Home";

const NotFound = React.lazy(
  () => import("./0_presentation/pages/core/NotFound")
);
const About = React.lazy(() => import("./0_presentation/pages/About"));
const Setting = React.lazy(() => import("./0_presentation/pages/Setting"));

const App: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/setting" element={<Setting></Setting>}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
