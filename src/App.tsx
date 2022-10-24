import React, { Suspense } from "react";
import ErrorBoundary from "./lib/errorBoundary/ErrorBoundary";
import "antd/dist/antd.min.css";
import TDLayout from "./0_presentation/core/layout/td_layout";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <TDLayout></TDLayout>
      </Suspense>
    </ErrorBoundary>
  );
};

// const App: React.FC = () => {
//   return (
//     <ErrorBoundary fallback={<h1>Oops! Something went wrong...</h1>}>
//       <Suspense fallback={<div>Loading Page...</div>}>
//         <Layout>
//           <Routes>
//             <Route path="*" element={<NotFound></NotFound>}></Route>
//             <Route path="/" element={<Home></Home>}></Route>
//             <Route path="/about" element={<About></About>}></Route>
//             <Route path="/setting" element={<Setting></Setting>}></Route>
//           </Routes>
//         </Layout>
//       </Suspense>
//     </ErrorBoundary>
//   );
// };

export default App;
