import { ReactNode, Suspense } from "react";
import ErrorBoundary from "./errorBoundary";

interface WithAsyncPropsType<P> {
  child: React.FC<P>;
  suspenseFallback?: ReactNode;
  errorFallback?: ReactNode;
}

const withAsync = <P,>(withAsyncProps: WithAsyncPropsType<P>) => {
  const Compo: React.FC<P> = (props) => {
    return (
      <ErrorBoundary fallback={withAsyncProps.errorFallback}>
        <Suspense fallback={withAsyncProps.suspenseFallback}>
          <withAsyncProps.child {...props} as any></withAsyncProps.child>
        </Suspense>
      </ErrorBoundary>
    );
  };

  return Compo;
};

export default withAsync;
