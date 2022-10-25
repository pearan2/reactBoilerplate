import { ReactNode, Suspense } from "react";
import ErrorBoundary from "./errorBoundary";

interface withAsyncParam {
  child: ReactNode;
  suspenseFallback?: ReactNode;
  errorFallback?: ReactNode;
}

const withAsync = (param: withAsyncParam) => {
  return (
    <ErrorBoundary fallback={param.errorFallback}>
      <Suspense fallback={param.suspenseFallback}>{param.child}</Suspense>
    </ErrorBoundary>
  );
};

export default withAsync;
